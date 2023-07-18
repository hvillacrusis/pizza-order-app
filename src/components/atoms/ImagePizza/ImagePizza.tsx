import React from "react";

interface ImageProps {
  src: string;
  alt: string;
}

const ImagePizza: React.FC<ImageProps> = ({ src, alt }) => (
  <img
    className="w-full object-cover h-full rounded-t-lg"
    src={src}
    alt={alt}
  />
);

export default ImagePizza;
