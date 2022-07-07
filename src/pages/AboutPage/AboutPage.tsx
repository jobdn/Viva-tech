import React from "react";

import { AboutCard } from "../../components/AboutCard";
import { Sentence } from "../../components/Sentence";

import styles from "./AboutPage.module.scss";

export const AboutPage: React.FC = () => {
  return (
    <div className={"page " + styles.aboutPage}>
      <AboutCard />
      <Sentence />
    </div>
  );
};
