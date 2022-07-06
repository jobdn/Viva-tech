import React from "react";
import { animated, useSpring } from "react-spring";

import { AboutCard } from "../../components/AboutCard";

import styles from "./About.module.scss";

export const AboutPage: React.FC = () => {
  // TODO: make hook for animated components
  const animatedProps = useSpring({ from: { opacity: 0 }, to: { opacity: 1 } });
  return (
    // TODO: make hoc for animated components
    <animated.section style={animatedProps} className={styles.about}>
      <AboutCard />
    </animated.section>
  );
};
