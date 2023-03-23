import { toCurrency } from "@/helpers/Numbers";
import { colors } from "@/models/colors.dto";
import { IconName } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "./CardInfo.module.css";

interface ICardInfo {
  title: string;
  value: string | number;
  icon: IconName;
  percentage?: number;
  iconColor?: colors;
}

export default function CardInfo(props: ICardInfo) {
  const formatedValue = props.value.toString().startsWith("R$")
    ? props.value
    : toCurrency(props.value);
  const icon = props.icon ?? "money-bill";
  const formatedPercentage =
    (props.percentage || 0) > 0 ? `+${props.percentage}` : props.percentage;
  const percentageColor =
    (props?.percentage || 0) >= 0 ? "color-green" : "color-danger";

  return (
    <div className={styles.card}>
      <div className={styles.info_header}>
        <div className={styles.info}>
          <span>{props.title}</span>
          <h4 className="money">
            <b>{formatedValue}</b>
          </h4>
        </div>
        <div
          className={`${styles.round_icon} bg-${props.iconColor ?? "indigo"}`}
        >
          <FontAwesomeIcon icon={["fas", icon]} />
        </div>
      </div>
      {props?.percentage ? (
        <div className="row">
          <span>
            <b className={`${percentageColor} me-1`}>{formatedPercentage}%</b>{" "}
            <small className="color-faded">desde o mês passado</small>
          </span>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
