"use client";

import { useEffect, useRef } from "react";

import data from "./../../../lib/data.json";

import style from "./../../../styles/modules/skills/skills.module.scss";

//components
import SkillItem from "./SkillItem";

//interfaces
import { ISkillItem } from "@/interfaces/IData";

//scripts
import setAscentEffect from "@/scripts/setAscentEffect";

const Skills = () => {
  const { techs, other }: { techs: ISkillItem[]; other: ISkillItem[] } = data.skills;
  const firstHeadingRef = useRef(null);
  const secondHeadingRef = useRef(null);
  const coreListRef = useRef(null);
  const otherListRef = useRef(null);

  useEffect(() => {
    const firstHeadingNode: HTMLElement = firstHeadingRef.current!;
    const secondHeadingNode: HTMLElement = secondHeadingRef.current!;
    const coreListNode: HTMLUListElement = coreListRef.current!;
    const otherListNode: HTMLUListElement = otherListRef.current!;

    setAscentEffect([
      firstHeadingNode,
      secondHeadingNode,
      ...[...Array.from(coreListNode.children), ...Array.from(otherListNode.children)],
    ]);
  }, []);

  return (
    <div className={style.skills}>
      <h3 ref={firstHeadingRef}>Core Technologies I work with</h3>

      <ul className={style.core} ref={coreListRef}>
        {techs.map((techItem: ISkillItem) => {
          return <SkillItem key={techItem.id} title={techItem.title} logo={techItem.logo} />;
        })}
      </ul>

      <h3 ref={secondHeadingRef}>Tools, methodologies, approaches and systems I use</h3>

      <ul className={style.other} ref={otherListRef}>
        {other.map((otherItem: ISkillItem) => {
          return <SkillItem key={otherItem.id} title={otherItem.title} logo={otherItem.logo} />;
        })}
      </ul>
    </div>
  );
};

export default Skills;
