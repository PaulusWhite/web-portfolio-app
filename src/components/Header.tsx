import style from "./../styles/modules/header.module.scss";

//Components
import LinkPoint from "./LinkPoint";

const Header = () => (
  <header className={style.header}>
    <LinkPoint index={1} label="About" />
    <LinkPoint index={2} label="Skills" />
    <LinkPoint index={3} label="Experience" />
    <LinkPoint index={4} label="Work" />
    <LinkPoint index={5} label="Contacts" />
  </header>
);

export default Header;
