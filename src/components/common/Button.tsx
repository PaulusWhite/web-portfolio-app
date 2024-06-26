import { ReactNode } from "react";

import style from "./../../styles/modules/common/button.module.scss";

interface IButtonProps {
  extraClass?: string;
  children: ReactNode;
  clickAction?: () => void;
}

const Button = (props: IButtonProps) => {
  const { extraClass, clickAction } = props;

  return (
    <button
      className={`${style.button} ${extraClass ? extraClass : ""}`}
      onClick={() => clickAction && clickAction()}
    >
      {props.children}
    </button>
  );
};

export default Button;
