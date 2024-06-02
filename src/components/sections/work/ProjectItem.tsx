"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

import style from "./../../../styles/modules/work/projectItem.module.scss";

import codingImg from "./../../../../public/coding.jpg";

//interfaces
import { IProjectItemData } from "@/interfaces/IData";

//scripts
import setFallEffect from "@/scripts/startAnimations/setFallEffect";

interface IProjectItemProps {
  data: IProjectItemData | null;
}

const ProjectItem = (props: IProjectItemProps) => {
  const isData: boolean = Boolean(props.data);

  const emptyItemRef = useRef(null);
  const itemRef = useRef(null);

  useEffect(() => {
    const itemNode: HTMLElement = isData ? itemRef.current! : emptyItemRef.current!;
    setFallEffect(itemNode);
  });

  if (!isData) {
    return (
      <div className={style["comming-project"]} ref={emptyItemRef}>
        <Image src={codingImg.src} fill={true} alt="coding" sizes="100%" />
        <div className={style.veil}></div>
        <p className={style.notice}>Comming soon</p>
      </div>
    );
  }

  const { title, desc, github, deploy, img } = props.data as IProjectItemData;

  return (
    <div className={style["project-item"]} ref={itemRef}>
      <Image src={`/projects/${img}`} fill={true} sizes="100%" alt="app-preview" />

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
