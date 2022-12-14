import React from "react";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";

import { BackButton } from "../ui/BackButton";

import styles from "./AppLayout.module.scss";

export const AppLayout: React.FC = () => {
  return (
    <Layout className={styles.layout}>
      <BackButton />
      <Layout.Content className={styles.content}>
        <Outlet />
      </Layout.Content>
    </Layout>
  );
};
