"use client";

import { useEffect, useRef } from "react";

import style from "./../styles/modules/header.module.scss";

//Components
import NavLink from "./NavLink";
import Logo from "./Logo";
import Button from "./common/Button";

//Scripts
import displayHeader from "@/scripts/displayHeader";

const Header = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    const headerNode: unknown = headerRef.current;
    displayHeader(headerNode as HTMLDivElement);
  }, []);

  return (
    <header ref={headerRef} className={style.header}>
      <Logo />

      <nav>
        <NavLink index={1} label="About" anchor="about" />
        <NavLink index={2} label="Skills" anchor="skills" />
        <NavLink index={3} label="Experience" anchor="experience" />
        <NavLink index={4} label="Work" anchor="work" />
        <NavLink index={5} label="Contacts" anchor="contacts" />
        <Button extraClass={`${style["resume-btn"]}`}>Resume</Button>
      </nav>
    </header>
  );
};

export default Header;
