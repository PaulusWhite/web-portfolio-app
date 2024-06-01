import style from "./../../../styles/modules/experience/radioBtn.module.scss";

//interfaces
import { IDataRadioValue } from "@/interfaces/IData";

interface IRadioBtnProps {
  label: string;
  value: IDataRadioValue;
  isChecked?: boolean;
  setInput: (newValue: IDataRadioValue) => void;
}

const RadioBtn = (props: IRadioBtnProps) => (
  <label className={style["radio-btn"]}>
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

export default RadioBtn;
