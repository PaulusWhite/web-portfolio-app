import style from "./../../styles/modules/common/section.module.scss";
import { IHeadingProps } from "./Heading";
import Heading from "./Heading";

interface ISectionProps extends IHeadingProps {
  content: React.ReactNode;
}

const Section = (props: ISectionProps) => (
  <section className={style.section}>
    <Heading index={props.index} label={props.label} />
    <>{props.content}</>
  </section>
);

export default Section;
