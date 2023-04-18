import React from "react";
import styles from "./Badge.module.css";
import { IColor } from "@/layouts/core/dtos/IColor";

export interface IBadge {
  children?: React.ReactNode;
  color?: IColor;
}

export default function Badge(props: IBadge) {
  const getClasses = () => {
    let classes = `${styles.badge} `;
    if (props.color) classes += styles[`badge-${props.color}`];
    return classes;
  };
  
  return <span className={getClasses()}>{props.children}</span>;
}
