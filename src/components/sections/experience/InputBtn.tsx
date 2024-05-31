//interfaces
import { IDataRadioValue } from "@/interfaces/IData";

interface IInputBtnProps {
  label: string;
  value: IDataRadioValue;
  isChecked?: boolean;
  setInput: (newValue: IDataRadioValue) => void;
}

const InputBtn = (props: IInputBtnProps) => (
  <label>
    <input
      type="radio"
      name="radioList"
      value={props.value}
      checked={Boolean(props.isChecked)}
      onChange={(e) => props.setInput(e.target.value as IDataRadioValue)}
    />
    {props.label}
  </label>
);

export default InputBtn;
