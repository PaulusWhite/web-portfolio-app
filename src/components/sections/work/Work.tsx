import style from "./../../../styles/modules/work/work.module.scss";

//Icons
import modernIcon from "./../../../../public/modern.svg";
import mobileIcon from "./../../../../public/mobile.svg";
import devIcon from "./../../../../public/dev.svg";

//components
import SignItem from "./SignItem";
import ProjectItem from "./ProjectItem";

const Work = () => (
  <div className={style.work}>
    <ul className={style["signs-list"]}>
      <SignItem label="Mobile-Friendly" icon={mobileIcon.src} />
      <SignItem label="Modern" icon={modernIcon.src} />
      <SignItem label="Built with love" icon={devIcon.src} />
    </ul>

    <h3 className={style.heading}>Applications I've built</h3>
    <ul className={style.projects}>
      <ProjectItem data={null} />
    </ul>
  </div>
);

export default Work;
