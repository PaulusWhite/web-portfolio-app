import style from "./../../../styles/modules/experience/radioBtn.module.scss";

//interfaces
import { IDataRadioValue } from "@/interfaces/IData";

interface IRadioBtnProps {
  label: string;
  value: IDataRadioValue;
  isChecked?: boolean;
  setInput: (newValue: IDataRadioValue) => void;
}

const RadioBtn = (props: IRadioBtnProps) => {
  const { label, value, isChecked, setInput } = props;

  return (
    <label className={style["radio-btn"]}>
      <input
        type="radio"
        name="radioList"
        value={value}
        checked={Boolean(isChecked)}
        onChange={(e) => setInput(e.target.value as IDataRadioValue)}
      />
      {label}
    </label>
  );
};

export default RadioBtn;
