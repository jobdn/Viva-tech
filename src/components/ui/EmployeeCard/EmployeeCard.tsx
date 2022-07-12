import React from "react";
import Tilt from "react-parallax-tilt";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { GithubFilled, LinkedinFilled } from "@ant-design/icons";

import { IYemployee } from "../../../models/IYemployee";

import styles from "./EmployeeCard.module.scss";

export const EmployeeCard: React.FC<{ yemployee: IYemployee }> = ({
  yemployee,
}) => {
  const cardClass = styles.card + " " + styles.rgb;

  return (
    <Tilt scale={1.06}>
      <div className={cardClass}>
        <div className={styles.cardImg}>
          <img src={yemployee.avatar} alt="avatar" />
        </div>
        <div className={styles.cardText}>
          <p className={styles.yemployeePosition}>{yemployee.position}</p>
          <h2 className={styles.yemployeeName}>{yemployee.name}</h2>
          <p className={styles.yemployeeBio}>{yemployee.bio}</p>
        </div>
        <div className={styles.cardLinks}>
          <div className={styles.linkContainer}>
            <a
              href={yemployee.links.github}
              target="_blank"
              rel="noreferrer"
              className={styles.link}
            >
              <GithubFilled />
            </a>
          </div>
          <div className={styles.linkContainer}>
            <a
              href={yemployee.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className={styles.link}
            >
              <LinkedinFilled />
            </a>
          </div>
          <div className={styles.linkContainer}>
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
      </div>
    </Tilt>
  );
};
