import NavLink from "./NavLink";

import style from "./../styles/modules/nav.module.scss";

//components
import Button from "./common/Button";

const Nav = () => (
  <nav className={style.nav}>
    <NavLink index={1} label="About" anchor="about" />
    <NavLink index={2} label="Skills" anchor="skills" />
    <NavLink index={3} label="Experience" anchor="experience" />
    <NavLink index={4} label="Work" anchor="work" />
    <NavLink index={5} label="Contacts" anchor="contacts" />
    <Button extraClass={`${style["resume-btn"]}`}>Resume</Button>
  </nav>
);

export default Nav;
