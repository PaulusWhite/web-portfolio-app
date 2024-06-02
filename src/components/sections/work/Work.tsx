"use client";

import { useEffect, useRef } from "react";

//data
import data from "./../../../lib/data.json";

import style from "./../../../styles/modules/work/work.module.scss";

//Icons
import modernIcon from "./../../../../public/modern.svg";
import mobileIcon from "./../../../../public/mobile.svg";
import devIcon from "./../../../../public/dev.svg";

//components
import SignItem from "./SignItem";
import ProjectItem from "./ProjectItem";
import ProjectCardPortal from "./ProjectCardPortal";

//interfaces
import { IProjectItemData } from "@/interfaces/IData";

//scripts
import setAscentEffect from "@/scripts/startAnimations/setAscentEffect";

const Work = () => {
  const { projects }: { projects: IProjectItemData[] } = data;
  const headingRef = useRef(null);
  const signListRef = useRef(null);

  useEffect(() => {
    const headingNode: HTMLHeadingElement = headingRef.current!;
    const signListNode: HTMLUListElement = signListRef.current!;

    setAscentEffect([headingNode, signListNode]);
  }, []);

  return (
    <div className={style.work}>
      <h3 className={style.heading} ref={headingRef}>
        Applications I've built
      </h3>

      <ul className={style["signs-list"]} ref={signListRef}>
        <SignItem label="Mobile-Friendly" icon={mobileIcon.src} />
        <SignItem label="Modern" icon={modernIcon.src} />
        <SignItem label="Built with love" icon={devIcon.src} />
      </ul>

      <ul className={style.projects}>
        {projects.map((projectItemData: IProjectItemData) => {
          return <ProjectItem key={projectItemData.id} data={projectItemData} />;
        })}

        <ProjectItem data={null} />
      </ul>
      <ProjectCardPortal {...projects[0]} />
    </div>
  );
};

export default Work;
