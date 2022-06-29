import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { GithubFilled, LinkedinFilled } from "@ant-design/icons";
import Tilt from "react-parallax-tilt";
import { useSpring, animated } from "react-spring";

import styles from "./EmployeeCard.module.scss";
import { IYemployee } from "../EmployeesList/EmployeesList";
import styled from "styled-components";

const StyledEmployeeCard = styled(animated.div)``;

export const EmployeeCard: React.FC<{ yemployee: IYemployee }> = ({
  yemployee,
}) => {
  const props = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  });
  return (
    <Tilt scale={1.06}>
      <StyledEmployeeCard style={props} className={styles.card}>
        <div className={styles["card-img"]}>
          <img src={yemployee.avatar} alt="" />
        </div>
        <div className={styles["card-text"]}>
          <p className={styles["yemployee-position"]}>{yemployee.position}</p>
          <h2 className={styles["yemployee-name"]}>{yemployee.name}</h2>
          <p className={styles["yemployee-bio"]}>{yemployee.bio}</p>
        </div>
        <div className={styles["card-links"]}>
          <div className={styles["link-container"]}>
            <a href={yemployee.github} target="_blank" className={styles.link}>
              <GithubFilled />
            </a>
          </div>
          <div className={styles["link-container"]}>
            <a href={yemployee.linkedin} target="_blank" className={styles.link}>
              <LinkedinFilled />
            </a>
          </div>
          <div className={styles["link-container"]}>
            <a href={yemployee.telegram} target="_blank" className={styles.link}>
              <FontAwesomeIcon icon={faPaperPlane} />
            </a>
          </div>
        </div>
      </StyledEmployeeCard>
    </Tilt>
  );
};
