import React from "react";
import { motion } from "framer-motion";

import { IAboutSentenceProps } from "../../models/AboutSectionProps";

import styles from "./Sentence.module.scss";

const animation = {
  hidden: {
    scaleX: 0,
    opacity: 0,
  },
  visible: (custom: number) => ({
    scaleX: 1,
    opacity: 1,
    transition: {
      delay: custom * 1,
      duration: 0.8,
    },
  }),
};

export const Sentence: React.FC<IAboutSentenceProps> = ({
  children,
  delay,
  direction,
}) => {
  const sentenceClass = `${styles.sentence} ${
    direction === "Left" ? styles.sentenceLeft : styles.sentenceRight
  }`;

  return (
    <motion.div
      className={styles.sentenceContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div variants={animation} custom={delay} className={sentenceClass}>
        {children}
      </motion.div>
    </motion.div>
  );
};
