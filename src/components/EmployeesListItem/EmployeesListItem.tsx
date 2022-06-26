import { Skeleton } from "antd";
import React from "react";
import styled from "styled-components";
import styles from "./EmployeesListItem.module.scss";

const StyledEmployeesListItem = styled.div`
  border-radius: 10px;
  height: 200px;
  width: 600px;
  background-color: #3e4046;
  box-shadow: 5px 5px 20px rgba(68, 5, 102, 0.302);
`;

export const EmployeesListItem = () => {
  return (
    <StyledEmployeesListItem className={styles.imployee}>
      <div className={styles["imployee-avatar"]}>
        <img src="" alt="" />
      </div>
      <div className={styles["imployee-info"]}>
        <div className="yemployee__name">
          Name:
          <span>Danila Pisarev</span>
        </div>
        <div className="yemployee__stack">
          Stack: <span>JS, HTML, CSS</span>
        </div>
        <div className="yemployee__contacts">
          linkedin icon: <a href="">Linkedin</a>
        </div>
        <div className="yemployee__contacts">
          Github icon: <a href="">Github</a>
        </div>
      </div>
    </StyledEmployeesListItem>
  );
};
