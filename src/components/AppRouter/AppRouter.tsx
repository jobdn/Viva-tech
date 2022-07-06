import React from "react";
import { Route, Routes } from "react-router-dom";
import { useTransition, animated } from "react-spring";

import { AppLayout } from "../AppLayout";
import { Menu } from "../Menu";
import { AboutPage } from "../../pages/AboutPage";
import { TeamPage } from "../../pages/TeamPage";

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Menu />}></Route>
        <Route path="team" element={<TeamPage />} />
        <Route path="about" element={<AboutPage />} />
      </Route>
    </Routes>
  );
};
