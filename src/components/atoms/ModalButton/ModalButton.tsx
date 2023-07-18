interface ButtonProps {
  text: string;
  color: "red" | "green";
  onClick: () => void;
}

const ModalButton: React.FC<ButtonProps> = ({ text, color, onClick }) => {
  const baseClass = "px-4 py-2 rounded text-white hover:opacity-80 font-medium";
  const colorClass =
    color === "red"
      ? "bg-red hover:bg-red-dark"
      : "bg-green hover:bg-green-dark";
  return (
    <button onClick={onClick} className={`${baseClass} ${colorClass}`}>
      {text}
    </button>
  );
};

export default ModalButton;
