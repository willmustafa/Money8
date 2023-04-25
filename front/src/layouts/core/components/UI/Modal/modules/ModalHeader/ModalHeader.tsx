import React from "react";
import styles from "./ModalHeader.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IModalHeader {
    title: string;
    setIsOpen: Function
}

export default function ModalHeader(props: IModalHeader) {
  return (
    <div className={styles.modalHeaderWrapper}>
      <h5 className="mb-0">{props.title}</h5>
      <div className={styles.closeButton} onClick={() => props.setIsOpen(false)}>
        <FontAwesomeIcon icon={['fas', 'x']} />
      </div>
    </div>
  );
}
