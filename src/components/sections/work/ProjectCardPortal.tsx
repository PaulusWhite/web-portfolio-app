import Image from "next/image";

import style from "./../../../styles/modules/work/projectCard.module.scss";

//components
import SourceLink from "./SourceLink";
import Button from "@/components/common/Button";
import TechList from "./TechList";

//interfaces
import { IProjectItemData } from "@/interfaces/IData";

const ProjectCardPortal = (props: IProjectItemData) => {
  const { title, img, desc, deploy, github } = props;

  return (
    <aside className={style["project-card-portal"]}>
      <Button label="Close" extraClass={style["close-btn"]} />

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

      <a href={deploy} className={style["deploy-link"]}>
        Open the project
        <Image src="/open.svg" width={30} height={30} alt="link icon" />
      </a>
    </aside>
  );
};

export default ProjectCardPortal;
