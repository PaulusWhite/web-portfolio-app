import style from "./../styles/modules/burgerMenu.module.scss";

const transformBurgerMenu = () => {
  const burgerMenu: HTMLDivElement = document.querySelector(`.${style["burger-menu"]}`)!;

  burgerMenu.classList.toggle(`${style["active-menu"]}`);
};

export default transformBurgerMenu;
