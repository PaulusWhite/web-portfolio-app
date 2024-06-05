import Image from "next/image";

import style from "./../../../styles/modules/work/signItem.module.scss";

interface ISignItemProps {
  label: string;
  icon: string;
}

const SignItem = (props: ISignItemProps) => (
  <li className={style.signItem}>
    <div className={style["img-frame"]}>
      <Image src={props.icon} fill={true} alt="sign image" />
    </div>
    <span className={style.label}>{props.label}</span>
  </li>
);

export default SignItem;
