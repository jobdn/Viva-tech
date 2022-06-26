import React from "react";
import styled from "styled-components";
import { EmployeesListItem } from "../EmployeesListItem";

const StyledEmployeesList = styled.div`
  width: 100%;
`;

export const EmployeesList = () => {
  return (
    <div>
      <EmployeesListItem />
    </div>
  );
};
