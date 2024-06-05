"use client";

import style from "./../styles/modules/mobileNav.module.scss";

import Nav from "./Nav";

const MobileNav = () => (
  <div className={style["mobile-nav"]}>
    <Nav extraClass={`${style["mobile-nav-list"]}`} />
  </div>
);

export default MobileNav;
