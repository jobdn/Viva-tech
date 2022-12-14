import React from "react";
import { motion } from "framer-motion";

import { ISentence } from "models/ISentence";
import { AboutCard } from "components/ui/AboutCard";
import { Sentence } from "components/ui/Sentence";
import aboutSentencesJSON from "store/about-sentences.json";

import styles from "./AboutPage.module.scss";
import { aboutSentenceListVars } from "constants/sentence";
import withSentenceAnimation from "hoc/withSentenceAnimation";

const sentences: ISentence[] = aboutSentencesJSON as ISentence[];

export const AboutPage: React.FC = () => {
  return (
    <div className={"page " + styles.aboutPage}>
      <AboutCard />
      <MAboutSentenceList />

    </div>
  );
};

const AboutSentenceList: React.FC = () => {
  return (
    <motion.div variants={aboutSentenceListVars} initial="start" animate="end">
      {sentences.map((sentence) => (
        <Sentence
          key={sentence.id}
          delay={sentence.id}
          sentencePosition={sentence.position}
        >
          {sentence.text}
        </Sentence>
      ))}
    </motion.div>
  );
};

const MAboutSentenceList = withSentenceAnimation(AboutSentenceList);
