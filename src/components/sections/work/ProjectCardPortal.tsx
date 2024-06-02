import Image from "next/image";

import style from "./../../../styles/modules/work/projectCard.module.scss";

//components
import SourceLink from "./SourceLink";

//interfaces
import { IProjectItemData } from "@/interfaces/IData";

const ProjectCardPortal = (props: IProjectItemData) => {
  const { title, img, desc, deploy, github } = props;

  return (
    <aside className={style["project-card-portal"]}>
      <button className={style["close-btn"]}>Close</button>

      <h3>{title}</h3>

      <div className={style["img-frame"]}>
        <Image src={`/projects/${img}`} alt="project preview image" fill={true} sizes="100%" />
      </div>

      <h3>About</h3>
      <p>{desc.common}</p>

      <h3>Technologies</h3>

      <ul className={style["tech-list"]}>
        {desc.technical.map((tech: string, index: number) => (
          <span key={index + tech} className={style["tech"]}>
            {tech}
          </span>
        ))}
      </ul>

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
