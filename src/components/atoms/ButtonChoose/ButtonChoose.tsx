import React from "react";

interface ButtonProps {
  onClick: () => void;
}

const ButtonChoose: React.FC<ButtonProps> = ({ onClick }) => (
  <button
    className="choose bg-green text-white rounded-lg mt-4 p-2 w-full text-lg font-medium"
    onClick={onClick}
  >
    Choose
  </button>
);

export default ButtonChoose;
