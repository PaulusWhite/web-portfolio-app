import Image from "next/image";

import style from "./../../../styles/modules/work/signItem.module.scss";

interface ISignItemProps {
  label: string;
  icon: string;
}

const SignItem = (props: ISignItemProps) => (
  <li className={style.signItem}>
    <Image src={props.icon} width={100} height={100} alt="sign image" />
    <span className={style.label}>{props.label}</span>
  </li>
);

export default SignItem;
