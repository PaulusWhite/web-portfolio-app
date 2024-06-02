//this animation script is only for .background-label in Section component

import style from "../../styles/modules/common/section.module.scss";

const setBgLabelSlipEffect = (label: HTMLElement) => {
  label.classList.add(style["hide-bg-label"]);

  const observerCallback = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;

    if (entry.isIntersecting) {
      entry.target.classList.remove(style["hide-bg-label"]);
      observer.unobserve(label);
    }
  };

  const observer = new IntersectionObserver(observerCallback, { threshold: 1 });
  observer.observe(label);
};

export default setBgLabelSlipEffect;
