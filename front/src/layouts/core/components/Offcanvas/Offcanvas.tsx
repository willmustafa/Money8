import React, { useEffect, useRef } from "react";
import styles from "./Offcanvas.module.css";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
          props.handler();
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  };

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  const slideAnimation = {
    hidden: {
      x: '100vw'
    },
    visible: {
      x: 0,
      transition: {
        duration: 0.5
      }
    },
    exit: {
      x: '100vw',
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={variants}
      className={styles.offcanvas}
    >
      <div ref={wrapperRef} className={`col-12 col-lg-6 col-xl-4 ${styles.offcanvasInner}`}>
        <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={slideAnimation}
        >
          <div className={styles.offcanvasInnerWrapper}>
            <div className={styles.fixedReturn} onClick={() => props.handler()}>
              <FontAwesomeIcon icon={["fas", "arrow-left"]} />
            </div>
            {props.children}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
