import React from "react";
import Select from "react-select";
import styles from "./FormSelect.module.css";

export default function FormSelect(props: any) {
  return (
    <Select
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          borderColor: 'var(--dark)',
          backgroundColor: 'transparent'
        }),
      }}
      placeholder="Selecione..."
      {...props}
    />
  );
}
