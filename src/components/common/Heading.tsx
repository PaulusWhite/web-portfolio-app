import { useEffect, useRef } from "react";

import style from "./../../styles/modules/common/heading.module.scss";

//scripts
import setHeadingAppearanceEffect from "@/scripts/startAnimations/setHeadingAppearanceEffect";

interface IHeadingProps {
  index: number;
  label: string;
}

const Heading = (props: IHeadingProps) => {
  const headingRef = useRef(null);

  useEffect(() => {
    const headingNode: HTMLElement = headingRef.current!;
    setHeadingAppearanceEffect(headingNode);
  }, []);

  return (
    <h2 className={style.heading} ref={headingRef}>
      <span className={style.index}>0{props.index}.</span>
      <span className={style.label}>{props.label}</span>
    </h2>
  );
};

export default Heading;
export type { IHeadingProps };
