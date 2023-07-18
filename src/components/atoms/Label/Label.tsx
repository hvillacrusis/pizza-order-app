interface LabelProps {
  text: string;
}

const Label: React.FC<LabelProps> = ({ text }) => (
  <p className="font-medium text-gray-dark">{text}</p>
);

export default Label;
