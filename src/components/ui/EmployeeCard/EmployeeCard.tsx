import React from "react";
import Tilt from "react-parallax-tilt";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { GithubFilled, LinkedinFilled } from "@ant-design/icons";

import { IEmployeeCardProps } from "models/IEmployeeCardProps";

import styles from "./EmployeeCard.module.scss";

export const EmployeeCard: React.FC<IEmployeeCardProps> = ({
  employee,
}) => {
  const cardClass = styles.card + " " + styles.rgb;

  return (
    <Tilt scale={1.06}>
      <div className={cardClass}>
        <div className={styles.cardImg}>
          <img src={employee.avatar} alt="avatar" />
        </div>
        <div className={styles.cardText}>
          <p className={styles.employeePosition}>{employee.position}</p>
          <h2 className={styles.employeeName}>{employee.name}</h2>
          <p className={styles.employeeBio}>{employee.bio}</p>
        </div>
        <div className={styles.cardLinks}>
          <div className={styles.linkContainer}>
            <a
              href={employee.links.github}
              target="_blank"
              rel="noreferrer"
              className={styles.link}
            >
              <GithubFilled />
            </a>
          </div>
          <div className={styles.linkContainer}>
            <a
              href={employee.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className={styles.link}
            >
              <LinkedinFilled />
            </a>
          </div>
          <div className={styles.linkContainer}>
            <a
              href={employee.links.telegram}
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
