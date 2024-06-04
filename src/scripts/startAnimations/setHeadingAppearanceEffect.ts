//this script is only for heading component

import style from "./../../styles/modules/common/heading.module.scss";

const setHeadingAppearanceEffect = (heading: HTMLElement) => {
  // heading.classList.add(style["hide-heading-labels"]);
  // heading.classList.add(style["hide-heading-line"]);

  const observerCallback = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;

    if (entry.isIntersecting) {
      entry.target.classList.remove(style["hide-heading-line"]);

      setTimeout(() => {
        entry.target.classList.remove(style["hide-heading-labels"]);
      }, 1000);
      observer.unobserve(heading);
    }
  };

  const observer = new IntersectionObserver(observerCallback, { threshold: 1 });
  observer.observe(heading);
};

export default setHeadingAppearanceEffect;
