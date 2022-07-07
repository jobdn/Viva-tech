import React from "react";
import { Col, Row } from "antd";

import styled from "styled-components";
import { EmployeesList } from "../../components/EmployeesList";

const StyledTeamPage = styled(Row)`
  padding-top: 120px;
`;

export const TeamPage: React.FC = () => {
  return (
    <StyledTeamPage justify="center" align="middle" className="page">
      <Col>
        <EmployeesList />
      </Col>
    </StyledTeamPage>
  );
};
