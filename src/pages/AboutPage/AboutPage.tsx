import React from "react";

import { ISentence } from "../../models/Sentence";
import { AboutCard } from "../../components/AboutCard";
import { AboutSentence } from "../../components/AboutSentence";
import sentencesJSON from "../../store/sentences.json";

import styles from "./AboutPage.module.scss";

const sentences: ISentence[] = sentencesJSON as ISentence[];

export const AboutPage: React.FC = () => {
  return (
    <div className={"page " + styles.aboutPage}>
      <AboutCard />
      <AboutSentencesList />
    </div>
  );
};

const AboutSentencesList: React.FC = () => {
  return (
    <>
      {sentences.map((sentence) => (
        <AboutSentence
          key={sentence.id}
          delay={sentence.id + 1}
          direction={sentence.direction}
        >
          {sentence.text}
        </AboutSentence>
      ))}
    </>
  );
};
