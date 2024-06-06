import style from "./../styles/modules/mobileNav.module.scss";

const displayMobileNav = (isClosed?: true) => {
  const mobileNav: HTMLDivElement = document.querySelector(`.${style["mobile-nav"]}`)!;

  if (isClosed && mobileNav.classList.contains(`${style.show}`)) {
    mobileNav.classList.remove(`${style.show}`);
    mobileNav.classList.remove("show-mobile-nav");

    return;
  }

  mobileNav.classList.toggle(`${style.show}`);
  mobileNav.classList.toggle("show-mobile-nav");
};

export default displayMobileNav;
