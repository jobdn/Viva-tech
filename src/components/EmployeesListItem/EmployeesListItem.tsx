import React from "react";
import { GithubFilled } from "@ant-design/icons";
import { useSpring, animated } from "react-spring";

import styled from "styled-components";
import styles from "./EmployeesListItem.module.scss";

const StyledEmployeesListItem = styled(animated.div)``;

interface IYemployee {
  avatar: string;
  url: string;
  name: string;
  company: string | null;
  blog: string;
  email: string | null;
}

const yemployee: IYemployee = {
  avatar: "https://avatars.githubusercontent.com/u/100018059?v=4",
  url: "https://github.com/jobdn",
  name: "Pisarev Danila",
  blog: "jobdan@bk.ru",
  company: null,
  email: null,
};

export const EmployeesListItem: React.FC = () => {
  const props = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 200,
  });

  return (
    <StyledEmployeesListItem style={props} className={styles.imployee}>
      <div className={styles["imployee-avatar"]}>
        <img src={yemployee.avatar} alt="avatar" />
      </div>
      <div className={styles["imployee-info"]}>
        <div className="yemployee__name">
          Name:
          <span>Danila Pisarev</span>
        </div>
        <div className="yemployee__stack">
          Direction: <span>Front-end</span>
        </div>

        <div className="yemployee__contacts">
          Links:
          <span>
            <a href={yemployee.url}>
              <GithubFilled />
            </a>
          </span>
        </div>
      </div>
    </StyledEmployeesListItem>
  );
};
