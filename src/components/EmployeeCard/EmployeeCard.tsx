import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { GithubFilled, LinkedinFilled } from "@ant-design/icons";
import Tilt from "react-parallax-tilt";

import styles from "./EmployeeCard.module.scss";
import { IYemployee } from "../../models/Yemployee";
import styled from "styled-components";

const StyledEmployeeCard = styled.div``;

export const EmployeeCard: React.FC<{ yemployee: IYemployee }> = ({
  yemployee,
}) => {
  const cardClass = styles.card + " " + styles.rgb;

  return (
    <Tilt scale={1.06}>
      <StyledEmployeeCard className={cardClass}>
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
            <a
              href={yemployee.links.github}
              target="_blank"
              rel="noreferrer"
              className={styles.link}
            >
              <GithubFilled />
            </a>
          </div>
          <div className={styles["link-container"]}>
            <a
              href={yemployee.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className={styles.link}
            >
              <LinkedinFilled />
            </a>
          </div>
          <div className={styles["link-container"]}>
            <a
              href={yemployee.links.telegram}
              target="_blank"
              rel="noreferrer"
              className={styles.link}
            >
              <FontAwesomeIcon icon={faPaperPlane} />
            </a>
          </div>
        </div>
      </StyledEmployeeCard>
    </Tilt>
  );
};
