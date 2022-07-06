import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { AppLayout } from "./components/AppLayout";

import { Menu } from "./components/Menu";
import { About } from "./pages/About";
import { TeamPage } from "./pages/Team";

const StyledApp = styled.div`
  height: 100vh;
`;

const App: React.FC = () => {
  return (
    <StyledApp>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Menu />}></Route>
          <Route path="team" element={<TeamPage />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </StyledApp>
  );
};

export default App;
