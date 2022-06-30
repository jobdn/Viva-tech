import React from "react";
import { Col, Row } from "antd";

import styled from "styled-components";
import { EmployeesList } from "../../components/EmployeesList";

const StyledTeamPage = styled(Row)`
  padding-top: 40px;
  height: 100%;
`;

export const TeamPage: React.FC = () => {
  return (
    <StyledTeamPage justify="center" align="middle">
      <Col>
        <EmployeesList />
      </Col>
    </StyledTeamPage>
  );
};
