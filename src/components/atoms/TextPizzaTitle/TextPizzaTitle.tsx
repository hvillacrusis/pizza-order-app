import React from "react";

interface TextProps {
  title: string;
}

const TextPizzaTitle: React.FC<TextProps> = ({ title }) => (
  <h3 className="font-semibold text-lg mb-2 text-gray-dark">{title}</h3>
);

export default TextPizzaTitle;
