import React from "react";

interface TextProps {
  price: number;
}

const TextPizzaPrice: React.FC<TextProps> = ({ price }) => (
  <p className="text-gray-dark">$ {price}</p>
);

export default TextPizzaPrice;
