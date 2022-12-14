import React from "react";
import styled from "styled-components";

import { EmployeeCard } from "../EmployeeCard";

import employees from "store/employees.json";

const StyledEmployeesList = styled.div`
  display: flex;
  gap: 60px;
  transition: 0.3s;
  flex-wrap: wrap;
  justify-content: center;
`;

export const EmployeesList: React.FC = () => {
  return (
    <StyledEmployeesList>
      {employees.map((employee) => (
        <EmployeeCard key={employee.id} employee={employee} />
      ))}
    </StyledEmployeesList>
  );
};
