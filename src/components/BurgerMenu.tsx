"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";

import style from "./../styles/modules/burgerMenu.module.scss";

const BurgetMenu = () => {
  return (
    <div className={style["burger-menu"]}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default BurgetMenu;
