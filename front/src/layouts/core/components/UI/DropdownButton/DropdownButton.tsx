import React, { MouseEventHandler, useEffect, useRef, useState } from "react";
import styles from "./DropdownButton.module.css";

interface IDropdownButton {
  button: React.ReactNode;
  children: React.ReactNode;
}

export default function DropdownButton(props: IDropdownButton) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  const useOutsideAlerter = (ref: React.MutableRefObject<any>) => {
    useEffect(() => {
      function handleClickOutside(event: Event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsOpen(false);
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

  return (
    <div className={styles.dropdown} ref={wrapperRef}>
      <div className={`${styles.inner} ${isOpen ? styles.active : ''}`} onClick={toggleDropdown}>
        {props.button}
      </div>
      {isOpen && <div className={styles.dropdownMenu}>{props.children}</div>}
    </div>
  );
}
