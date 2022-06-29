import React from "react";
import styled from "styled-components";
import { EmployeesListItem } from "../EmployeesListItem";

const StyledEmployeesList = styled.div`
  width: 100%;
`;

interface IYemployee {
  avatar: string;
  url: string;
  name: string;
  company: string | null;
  blog: string;
  email: string | null;
}

const yemployee: IYemployee = {
  avatar: "https://avatars.githubusercontent.com/u/100018059?v=4",
  url: "https://github.com/jobdn",
  name: "Pisarev Danila",
  blog: "jobdan@bk.ru",
  company: null,
  email: null,
};

const employees = [];

export const EmployeesList = () => {
  return (
    <div>
      <EmployeesListItem />
    </div>
  );
};
