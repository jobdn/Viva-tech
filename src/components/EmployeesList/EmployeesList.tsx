import React from "react";
import { EmployeeCard } from "../EmployeeCard";
import yemployees from "../../store/employees.json";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

const StyledEmployeesList = styled(animated.div)`
  display: flex;
  gap: 60px;
  transition: 0.3s;
  flex-wrap: wrap;
  justify-content: center;
`;

export const EmployeesList: React.FC = () => {
  const animatedProps = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  });

  return (
    <StyledEmployeesList style={animatedProps}>
      {yemployees.map((yemployee) => (
        <EmployeeCard key={yemployee.id} yemployee={yemployee} />
      ))}
    </StyledEmployeesList>
  );
};
