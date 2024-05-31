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
      <h3>Core Technologies I work with</h3>

      <ul className={style.core}>
        {techs.map((techItem: ISkillItem) => (
          <SkillItem key={techItem.id} title={techItem.title} logo={techItem.logo} />
        ))}
      </ul>

      <h3>Tools, methodologies, approaches and systems I work with</h3>

      <ul className={style.other}>
        {other.map((otherItem: ISkillItem) => (
          <SkillItem key={otherItem.id} title={otherItem.title} logo={otherItem.logo} />
        ))}
      </ul>
    </div>
  );
};

export default Skills;
