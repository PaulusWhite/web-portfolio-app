import Image from "next/image";

import style from "./../../../styles/modules/skills/skillItem.module.scss";

interface ISkillItemProps {
  logo: string;
  title: string;
}

const SkillItem = (props: ISkillItemProps) => (
  <li className={`${style.skillItem} ascentInit`}>
    <Image src={`/skills/${props.logo}`} alt="tech logo" width={70} height={70} />
    <span className={style.title}>{props.title}</span>
  </li>
);

export default SkillItem;
