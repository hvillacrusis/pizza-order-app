import React from "react";

interface TextProps {
  total: number;
}

const TextTotal: React.FC<TextProps> = ({ total }) => (
  <span className="font-semibold">Total: ${total.toFixed(2)}</span>
);

export default TextTotal;
