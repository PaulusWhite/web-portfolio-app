import Image from "next/image";

import style from "./../../../styles/modules/skills/skillItem.module.scss";

import { ISkillItem } from "@/interfaces/IData";

type TSkillItemProps = Omit<ISkillItem, "id">;

const SkillItem = (props: TSkillItemProps) => (
  <li className={style.skillItem}>
    <Image src="" alt="tech logo" width={90} height={90} />
    <span className={style.title}>{props.title}</span>
  </li>
);

export default SkillItem;
