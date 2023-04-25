import { useEffect, useRef, useState } from "react";
import styles from "./Modal.module.css";
import ModalHeader from "./modules/ModalHeader/ModalHeader";

interface IModal {
  children: React.ReactNode;
  setIsOpen: Function;
  isOpen: boolean;
  title: string;
  size?: 'sm' | 'lg' | 'xl' | 'md'
}

export default function Modal(props: IModal) {
  const useOutsideAlerter = (ref: React.MutableRefObject<any>) => {
    useEffect(() => {
      function handleClickOutside(event: Event) {
        if (ref.current && !ref.current.contains(event.target)) {
          props.setIsOpen(false);
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

  return (
    <>
      {props.isOpen && (
        <>
          <div className={styles.modalOverlay}></div>
          <div className={`${styles.modal} ${size}`} ref={wrapperRef}>
            <ModalHeader {...props} />
            <div className={styles.modalBody}>{props.children}</div>
          </div>
        </>
      )}
    </>
  );
}
