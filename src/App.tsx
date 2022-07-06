import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import styled from "styled-components";
import { BackButton } from "./components/BackButton";

import { Menu } from "./components/Menu";
import { About } from "./pages/About";
import { TeamPage } from "./pages/Team";

const StyledApp = styled.div`
  height: 100vh;
`;

const App: React.FC = () => {
  return (
    <StyledApp>
      <BackButton />
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </StyledApp>
  );
};

export default App;
