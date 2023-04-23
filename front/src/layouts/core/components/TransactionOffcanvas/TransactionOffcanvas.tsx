import React, { useState } from "react";
import styles from "./TransactionOffcanvas.module.css";
import FormInput from "../UI/FormInput/FormInput";
import { CurrencyInput } from "react-currency-mask";
import FormLabel from "../UI/FormLabel/FormLabel";
import FormSelect from "../UI/FormSelect/FormSelect";
import Button from "../UI/button/Button";

export default function TransactionOffcanvas() {
  const [value, setValue] = useState('R$ 0,00');

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h6>Valor da Receita</h6>
        <CurrencyInput
          value={value}
          onChangeValue={(_, value) => {
            setValue(value.toString());
          }}
          InputElement={<FormInput value={value} variation="underline" lg />}
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
  );
}
