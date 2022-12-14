import React from "react";

import { IButtonProps } from "models/IButtonProps";

export const Button: React.FC<IButtonProps> = ({
  icon,
  label,
  onClick,
  ...props
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button className="btn" onClick={handleClick} {...props}>
      <span className="btnIcon">{icon}</span>
      <span className="label">{label}</span>
    </button>
  );
};
