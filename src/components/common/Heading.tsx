import style from "./../../styles/modules/common/heading.module.scss";

interface IHeadingProps {
  index: number;
  label: string;
}

const Heading = (props: IHeadingProps) => {
  return (
    <h2 className={`${style.heading} hide-heading-line hide-heading-labels`}>
      <span className={style.index}>0{props.index}.</span>
      <span className={style.label}>{props.label}</span>
    </h2>
  );
};

export default Heading;
export type { IHeadingProps };
