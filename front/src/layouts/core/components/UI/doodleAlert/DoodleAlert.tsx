import Image, { StaticImageData } from "next/image";
import React from "react";
import styles from "./DoodleAlert.module.css";
import { colors } from "@/models/colors.dto";

interface IDoodleAlert {
  color: colors,
  title: string,
  subtitle: string,
  image: StaticImageData,
}

export default function DoodleAlert(props: IDoodleAlert) {
  return (
    <div className={`${styles.card_outter} bg-${props.color}`}>
      <div className={styles.img_container}>
        <Image src={props.image} alt="alert image" />
      </div>
      <div className={styles.card}>
        <div>
          <h3><b>{props.title}</b></h3>
          <h5>{props.subtitle}</h5>
        </div>
      </div>
    </div>
  );
}
