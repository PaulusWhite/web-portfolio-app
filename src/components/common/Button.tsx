import style from "./../../styles/modules/common/button.module.scss";

interface IButtonProps {
  label: string;
  extraClass?: string;
}

const Button = (props: IButtonProps) => {
  const { label, extraClass } = props;

  return (
    <button className={`${style.button} ${extraClass ? extraClass : ""}`}>{props.label}</button>
  );
};

export default Button;
