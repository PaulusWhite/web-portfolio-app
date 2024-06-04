"use client";

import data from "./../../../lib/data.json";

import style from "./../../../styles/modules/skills/skills.module.scss";

//components
import SkillItem from "./SkillItem";

//interfaces
import { ISkillItem } from "@/interfaces/IData";

const Skills = () => {
  const { techs, other }: { techs: ISkillItem[]; other: ISkillItem[] } = data.skills;

  return (
    <div className={style.skills}>
      <h3 className="ascentInit">Core Technologies I work with</h3>

      <ul className={style.core}>
        {techs.map((techItem: ISkillItem) => {
          return <SkillItem key={techItem.id} title={techItem.title} logo={techItem.logo} />;
        })}
      </ul>

      <h3 className="ascentInit">Tools, methodologies, approaches and systems I use</h3>

      <ul className={style.other}>
        {other.map((otherItem: ISkillItem) => {
          return <SkillItem key={otherItem.id} title={otherItem.title} logo={otherItem.logo} />;
        })}
      </ul>
    </div>
  );
};

export default Skills;
