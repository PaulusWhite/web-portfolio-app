"use client";

import style from "./../styles/modules/burgerMenu.module.scss";

//scripts
import displayMobileNav from "@/scripts/displayMobileNav";

const BurgetMenu = () => {
  return (
    <div className={style["burger-menu"]} onClick={() => displayMobileNav()}>
      <span className={style["top-slice"]}></span>
      <span className={style["middle-slice"]}></span>
      <span className={style["bottom-slice"]}></span>
    </div>
  );
};

export default BurgetMenu;
