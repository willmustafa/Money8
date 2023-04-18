import React from "react";
import styles from "./AccountIcon.module.css";
import IconRound, { IIconRound } from "../UI/IconRound/IconRound";
import Image from "next/image";
import stylesIconRound from "../UI/IconRound/IconRound.module.css"

interface IAccountIcon extends IIconRound {
  icon: 'nubank' | 'bb' ;
}

export default function AccountIcon(props: IAccountIcon) {
  return (
    <div className={styles.accountIcon}>
      <i className={`${styles[props.icon]} ${stylesIconRound.iconRound}`}><Image src={`/institutions/${props.icon}.svg`} alt={props.icon} width="15" height="15"/></i>
      {props.children}
    </div>
  );
}
