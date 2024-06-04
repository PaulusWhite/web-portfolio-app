"use client";

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
import CommingProjectCardItem from "./CommingProjectCardItem";

//interfaces
import { IProjectItemData } from "@/interfaces/IData";

const Work = () => {
  const { projects }: { projects: IProjectItemData[] } = data;

  return (
    <div className={style.work}>
      <h3 className={`${style.heading} ascentInit`}>Applications I've built</h3>

      <ul className={`${style["signs-list"]} ascentInit`}>
        <SignItem label="Mobile-Friendly" icon={mobileIcon.src} />
        <SignItem label="Modern" icon={modernIcon.src} />
        <SignItem label="Built with love" icon={devIcon.src} />
      </ul>

      <ul className={style.projects}>
        {projects.map((projectItemData: IProjectItemData) => {
          return <ProjectItem key={projectItemData.id} data={projectItemData} />;
        })}

        <CommingProjectCardItem />
      </ul>
    </div>
  );
};

export default Work;
