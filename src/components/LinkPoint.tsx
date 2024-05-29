import Link from "next/link";

interface ILinkPoitProps {
  index: number;
  label: string;
}

const LinkPoint = (props: ILinkPoitProps) => (
  <Link className="link-point" href={`#${props.label}`}>
    <span className="link-point__index">0{props.index}</span>
    <span className="link-point__label"> {props.label}</span>
  </Link>
);

export default LinkPoint;
