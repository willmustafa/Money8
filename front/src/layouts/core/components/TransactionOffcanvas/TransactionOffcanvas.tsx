import React, { useState } from "react";
import styles from "./TransactionOffcanvas.module.css";
import FormInput from "../UI/FormInput/FormInput";
import { CurrencyInput } from "react-currency-mask";
import FormLabel from "../UI/FormLabel/FormLabel";
import FormSelect from "../UI/FormSelect/FormSelect";
import Button from "../UI/button/Button";
import { AnimatePresence } from "framer-motion";
import Offcanvas from "../Offcanvas/Offcanvas";
import TransactionButton from "../TransactionButton/TransactionButton";

interface ITransactionOffcanvas {
  type: "expense" | "income" | "transfer";
}

function formatTitle(type: string) {
  let title = "Valor";
  switch (type) {
    case "expense":
      title = "Valor da despesa";
      break;
    case "income":
      title = "Valor da receita";
      break;
    case "transfer":
      title = "Valor da transferência";
      break;
    default:
      break;
  }
  return title;
}

export default function TransactionOffcanvas(props: ITransactionOffcanvas) {
  const [value, setValue] = useState("R$ 0,00");
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  let title = formatTitle(props.type);

  return (
    <>
      <AnimatePresence>
        {showOffcanvas && (
          <Offcanvas handler={() => setShowOffcanvas(!showOffcanvas)}>
            <div className={styles.wrapper}>
              <div className={`${styles.header} ${styles[props.type]}`}>
                <h6>{title}</h6>
                <CurrencyInput
                  value={value}
                  onChangeValue={(_, value) => {
                    setValue(value.toString());
                  }}
                  InputElement={
                    <FormInput value={value} variation="underline" lg />
                  }
                />
              </div>
              <div className={styles.body}>
                <div className="mb-3">
                  <FormLabel htmlFor="date">Data</FormLabel>
                  <FormInput
                    name="date"
                    variation="transparent"
                    type="date"
                    value={new Date().toISOString().substring(0, 10)}
                  />
                </div>
                <div className="mb-3">
                  <FormLabel htmlFor="description">Descrição</FormLabel>
                  <FormInput
                    name="description"
                    variation="transparent"
                    placeholder="Ração de cachorro"
                  />
                </div>
                <div className="mb-3">
                  <FormLabel htmlFor="category">Categoria</FormLabel>
                  <FormSelect options={[{ value: "teste", label: "teste" }]} />
                </div>
                <div className="mb-3">
                  <FormLabel htmlFor="account">Conta</FormLabel>
                  <FormSelect options={[{ value: "teste", label: "teste" }]} />
                </div>
                <div className="mb-3">
                  <FormLabel htmlFor="tags">Tags</FormLabel>
                  <FormSelect options={[{ value: "teste", label: "teste" }]} />
                </div>
              </div>
              <div className={styles.footer}>
                <Button variant="danger">Cancelar</Button>
                <Button variant="success">Salvar</Button>
              </div>
            </div>
          </Offcanvas>
        )}
      </AnimatePresence>
      <TransactionButton onClick={() => setShowOffcanvas(!showOffcanvas)} />
    </>
  );
}
