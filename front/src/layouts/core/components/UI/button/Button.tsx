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

export default function Button({
  className,
  type,
  outline,
  variant,
  lg,
  ...props
}: IButton) {
  const getClasses = () => {
    let classes = `${styles.button} `;
    if (outline) classes += `${styles["button-outline"]} `;
    if (lg) classes += `${styles.lg} `;
    if (className) classes += `${className} `;
    if (variant && !outline) classes += styles[`button-${variant}`] + " ";
    if (variant && outline)
      classes += styles[`button-outline-${variant}`] + " ";
    return classes;
  };

  return (
    <button className={getClasses()} type={type ?? "button"} {...props}>
      {props.children}
    </button>
  );
}
