import React from "react";

import { AboutCard } from "../../components/AboutCard";

import styles from "./About.module.scss";

export const AboutPage: React.FC = () => {
  return (
    <div className={styles.about}>
      <AboutCard />
    </div>
  );
};
