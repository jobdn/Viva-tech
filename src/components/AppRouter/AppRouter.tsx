import React from "react";
import { Route, Routes } from "react-router-dom";

import { AppLayout } from "../AppLayout";
import { Menu } from "../Menu";
import { About } from "../../pages/About";
import { TeamPage } from "../../pages/Team";

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Menu />}></Route>
        <Route path="team" element={<TeamPage />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
};
