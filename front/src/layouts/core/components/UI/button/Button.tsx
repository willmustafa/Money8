import React from "react";
import styles from "./Button.module.css";

export interface IButton extends React.ButtonHTMLAttributes<Element> {
  children: React.ReactNode;
  variant:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark"
    | "transparent";
  outline?: boolean;
  lg?: boolean;
}

export default function Button(props: IButton) {
  const getClasses = () => {
    let classes = `${styles.button} `;
    if (props.lg) classes += `${styles.lg} `;
    if (props.className) classes += `${props.className} `;
    if (props.variant && !props.outline)
      classes += styles[`button-${props.variant}`] + " ";
    if (props.variant && props.outline)
      classes += styles[`button-outline-${props.variant}`] + " ";
    if (props.outline) classes += styles["button-outline"];
    return classes;
  };

  return (
    <button className={getClasses()} type={props.type ?? "button"}>
      {props.children}
    </button>
  );
}
