import React from "react";

interface ButtonProps {
  onClick: () => void;
}

const ButtonRemove: React.FC<ButtonProps> = ({ onClick }) => (
  <button onClick={onClick}>Remove</button>
);

export default ButtonRemove;
