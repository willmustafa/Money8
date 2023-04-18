import React, { MouseEventHandler } from "react";
import styles from "./customCard.module.css";

export interface ICustomCard {
  bg?: "plus" | "generic";
  title: string;
  handleCreate?: MouseEventHandler;
  children?: React.ReactNode;
}

export default function CustomCard(props: ICustomCard) {
  const bgStyle = styles[`bg-${props.bg}`] ?? styles["bg-plus"];

  return (
    <div
      className={`${styles.customCardWrapper} ${styles.bg} ${bgStyle} ${styles.cursorPointer}`}
      onClick={props.handleCreate}
    >
      {!props.children ? <_TitleOnly {...props} /> : props.children }
    </div>
  );
}

function _TitleOnly(props: ICustomCard) {
  return (
    <div className={styles.customCardInner}>
      <span className={styles.title}>{props.title}</span>
    </div>
  );
}
