import { ChangeEvent } from "react";
import Label from "../Label/Label";

interface OptionProps {
  label: string;
  type: "checkbox" | "radio";
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
  value?: string;
}

const Option: React.FC<OptionProps> = ({
  value,
  label,
  type,
  onChange,
  checked,
}) => (
  <div className="flex items-center my-2">
    <input
      value={value}
      type={type}
      className="mr-2"
      onChange={onChange}
      checked={checked}
    />
    <Label text={label} />
  </div>
);

export default Option;
