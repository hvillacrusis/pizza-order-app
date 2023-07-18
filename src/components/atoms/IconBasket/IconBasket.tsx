import React from "react";

interface IconProps {
  size?: number;
  color?: string;
}

const IconBasket: React.FC<IconProps> = ({
  size = 6,
  color = "currentColor",
}) => (
  <svg
    className={`fill-current h-${size} w-${size} mr-2`}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke={color}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H15m0 0a2 2 0 104 0 2 2 0 00-4 0zm-6 0a2 2 0 11-4 0 2 2 0 014 0z"
    />
  </svg>
);

export default IconBasket;
