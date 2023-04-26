import React from "react";
import styles from "./ProgressBar.module.css";

interface IProgressBar {
  percentage: number;
  max: number;
  current?: number;
  subText?: string;
  color?:
    | "dark"
    | "white"
    | "dark-blue"
    | "blue"
    | "light-blue"
    | "steel-blue"
    | "green"
    | "red"
    | "light-red"
    | "indigo"
    | "violet"
    | "gray"
    | "orange";
}

export default function ProgressBar(props: IProgressBar) {
  const current = props?.current ?? props.max * (props.percentage / 100);
  const color = props?.color ? styles[`bg-${props.color}`] : styles['bg-blue']

  return (
    <div className={styles.progressBarWrapper}>
      <h6>
        R$ {current} / {props.max}
      </h6>
      <div className={styles.progressBar}>
        <div
          className={`${styles.progressBarFill} ${color}`}
          style={{ width: `${props.percentage}%` }}
        ></div>
      </div>
      {props.subText && (
        <p className={`${styles.small} mb-0 mt-1`}>{props.subText}</p>
      )}
    </div>
  );
}
