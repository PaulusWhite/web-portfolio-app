//this script is only for heading component

import style from "./../../styles/modules/common/heading.module.scss";

import startAnimation from "./startAnimation";
import { IEffectActionProps } from "./startAnimation";

const effectAction = (props: IEffectActionProps) => {
  const { entry, element, observer } = props;

  entry.target.classList.remove(style["hide-heading-line"]);

  setTimeout(() => {
    entry.target.classList.remove(style["hide-heading-labels"]);
  }, 500);
  observer.unobserve(element);
};

const setHeadingAppearanceEffect = () => {
  const headings: NodeListOf<Element> = document.querySelectorAll(`.${style.heading}`);

  startAnimation({ elements: headings, effectAction });
};

export default setHeadingAppearanceEffect;
