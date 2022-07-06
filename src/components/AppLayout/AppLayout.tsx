import React from "react";
import { Layout } from "antd";

import { BackButton } from "../BackButton";
import { Outlet } from "react-router-dom";

export const AppLayout: React.FC = () => {
  return (
    <Layout>
      <BackButton />
      <Layout.Content>
        <Outlet />
      </Layout.Content>
    </Layout>
  );
};
