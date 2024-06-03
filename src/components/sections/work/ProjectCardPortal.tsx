"use client";

import Image from "next/image";

import style from "./../../../styles/modules/work/projectCardPortal.module.scss";

//components
import SourceLink from "./SourceLink";
import Button from "@/components/common/Button";
import TechList from "./TechList";

//interfaces
import { IProjectItemData } from "@/interfaces/IData";

interface IProjectCardPortalProps {
  data: IProjectItemData;
  closePortal: () => void;
}

const ProjectCardPortal = (props: IProjectCardPortalProps) => {
  const { title, img, desc, deploy, github } = props.data;
  const { closePortal } = props;

  return (
    <div className={style.sheet} onClick={closePortal}>
      <aside
        className={`${style["project-card-portal"]} openPortal`}
        onClick={(e) => e.stopPropagation()}
      >
        <Button extraClass={style["close-btn"]} clickAction={closePortal}>
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

export default ProjectCardPortal;