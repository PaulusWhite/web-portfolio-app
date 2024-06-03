"use client";

import Image from "next/image";
import { MutableRefObject, useEffect } from "react";

import style from "./../../../styles/modules/work/projectCardItem.module.scss";

//components
import SourceLink from "./SourceLink";
import Button from "@/components/common/Button";
import TechList from "./TechList";

//interfaces
import { IProjectItemData } from "@/interfaces/IData";

interface IProjectCardPortalProps {
  data: IProjectItemData;
  itemCardRef: MutableRefObject<null>;
  closePortal: () => void;
}

const ProjectCardItem = (props: IProjectCardPortalProps) => {
  const { title, img, desc, deploy, github, id } = props.data;
  const { itemCardRef, closePortal } = props;

  const closeProjectCardItem = () => {
    const itemCardNode: HTMLElement = itemCardRef.current!;
    itemCardNode.classList.remove(style.show);

    setTimeout(() => {
      closePortal();
    }, 350);
  };

  useEffect(() => {
    const itemCardNode: HTMLElement = itemCardRef.current!;

    setTimeout(() => {
      itemCardNode.classList.add(style.show);
    }, 100);
  }, [id]);

  return (
    <div className={style.sheet} onClick={closeProjectCardItem}>
      <aside
        ref={itemCardRef}
        className={`${style["project-card-portal"]} openPortal`}
        onClick={(e) => e.stopPropagation()}
      >
        <Button extraClass={style["close-btn"]} clickAction={closeProjectCardItem}>
          Close
        </Button>

        <hr className={style.portition} />

        <h3>{title}</h3>

        <div className={style["img-frame"]}>
          <Image src={`/projects/${img}`} alt="project preview image" fill={true} sizes="100%" />
        </div>

        <h3>About</h3>
        <p>{desc.common}</p>

        <h3>Technologies</h3>

        <TechList techList={desc.technical} />

        <SourceLink link={deploy} type="Website" />
        <SourceLink link={github} type="Github" />

        <Button extraClass={style["deploy-link"]}>
          Open the project
          <Image src="/open.svg" width={25} height={25} alt="link icon" />
        </Button>
      </aside>
    </div>
  );
};

export default ProjectCardItem;
