import style from "./../../../styles/modules/work/work.module.scss";

//components
import SignItem from "./SignItem";
import ProjectItem from "./ProjectItem";

const Work = () => (
  <div className={style.work}>
    <ul className={style["signs-list"]}>
      <SignItem label="Mobile-Friendly" icon="..." />
      <SignItem label="Modern" icon="..." />
      <SignItem label="Built with love" icon="..." />
    </ul>

    <h3 className={style.heading}>Applications I've built</h3>
    <ul className={style.projects}>
      <ProjectItem data={null} />
    </ul>
  </div>
);

export default Work;
