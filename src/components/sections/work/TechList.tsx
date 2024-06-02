import style from "./../../../styles/modules/work/tech.module.scss";

const TechList = (props: { techList: string[] }) => (
  <ul className={style["tech-list"]}>
    {props.techList.map((tech: string, index: number) => {
      return (
        <li key={index + tech} className={style.tech}>
          {tech}
        </li>
      );
    })}
  </ul>
);

export default TechList;
