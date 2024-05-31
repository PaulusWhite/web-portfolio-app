import Link from "next/link";

import style from "./../styles/modules/navLink.module.scss";

interface INavLinkProps {
  index: number;
  label: string;
}

const NavLink = (props: INavLinkProps) => (
  <Link className={style["nav-link"]} href={`#${props.label}`}>
    <span className={style["nav-link__index"]}>0{props.index}.</span>
    <span className={style["link-point__label"]}> {props.label}</span>
  </Link>
);

export default NavLink;
