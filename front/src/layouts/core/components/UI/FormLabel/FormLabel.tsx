import React from 'react'
import styles from './FormLabel.module.css'

interface IFormLabel extends React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement> {
    children: React.ReactNode
}

export default function FormLabel(props: IFormLabel) {
  return (
    <label className={styles.label} {...props}>{props.children}</label>
  )
}
