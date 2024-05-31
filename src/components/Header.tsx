import style from "./../styles/modules/header.module.scss";

//Components
import NavLink from "./NavLink";
import Logo from "./Logo";

const Header = () => (
  <header className={style.header}>
    <Logo />

    <nav>
      <NavLink index={1} label="About" />
      <NavLink index={2} label="Skills" />
      <NavLink index={3} label="Experience" />
      <NavLink index={4} label="Work" />
      <NavLink index={5} label="Contacts" />
    </nav>
  </header>
);

export default Header;
