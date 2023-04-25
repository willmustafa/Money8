import React, { MouseEventHandler, useState } from "react";
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

  return (
    <div className={styles.dropdown}>
      <div className={`${styles.inner} ${isOpen ? styles.active : ''}`} onClick={toggleDropdown}>
        {props.button}
      </div>
      {isOpen && <div className={styles.dropdownMenu}>{props.children}</div>}
    </div>
  );
}
