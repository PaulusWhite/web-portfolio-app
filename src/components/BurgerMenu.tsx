"use client";

import style from "./../styles/modules/burgerMenu.module.scss";

//scripts
import displayMobileNav from "@/scripts/displayMobileNav";

const BurgetMenu = () => {
  return (
    <div className={style["burger-menu"]} onClick={() => displayMobileNav()}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default BurgetMenu;
