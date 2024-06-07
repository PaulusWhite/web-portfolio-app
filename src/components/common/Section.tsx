import style from "./../../styles/modules/common/section.module.scss";

//components
import Heading from "./Heading";

//interfaces
import { IHeadingProps } from "./Heading";

interface ISectionProps extends IHeadingProps {
  content: React.ReactNode;
  id: string;
}

const Section = (props: ISectionProps) => {
  return (
    <section className={style.section} id={props.id}>
      <Heading index={props.index} label={props.label} />
      <span className={`${style["background-label"]} ${style["hide-bg-label"]}`}>
        {props.label}
      </span>
      <>{props.content}</>
    </section>
  );
};

export default Section;
