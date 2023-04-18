import React from "react";
import { motion } from "framer-motion";

interface ITransition {
  children: React.ReactNode;
}

export default function Transition(props: ITransition) {
  const pageTransitionVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransitionVariants}
    >
      {props.children}
    </motion.div>
  );
}
