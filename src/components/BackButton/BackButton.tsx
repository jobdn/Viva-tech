import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const BackButton: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  if (location.pathname === "/") {
    return <></>;
  }

  return <button onClick={() => navigate(-1)}>BackButton</button>;
};
