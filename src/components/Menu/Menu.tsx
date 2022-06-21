import React from "react";
import { Row, Col } from "antd";

import styles from "./Menu.module.scss";

export const Menu: React.FC = () => {
  return (
    <Row justify="center" style={{ height: "100%" }} align="middle">
      <Col>
        <ul className={styles.menu}>
          <li style={{ zIndex: 4 }}>
            <span className={styles.link}>Home</span>
          </li>
          <li style={{ zIndex: 3 }}>
            <span className={styles.link}>Projects</span>
          </li>
          <li style={{ zIndex: 2 }}>
            <span className={styles.link}>Our team</span>
          </li>
          <li style={{ zIndex: 1 }}>
            <span className={styles.link}>About</span>
          </li>
        </ul>
      </Col>
    </Row>
  );
};
