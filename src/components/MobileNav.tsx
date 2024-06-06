"use client";

import style from "./../styles/modules/mobileNav.module.scss";

import Nav from "./Nav";
import Logo from "./Logo";

const MobileNav = () => (
  <div className={style["mobile-nav"]}>
    <Logo />
    <Nav />
  </div>
);

export default MobileNav;
