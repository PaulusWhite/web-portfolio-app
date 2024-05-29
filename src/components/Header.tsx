import style from "./../styles/modules/header.module.scss";

//Components
import LinkPoint from "./LinkPoint";

const Header = () => (
  <header className={style.header}>
    <LinkPoint index={1} label="About" />
    <LinkPoint index={2} label="Experience" />
    <LinkPoint index={3} label="Work" />
    <LinkPoint index={4} label="Contacts" />
  </header>
);

export default Header;
