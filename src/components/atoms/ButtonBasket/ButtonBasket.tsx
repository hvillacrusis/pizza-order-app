import React from "react";
import IconBasket from "../IconBasket/IconBasket";

interface ButtonProps {
  count: number;
  onClick: () => void;
}

const ButtonBasket: React.FC<ButtonProps> = ({ count, onClick }) => (
  <button className="text-lg font-semibold flex items-center" onClick={onClick}>
    <IconBasket />
    <span>Basket ({count})</span>
  </button>
);

export default ButtonBasket;
