import React, { InputHTMLAttributes } from 'react'
import styles from './FormInput.module.css'

export default function FormInput(props: InputHTMLAttributes<Element>) {
  return (
    <input className={`${styles.formControl} ${props.className}`} {...props} />
  )
}
