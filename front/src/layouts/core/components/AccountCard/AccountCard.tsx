import React, { MouseEventHandler, useEffect, useRef, useState } from "react";
import styles from "./AccountCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CustomCard from "../UI/customCard/customCard";

interface ICustomCard {
  bg?: "plus" | "generic";
  title: string;
  icon?: React.ReactNode;
  text?: string;
  subtext?: string;
  creditCard?: boolean;
  handleEdit?: MouseEventHandler;
  handleImport?: MouseEventHandler;
  handleCreate?: MouseEventHandler;
}


export default function AccountCard(props: ICustomCard) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [contentHeight, setContentHeight] = useState("0px");
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(`${contentRef.current.scrollHeight}px`);
    }
  }, []);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
    setContentHeight(
      isExpanded ? "0px" : `${contentRef.current?.scrollHeight}px`
    );
  };

  return (
    <CustomCard {...props}>
        <div className={`${styles.customCardInner} ${styles.expansive}`}>
        <div className={styles.cardHeader}>
            <span>{props.title}</span>
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
        <div className={styles.cardBody} onClick={toggleExpand}>
            <div>{props.icon}</div>
            <div className="d-block">
            <h5 className="text-white fw-bold">{props.text}</h5>
            <p className="mb-0">{props.subtext}</p>
            </div>
            <div
            ref={contentRef}
            className={`d-flex gap-1 flex-column mb-3 ${
                isExpanded ? styles.collapsibleContentActive : ""
            } ${styles.collapsibleContent}`}
            style={{ maxHeight: contentHeight }}
            >
            <div className="d-block">
                <p className="mb-0">Total na conta:</p>
                <h5 className="text-white fw-bold">{props.text}</h5>
            </div>
            <div className="d-block">
                <p className="mb-0">Destinado a um objetivo:</p>
                <h5 className="text-white fw-bold">{props.text}</h5>
            </div>
            <div className="d-block">
                <p className="mb-0">Disponível na Conta Corrente:</p>
                <h5 className="text-white fw-bold">{props.text}</h5>
            </div>
            </div>
        </div>
        <span className={`${styles.arrowDownFixed}`}>
            <FontAwesomeIcon icon={["fas", "angles-down"]} />
        </span>
        </div>
    </CustomCard>
  );
}
