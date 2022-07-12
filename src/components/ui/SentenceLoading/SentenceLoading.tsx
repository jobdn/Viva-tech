import React from "react";
import { motion } from "framer-motion";

import styles from "./SentenceLoading.module.scss";

const loadingContainerVariants = {
  start: {
    opacity: 0,
    display: "none",
  },
  end: {
    display: "flex",
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
    },
  },
};

type T = "loop" | "reverse" | "mirror" | undefined;

const loadingCircleTransition = {
  duration: 0.5,
  repeat: Infinity,
  repeatType: "reverse" as T,
};

const loadingCircleVariants = {
  start: {
    y: "0%",
  },
  end: {
    y: "60%",
    transition: loadingCircleTransition,
  },
};

export const SentenceLoading: React.FC<{ loadingPosition: string }> = ({
  loadingPosition,
}) => {
  const circleContainerStyle =
    loadingPosition === "Left"
      ? styles.loadingContainer
      : `${styles.loadingContainer} ${styles.loadingContainerRight}`;

  return (
    <motion.div
      className={circleContainerStyle}
      variants={loadingContainerVariants}
    >
      {Array.from({ length: 3 }).map((circle, idx) => (
        <motion.span
          key={idx}
          className={styles.circle}
          variants={loadingCircleVariants}
        ></motion.span>
      ))}
    </motion.div>
  );
};
