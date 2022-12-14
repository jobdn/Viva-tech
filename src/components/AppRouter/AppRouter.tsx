import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { useTransition, animated } from "react-spring";

import { AppLayout } from "../AppLayout";
import { Menu } from "../ui/Menu";
import { AboutPage } from "../../pages/AboutPage";
import { TeamPage } from "../../pages/TeamPage";
import { ProjectsPage } from "../../pages/ProjectsPage";

export const AppRouter: React.FC = () => {
  const location = useLocation();
  const transitions = useTransition(location, {
    from: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
    },
    leave: {
      opacity: 0,
    },

    config: { duration: 500 },
    reset: true,
  });

  return transitions((props, item) => {
    return (
      <animated.div style={props}>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Menu />} />
            <Route path="team" element={<TeamPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="projects" element={<ProjectsPage />} />
          </Route>
        </Routes>
      </animated.div>
    );
  });
};
