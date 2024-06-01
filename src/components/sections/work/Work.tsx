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

//interfaces
import { IProjectItemData } from "@/interfaces/IData";

const Work = () => {
  const { projects }: { projects: IProjectItemData[] } = data;

  return (
    <div className={style.work}>
      <h3 className={style.heading}>Applications I've built</h3>

      <ul className={style["signs-list"]}>
        <SignItem label="Mobile-Friendly" icon={mobileIcon.src} />
        <SignItem label="Modern" icon={modernIcon.src} />
        <SignItem label="Built with love" icon={devIcon.src} />
      </ul>

      <ul className={style.projects}>
        {projects.map(async (projectItemData: IProjectItemData) => {
          const img: typeof import("*.jpg") = await import(
            `./../../../../public/projects/${projectItemData.img}`
          );

          return <ProjectItem key={projectItemData.id} data={projectItemData} img={img} />;
        })}

        <ProjectItem data={null} />
      </ul>
    </div>
  );
};

export default Work;
