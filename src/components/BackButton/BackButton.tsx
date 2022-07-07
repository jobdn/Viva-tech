import React from "react";
import { LeftCircleFilled } from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";

import styles from "./BackButton.module.scss";

export const BackButton: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  if (location.pathname === "/") {
    return <></>;
  }

  return (
    <button className={"btn " + styles.btnBack} onClick={() => navigate(-1)}>
      <LeftCircleFilled className="icon" />
      <span className="label">Go back</span>
    </button>
  );
};
