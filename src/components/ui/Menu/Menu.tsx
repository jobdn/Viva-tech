import React from "react";
import { Row, Col } from "antd";

import styles from "./Menu.module.scss";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledMenu = styled(Row)`
  height: 100%;
  @media screen and (min-width: 1024px) {
    justify-content: start;
    padding-left: 180px;
  }

  .ant-col {
    transform: translateX(10%);
  }
`;

export const Menu: React.FC = () => {
  return (
    <StyledMenu align="middle" justify="center" className="page">
      <Col>
        <ul className={styles.menu}>
          <li style={{ zIndex: 3 }}>
            <Link to="/about" className={styles.link}>
              About
            </Link>
          </li>
          <li style={{ zIndex: 2 }}>
            <Link to="/team" className={styles.link}>
              Our team
            </Link>
          </li>
          <li style={{ zIndex: 1 }}>
            <Link to="/projects" className={styles.link}>
              Projects
            </Link>
          </li>
        </ul>
      </Col>
    </StyledMenu>
  );
};
