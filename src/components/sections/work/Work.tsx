//data
import data from "./../../../data/data.json";

import style from "./../../../styles/modules/work/work.module.scss";

//components
import SignItem from "./SignItem";
import ProjectItem from "./ProjectItem";
import CommingProjectItem from "./CommingProjectItem";

//interfaces
import { IProjectItemData } from "@/interfaces/IData";

const Work = () => {
  const projects: IProjectItemData[] = data.projects;

  return (
    <div className={style.work}>
      <h3 className={`${style.heading} ascentInit`}>Applications I've built</h3>

      <ul className={`${style["signs-list"]} ascentInit`}>
        <SignItem label="Mobile-Friendly" icon="/mobile.svg" />
        <SignItem label="Modern" icon="/modern.svg" />
        <SignItem label="Built with love" icon="/dev.svg" />
      </ul>

      <ul className={style.projects}>
        {projects.map((projectItemData: IProjectItemData) => {
          return <ProjectItem key={projectItemData.id} data={projectItemData} />;
        })}

        <CommingProjectItem />
      </ul>
    </div>
  );
};

export default Work;
