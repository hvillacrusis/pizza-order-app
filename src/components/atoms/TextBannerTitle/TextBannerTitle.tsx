import React from "react";

interface TextProps {
  title: string;
}

const TextBannerTitle: React.FC<TextProps> = ({ title }) => (
  <h2 className="text-2xl font-bold text-white">{title}</h2>
);

export default TextBannerTitle;
