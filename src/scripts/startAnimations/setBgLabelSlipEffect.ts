//this animation script is only for .background-label in Section component

import style from "../../styles/modules/common/section.module.scss";

import startAnimation from "./startAnimation";
import { IEffectActionProps } from "./startAnimation";

const effectAction = (props: IEffectActionProps) => {
  const { entry, element, observer } = props;

  entry.target.classList.remove(style["hide-bg-label"]);
  observer.unobserve(element);
};

const setBgLabelSlipEffect = () => {
  const labels: NodeListOf<Element> = document.querySelectorAll(`.${style["hide-bg-label"]}`);

  startAnimation({ elements: labels, effectAction });
};

export default setBgLabelSlipEffect;
