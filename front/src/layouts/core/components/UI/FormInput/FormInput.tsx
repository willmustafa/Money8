import React, { InputHTMLAttributes } from "react";
import styles from "./FormInput.module.css";

interface IFormInput extends InputHTMLAttributes<Element> {
  variation?: "underline" | "transparent";
  lg?: boolean;
  customUnderline?: boolean;
  label?: string;
}

export default function FormInput({variation, lg, className, customUnderline, ...props}: IFormInput) {
  const variationValue = variation && styles[variation];
  const size = lg ? styles.lg : "";

  return (
    <>
      {customUnderline ? (
        <UnderlineInput {...props} />
      ) : (
        <input
          className={`${variationValue} ${size} ${styles.formControl} ${className}`}
          {...props}
        />
      )}
    </>
  );
}

function UnderlineInput({ name, label, className, ...props }: IFormInput) {
  return (
    <div className={styles.field}>
      <label htmlFor={name} className={styles.fieldWrapper}>
        {label}
      </label>
      <input id={name} className={`${styles.fieldInput} ${className}`} {...props} />
      <span className={styles.fieldLabelWrap} aria-hidden="true">
        <span className={styles.fieldLabel}>{label}</span>
      </span>
    </div>
  );
}
