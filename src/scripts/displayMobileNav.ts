import style from "./../styles/modules/mobileNav.module.scss";

import transformBurgerMenu from "./transformBurgerMenu";

const displayMobileNav = (isClosed?: true) => {
  const mobileNav: HTMLDivElement = document.querySelector(`.${style["mobile-nav"]}`)!;

  transformBurgerMenu();

  if (isClosed) {
    mobileNav.classList.remove(`${style.show}`);
    mobileNav.classList.remove("show-mobile-nav");

    return;
  }

  mobileNav.classList.toggle(`${style.show}`);
  mobileNav.classList.toggle("show-mobile-nav");
};

export default displayMobileNav;
