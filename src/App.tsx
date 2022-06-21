import React from "react";
import styled from "styled-components";

import { Menu } from "./components/Menu";

const StyledApp = styled.div`
  height: 100vh;
`;

const App: React.FC = () => {
  return (
    <StyledApp>
      <Menu />
    </StyledApp>
  );
};

export default App;
