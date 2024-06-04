"use client";

import { useEffect, useRef } from "react";

import style from "./../../styles/modules/common/section.module.scss";
import { IHeadingProps } from "./Heading";
import Heading from "./Heading";

//scripts
import setBgLabelSlipEffect from "@/scripts/startAnimations/setBgLabelSlipEffect";

interface ISectionProps extends IHeadingProps {
  content: React.ReactNode;
  id: string;
}

const Section = (props: ISectionProps) => {
  const bgLabelRef = useRef(null);

  useEffect(() => {
    const bgLabelNode: HTMLElement = bgLabelRef.current!;
    setBgLabelSlipEffect(bgLabelNode);
  }, []);

  return (
    <section className={style.section} id={props.id}>
      <Heading index={props.index} label={props.label} />
      <span className={`${style["background-label"]} hide-bg-label`} ref={bgLabelRef}>
        {props.label}
      </span>
      <>{props.content}</>
    </section>
  );
};

export default Section;
