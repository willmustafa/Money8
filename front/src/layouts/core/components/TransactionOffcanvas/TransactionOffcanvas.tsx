import React, { useState } from "react";
import styles from "./TransactionOffcanvas.module.css";
import FormInput from "../UI/FormInput/FormInput";
import { CurrencyInput } from "react-currency-mask";

export default function TransactionOffcanvas() {
  const [value, setValue] = useState(0.00);

  return (
    <div>
      <div className={styles.header}>
        <h6>Valor da Receita</h6>
        <CurrencyInput
          value={value}
          onChangeValue={(_, value) => {
            setValue(parseFloat(value.toString()));
          }}
          InputElement={<FormInput value={value} variation="underline" lg />}
        />
      </div>
    </div>
  );
}
