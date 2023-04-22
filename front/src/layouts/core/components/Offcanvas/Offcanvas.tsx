import React, { useEffect, useRef } from "react";
import styles from "./Offcanvas.module.css";
import { motion } from "framer-motion";

interface IOffcanvas {
  children: React.ReactNode;
  handler: Function;
}

export default function Offcanvas(props: IOffcanvas) {
  const variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  const useOutsideAlerter = (ref: React.MutableRefObject<any>) => {
    useEffect(() => {
      function handleClickOutside(event: Event) {
        if (ref.current && !ref.current.contains(event.target)) {
          props.handler()
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={variants}
      className={styles.offcanvas}
    >
      <div ref={wrapperRef} className={styles.offcanvasInner}>
        {props.children}
      </div>
    </motion.div>
  );
}
