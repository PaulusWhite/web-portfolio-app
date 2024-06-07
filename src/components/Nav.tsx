import Link from "next/link";
import NavLink from "./NavLink";

import style from "./../styles/modules/nav.module.scss";

//components
import Button from "./common/Button";

const Nav = () => {
  return (
    <nav className={style.nav}>
      <NavLink index={1} label="About" anchor="about" />
      <NavLink index={2} label="Skills" anchor="skills" />
      <NavLink index={3} label="Experience" anchor="experience" />
      <NavLink index={4} label="Work" anchor="work" />
      <NavLink index={5} label="Contacts" anchor="contacts" />
      <Link href="/files/resume.pdf" target="_blank">
        <Button extraClass={`${style["resume-btn"]}`}>Resume</Button>
      </Link>
    </nav>
  );
};

export default Nav;
