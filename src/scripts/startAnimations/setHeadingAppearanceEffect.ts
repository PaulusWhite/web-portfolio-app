//this script is only for heading component

import style from "./../../styles/modules/common/heading.module.scss";

const setHeadingAppearanceEffect = () => {
  const headings: NodeListOf<Element> = document.querySelectorAll(`.${style.heading}`);

  headings.forEach((heading: Element) => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;

      if (entry.isIntersecting) {
        entry.target.classList.remove(style["hide-heading-line"]);

        setTimeout(() => {
          entry.target.classList.remove(style["hide-heading-labels"]);
        }, 500);
        observer.unobserve(heading);
      }
    };

    const observer = new IntersectionObserver(observerCallback, { threshold: 0.5 });
    observer.observe(heading);
  });
};

export default setHeadingAppearanceEffect;
