import React from "react";
import styles from './InputGroup.module.css'

export interface IInputGroup {
    children: React.ReactNode;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
}

export default function InputGroup(props: IInputGroup) {
  return (
    <div className={styles.inputGroup}>
      {props.leftIcon ? (<span className={styles.inputGroupIcon}>{props.leftIcon}</span>) : ''}
      {props.children}
      {props.rightIcon ? (<span className={styles.inputGroupIcon}>{props.rightIcon}</span>) : ''}
    </div>
  );
}
