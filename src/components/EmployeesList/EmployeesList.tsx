import React from "react";
import { EmployeeCard } from "../EmployeeCard";

export interface IYemployee {
  avatar: string;
  position: string;
  name: string;
  bio: string;
  github: string;
  linkedin: string;
  telegram: string;
}

const yemployee: IYemployee = {
  avatar: "https://avatars.githubusercontent.com/u/100018059?v=4",
  position: "Front-end",
  github: "https://github.com/jobdn",
  name: "Pisarev Danila",
  bio: "1.5 years of work in Front-end",
  linkedin: "https://www.linkedin.com/in/block-dan",
  telegram: "",
};

export const EmployeesList: React.FC = () => {
  return (
    <div>
      <EmployeeCard yemployee={yemployee} />
    </div>
  );
};
