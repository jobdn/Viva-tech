import React from "react";
import { LeftCircleFilled } from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";

import styles from "./BackButton.module.scss";
import { Button } from "../Button";

export const BackButton: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  if (location.pathname === "/") {
    return <></>;
  }

  return (
    <Button
      icon={<LeftCircleFilled />}
      label="Go back"
      onClick={() => navigate(-1)}
      className={"btn " + styles.btnBack}
    />
  );
};
