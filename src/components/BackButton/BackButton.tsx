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
    // <button className={"btn " + styles.btnBack} onClick={() => navigate(-1)}>
    //   <LeftCircleFilled className="icon" />
    //   <span className="label">Go back</span>
    // </button>
    <Button
      icon={<LeftCircleFilled />}
      label="Go back"
      onClick={() => navigate(-1)}
      className={"btn " + styles.btnBack}
    />
  );
};
