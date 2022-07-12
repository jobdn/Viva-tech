import React from "react";
import { Layout } from "antd";

import { BackButton } from "../ui/BackButton";
import { Outlet } from "react-router-dom";

import styles from "./AppLayout.module.scss";

export const AppLayout: React.FC = () => {
  return (
    <Layout className={styles.layout}>
      <BackButton />
      <Layout.Content className={styles.contant}>
        <Outlet />
      </Layout.Content>
    </Layout>
  );
};
