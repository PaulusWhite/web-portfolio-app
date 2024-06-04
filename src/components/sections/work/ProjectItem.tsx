"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import style from "./../../../styles/modules/work/projectItem.module.scss";

//components
import TechList from "./TechList";
import ProjectCardItem from "./ProjectCardItem";

//interfaces
import { IProjectItemData } from "@/interfaces/IData";

//scripts
import setFallEffect from "@/scripts/startAnimations/setFallEffect";

interface IProjectItemProps {
  data: IProjectItemData;
}

const ProjectItem = (props: IProjectItemProps) => {
  const { title, desc, img } = props.data;

  const [showProjectCard, setShowProjectCard] = useState(false);

  const itemRef = useRef(null);
  const itemCardRef = useRef(null);

  useEffect(() => {
    const itemNode: HTMLElement = itemRef.current!;
    setFallEffect(itemNode);
  }, []);

  return (
    <>
      <div
        className={`${style["project-item"]} fallInit`}
        ref={itemRef}
        onClick={() => setShowProjectCard(true)}
      >
        <Image src={`/projects/${img}`} fill={true} sizes="100%" alt="app-preview" />

        <div className={style["pop-up"]}>
          <span className={style.title}>{title}</span>
          <span className={style.desc}>{desc.brief}</span>

          <TechList techList={desc.technical} />
        </div>
      </div>
      {showProjectCard &&
        createPortal(
          <ProjectCardItem
            itemCardRef={itemCardRef}
            data={props.data as IProjectItemData}
            closePortal={() => setShowProjectCard(false)}
          />,
          document.body,
        )}
    </>
  );
};

export default ProjectItem;
