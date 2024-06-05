"use client";

import { useEffect, useRef } from "react";

import style from "./../styles/modules/header.module.scss";

//Components
import Logo from "./Logo";
import Nav from "./Nav";

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
      <Nav />
    </header>
  );
};

export default Header;
