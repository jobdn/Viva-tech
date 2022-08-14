import React from "react";
import { motion } from "framer-motion";

import { IAboutSentenceProps } from "../../../models/IAboutSectionProps";

import styles from "./Sentence.module.scss";
import { SentenceLoading } from "../SentenceLoading";
import { STAGGER_CHILDREN } from "../../../constants/sentence";

const sentenceVars = {
  start: {
    opacity: 0,
  },
  end: {
    opacity: 1,
    marginBottom: 40,
    transition: {
      duration: 1,
    },
  },
};

const textVars = {
  start: {
    scaleX: 0,
    opacity: 0,
  },
  end: {
    scaleX: 1,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

export const Sentence: React.FC<IAboutSentenceProps> = ({
  children,
  delay,
  sentencePosition,
}) => {
  const [isLoading, setIsLoading] = React.useState(true);

  const sentenceContainerClass =
    sentencePosition === "Left"
      ? styles.sentenceContainer
      : styles.sentenceContainerRight;

  React.useEffect(() => {
    const id = setTimeout(() => {
      setIsLoading(false);
      // the sentence appears in 3 seconds
    }, STAGGER_CHILDREN * 1000 * delay + 3000);
    
    return () => clearTimeout(id);
  }, [delay]);

  return (
    <motion.div variants={sentenceVars} className={sentenceContainerClass}>
      {isLoading ? (
        <SentenceLoading loadingPosition={sentencePosition} />
      ) : (
        <motion.article variants={textVars} className={styles.sentence}>
          {children}
        </motion.article>
      )}
    </motion.div>
  );
};
