import Image from "next/image";

import style from "./../../../styles/modules/work/projectItem.module.scss";

import codingImg from "./../../../../public/coding.jpg";

//interfaces
import { IProjectItemData } from "@/interfaces/IData";

interface IProjectItemProps {
  data: IProjectItemData | null;
  img?: typeof import("*.jpg");
}

const ProjectItem = (props: IProjectItemProps) => {
  const isData: boolean = Boolean(props.data);

  if (!isData) {
    return (
      <div className={style["comming-project"]}>
        <Image src={codingImg.src} fill={true} alt="coding" sizes="100%" />
        <div className={style.veil}></div>
        <p className={style.notice}>Comming soon</p>
      </div>
    );
  }

  const { title, desc, github, deploy } = props.data as IProjectItemData;
  const img = props.img as typeof import("*.jpg");

  return (
    <div className={style["project-item"]}>
      <Image src={img} fill={true} sizes="100%" alt="app-preview" />

      <div className={style["pop-up"]}>
        <span className={style.title}>{title}</span>
        <span className={style.desc}>{desc.brief}</span>

        <ul className={style["tech-list"]}>
          {desc.technical.map((tech: string, index: number) => {
            return (
              <li key={index + tech} className={style.tech}>
                {tech}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ProjectItem;
