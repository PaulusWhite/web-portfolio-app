//interfaces
import { TType } from "@/context/FormContextProvider";

interface IInputFieldProps {
  type: "name" | "email" | "message";
  placeholder: string;
  value: string;
  changeValue: (type: TType, value: string) => void;
}

const InputField = (props: IInputFieldProps) => {
  const { type, placeholder, value, changeValue } = props;

  return type === "message" ? (
    <textarea
      rows={10}
      placeholder={placeholder}
      value={value}
      onChange={(e) => changeValue(type, e.target.value)}
    />
  ) : (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => changeValue(type, e.target.value)}
    />
  );
};

export default InputField;
