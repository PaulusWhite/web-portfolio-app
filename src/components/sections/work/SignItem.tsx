import Image from "next/image";

import style from "./../../../styles/modules/work/signItem.module.scss";

interface ISignItemProps {
  label: string;
  icon: string;
}

const SignItem = (props: ISignItemProps) => (
  <li className={style.signItem}>
    <Image src="" width={40} height={40} alt="sign image" />
    <span className={style.label}>{props.label}</span>
  </li>
);

export default SignItem;
