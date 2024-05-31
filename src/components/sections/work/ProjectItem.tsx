import style from "./../../../styles/modules/work/projectItem.module.scss";

interface IProjectItemProps {
  data?: {
    title: string;
    img: string;
    desc: {
      common: string;
      technical: string;
    };
    github: string;
    deploy: string;
  } | null;
}

const ProjectItem = (props: IProjectItemProps) => {
  const data = props.data;
  const isData: boolean = Boolean(data);

  //temporary hardcode
  return (
    <div className={style["project-item"]}>
      {!isData ? <span className={style.notice}>Comming soon</span> : ""}
    </div>
  );
};

export default ProjectItem;
