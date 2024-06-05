import style from "./../styles/modules/mobileNav.module.scss";

const displayMobileNav = () => {
  const mobileNav: HTMLDivElement = document.querySelector(`.${style["mobile-nav"]}`)!;
  mobileNav.classList.toggle(`${style.show}`);
};

export default displayMobileNav;
