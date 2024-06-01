import style from "./../../styles/modules/common/section.module.scss";
import { IHeadingProps } from "./Heading";
import Heading from "./Heading";

interface ISectionProps extends IHeadingProps {
  content: React.ReactNode;
  id: string;
}

const Section = (props: ISectionProps) => (
  <section className={style.section} id={props.id}>
    <Heading index={props.index} label={props.label} />
    <span className={style["background-label"]}>{props.label}</span>
    <>{props.content}</>
  </section>
);

export default Section;
