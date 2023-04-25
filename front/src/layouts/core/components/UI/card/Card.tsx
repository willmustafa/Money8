import React from "react";
import styles from "./Card.module.css";
import _CommonCard from "./_common";
import _FullWidth from "./_fullWidth";

export interface ICard {
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
  fullWidth?: boolean;
  overflowX?: boolean;
}

export default function Card(props: ICard) {
  return (
    <div
      className={`${styles.card} ${props?.fullWidth ? styles.fullWidth : ""} ${
        props.overflowX ? "overflow-x-scroll" : ""
      }`}
    >
      {props?.fullWidth !== true ? _CommonCard(props) : _FullWidth(props)}
    </div>
  );
}
