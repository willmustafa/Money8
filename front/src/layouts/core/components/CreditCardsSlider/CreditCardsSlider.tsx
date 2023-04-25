import React from "react";
import CreditCardCard from "../CreditCardCard/CreditCardCard";
import Image from "next/image";
import styles from './CreditCardsSlider.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CreditCardsSlider() {
  const accountEditHandler = () => {
    alert("edit");
  };
  const accountImportHandler = () => {
    alert("import");
  };

  return (
    <div className={styles.sliderWrapper}>
      <div className={styles.sliderFirst}>
        <CreditCardCard
          bg="generic"
          title="NuBank"
          icon={
            <Image
              src="/institutions/nubank.svg"
              alt="bank logo"
              width={55}
              height={30}
            />
          }
          currentValue={600}
          limit={1200}
          paymentDate="08/20"
          handleEdit={accountEditHandler}
          handleImport={accountImportHandler}
        />
      </div>
      <div className={styles.sliderSecond}></div>
      <div className={styles.sliderThird}></div>
      <div className={styles.iconDown}>
        <FontAwesomeIcon icon={['fas', 'arrow-down']} />
      </div>
    </div>
  );
}
