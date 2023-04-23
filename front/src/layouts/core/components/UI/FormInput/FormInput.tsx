import React, { InputHTMLAttributes } from 'react'
import styles from './FormInput.module.css'

interface IFormInput extends InputHTMLAttributes<Element> {
  variation?: "underline" | "transparent";
  lg?: boolean;
}

export default function FormInput(props: IFormInput) {
  const variation = props.variation && styles[props.variation]
  const size = props.lg ? styles.lg : ''

  return (
    <input className={`${variation} ${size} ${styles.formControl} ${props.className}`} {...props} />
  )
}
