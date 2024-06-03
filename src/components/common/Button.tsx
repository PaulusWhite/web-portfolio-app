import style from "./../../styles/modules/common/button.module.scss";

import { ReactNode } from "react";

interface IButtonProps {
  extraClass?: string;
  children: ReactNode;
}

const Button = (props: IButtonProps) => {
  const { extraClass } = props;

  return (
    <button className={`${style.button} ${extraClass ? extraClass : ""}`}>{props.children}</button>
  );
};

export default Button;
