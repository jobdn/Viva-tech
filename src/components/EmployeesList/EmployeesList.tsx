import React from "react";
import { EmployeeCard } from "../EmployeeCard";
import yemployees from "../../store/employees.json";
import styled from "styled-components";

const StyledEmployeesList = styled.div`
  display: flex;
  transition: 0.3s;
  flex-wrap: wrap;
  justify-content: center;
`;

export const EmployeesList: React.FC = () => {
  return (
    <StyledEmployeesList>
      {yemployees.map((yemployee) => (
        <EmployeeCard key={yemployee.id} yemployee={yemployee} />
      ))}
    </StyledEmployeesList>
  );
};
