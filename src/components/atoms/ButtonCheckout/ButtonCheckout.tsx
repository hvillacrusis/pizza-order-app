import React from "react";

interface ButtonProps {
  onClick: () => void;
}

const ButtonCheckout: React.FC<ButtonProps> = ({ onClick }) => (
  <button
    className="mt-2 w-full bg-green text-gray-default rounded p-2"
    onClick={onClick}
  >
    Checkout
  </button>
);

export default ButtonCheckout;
