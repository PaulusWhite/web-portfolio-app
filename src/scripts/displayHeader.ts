import style from "./../styles/modules/header.module.scss";

const displayHeader = (header: HTMLDivElement) => {
  let prevValue: number = 0;

  window.addEventListener("scroll", () => {
    const offset: number = window.scrollY;

    if (offset > prevValue && !header.classList.contains(style.hide))
      header.classList.add(style.hide);
    if (offset < prevValue && header.classList.contains(style.hide))
      header.classList.remove(style.hide);

    prevValue = offset;
  });
};

export default displayHeader;
