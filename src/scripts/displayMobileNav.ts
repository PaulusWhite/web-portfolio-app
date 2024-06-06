import style from "./../styles/modules/mobileNav.module.scss";

const displayMobileNav = () => {
  const mobileNav: HTMLDivElement = document.querySelector(`.${style["mobile-nav"]}`)!;
  mobileNav.classList.toggle(`${style.show}`);
  mobileNav.classList.toggle("show-mobile-nav");
};

export default displayMobileNav;
