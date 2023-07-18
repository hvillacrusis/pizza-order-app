interface HeadingProps {
  text: string;
  size: "2xl" | "lg";
}

const ModalHeading: React.FC<HeadingProps> = ({ text, size }) => {
  const sizeClass = size === "2xl" ? "text-2xl mb-1" : "text-lg mt-4 mb-2";
  return <h2 className={`font-medium ${sizeClass}`}>{text}</h2>;
};

export default ModalHeading;
