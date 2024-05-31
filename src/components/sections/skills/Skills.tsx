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
        {techs.map(async (techItem: ISkillItem) => {
          const logo: typeof import("*.svg") = await import(
            `./../../../../public/skills/${techItem.logo}`
          );

          return <SkillItem key={techItem.id} title={techItem.title} logo={logo} />;
        })}
      </ul>

      <h3>Tools, methodologies, approaches and systems I work with</h3>

      <ul className={style.other}>
        {other.map(async (otherItem: ISkillItem) => {
          const logo: typeof import("*.svg") = await import(
            `./../../../../public/skills/${otherItem.logo}`
          );

          return <SkillItem key={otherItem.id} title={otherItem.title} logo={logo} />;
        })}
      </ul>
    </div>
  );
};

export default Skills;
