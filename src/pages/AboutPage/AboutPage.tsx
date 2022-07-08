import React from "react";

import { ISentence } from "../../models/Sentence";
import { AboutCard } from "../../components/AboutCard";
import { Sentence } from "../../components/Sentence";
import aboutSentencesJSON from "../../store/about-sentences.json";

import styles from "./AboutPage.module.scss";
import { ProjectsButton } from "../../components/ProjectsButton";

const sentences: ISentence[] = aboutSentencesJSON as ISentence[];

export const AboutPage: React.FC = () => {
  return (
    <div className={"page " + styles.aboutPage}>
      <AboutCard />
      {/* TODO: make here arrow */}
      <AboutSentencesList />
      <ProjectsButton />
    </div>
  );
};

const AboutSentencesList: React.FC = () => {
  return (
    <>
      {sentences.map((sentence) => (
        <Sentence
          key={sentence.id}
          delay={sentence.id + 1}
          direction={sentence.direction}
        >
          {sentence.text}
        </Sentence>
      ))}
    </>
  );
};
