import { useEffect, useRef, useState } from "react";
import styles from "./Modal.module.css";
import ModalHeader from "./modules/ModalHeader/ModalHeader";
import Close from "../button/Close/Close";

interface IModal {
  children: React.ReactNode;
  setIsOpen: Function;
  isOpen: boolean;
  title?: string;
  size?: 'sm' | 'lg' | 'xl' | 'md';
  fullSize?: boolean;
}

export default function Modal(props: IModal) {
  const useOutsideAlerter = (ref: React.MutableRefObject<any>) => {
    useEffect(() => {
      function handleClickOutside(event: Event) {
        if (ref.current && !ref.current.contains(event.target)) {
          closeModal()
        }
      }

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  };

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  const size = props?.size ? styles[props.size] : styles.md

  const closeModal = () => {
    props.setIsOpen(false)
  }

  return (
    <>
      {props.isOpen && (
        <>
          <div className={styles.modalOverlay}></div>
          <div className={`${styles.modal} ${size} ${styles[props.fullSize ? 'fullSize' : '']}`} ref={wrapperRef}>
            <div className={styles.closeButton}>
              <Close onClick={closeModal} />
            </div>
            {props.title && <ModalHeader {...props} />}
            <div className={styles.modalBody}>{props.children}</div>
          </div>
        </>
      )}
    </>
  );
}
