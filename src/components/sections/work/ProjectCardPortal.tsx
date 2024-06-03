import Image from "next/image";

import style from "./../../../styles/modules/work/projectCardPortal.module.scss";

//components
import SourceLink from "./SourceLink";
import Button from "@/components/common/Button";
import TechList from "./TechList";

//interfaces
import { IProjectItemData } from "@/interfaces/IData";

const ProjectCardPortal = (props: IProjectItemData) => {
  const { title, img, desc, deploy, github } = props;

  return (
    <div className={style.sheet}>
      <aside className={style["project-card-portal"]}>
        <Button extraClass={style["close-btn"]}>Close</Button>

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
