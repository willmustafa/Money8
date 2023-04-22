import React, { MouseEventHandler } from "react";
import styles from "./CreditCardCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CustomCard from "../UI/customCard/customCard";
import { toCurrency } from "@/helpers/Numbers";

interface ICustomCard {
  bg?: "plus" | "generic";
  title: string;
  icon?: React.ReactNode;
  currentValue: number;
  limit?: number;
  paymentDate?: string;
  handleEdit?: MouseEventHandler;
  handleImport?: MouseEventHandler;
  handleCreate?: MouseEventHandler;
}

export default function CreditCardCard(props: ICustomCard) {
  return (
    <CustomCard {...props}>
      <div className={`${styles.customCardInner} ${styles.expansive}`}>
        <div className={`d-flex flex-column w-100 ${styles.innerProgression}`} style={{"--innerProgression": "50%"} as any}>
          <div className={styles.cardHeader}>
            <span>Fatura atual</span>
            <div className={`d-flex gap-3 ${styles.iconWrapper}`}>
              <span
                className={styles.click}
                onClick={props.handleEdit ?? function () {}}
              >
                <FontAwesomeIcon icon={["fas", "edit"]} />
              </span>
              <span
                className={styles.click}
                onClick={props.handleImport ?? function () {}}
              >
                <FontAwesomeIcon icon={["fas", "cloud-arrow-up"]} />
              </span>
            </div>
          </div>
          <div className={styles.cardBody}>
            <div className="d-block">
              <h4 className="text-white fw-bold">
                {toCurrency(props.currentValue)}
              </h4>
              {props.limit && (
                <p className={`mb-0 ${styles.subtext}`}>
                  Limite: {toCurrency(props.limit)}
                </p>
              )}
            </div>
            <div className={`mt-auto ${styles.cardFooter}`}>
              <div className={styles.logoWrapper}>{props.icon}</div>
              {props.paymentDate && (
                <div className={styles.paymentDate}>
                  <p className="mb-0">Data de pagamento:</p>
                  <p className="mb-0">{props.paymentDate}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </CustomCard>
  );
}
