import { colors } from "@/models/colors.dto";
import React from "react";
import styles from "./TagColor.module.css";

interface ITagColor {
  color: colors;
  title: string;
  subtitle: string;
}

export default function TagColor(props: ITagColor) {
  return (
    <div className={styles.tag_wrapper}>
      <span className={`${styles.tag_color} bg-${props.color}`}></span>
      <div>
        <h6>{props.title}</h6>
        <h6>{props.subtitle}</h6>
      </div>
    </div>
  );
}
