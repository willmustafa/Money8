import React from 'react'
import styles from './Button.module.css'

export interface IButton {
    children: React.ReactNode;
    variant: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'transparent';
    type?: 'button' | 'reset' | 'submit';
    outline?: boolean;
}

export default function Button(props: IButton) {
    const getClasses = () => {
        let classes = `${styles.button} `;
        if (props.variant && !props.outline) classes += styles[`button-${props.variant}`] + ' ';
        if (props.variant && props.outline) classes += styles[`button-outline-${props.variant}`] + ' ';
        if (props.outline) classes += styles['button-outline'];
        return classes;
      };

  return (
    <button className={getClasses()} type={props.type ?? 'button'}>{props.children}</button>
  )
}
