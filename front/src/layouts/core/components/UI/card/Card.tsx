import React from "react";
import styles from "./Card.module.css";

interface ICard {
  title: string;
  children?: React.ReactNode;
}

export default function Card(props: ICard) {
  return (
    <div className={styles.card}>
      <h4 className="w-100">
        <b>{props.title}</b>
      </h4>
      <div className="row w-100">{props.children}</div>
    </div>
  );
}
