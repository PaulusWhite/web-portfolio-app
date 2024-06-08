import startAnimation from "./startAnimation";
import { IEffectActionProps } from "./startAnimation";

const effectAction = (props: IEffectActionProps) => {
  const { entry, element, observer } = props;

  entry.target.classList.add("showNode");
  observer.unobserve(element);

  setTimeout(() => {
    element.classList.remove("ascentInit");
    entry.target.classList.remove("showNode");
  }, 1100);
};

const setAscentEffect = () => {
  const elements: NodeListOf<Element> = document.querySelectorAll(".ascentInit");
  startAnimation({ elements, effectAction });
};

export default setAscentEffect;
