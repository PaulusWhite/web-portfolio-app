import startAnimation from "./startAnimation";
import { IEffectActionProps } from "./startAnimation";

const effectAction = (props: IEffectActionProps) => {
  const { entry, element, observer } = props;

  entry.target.classList.add("showNode");
  observer.unobserve(element);

  setTimeout(() => {
    element.classList.remove("fallInit");
    entry.target.classList.remove("showNode");
  }, 2000);
};

const setFallEffect = () => {
  const elements: NodeListOf<Element> = document.querySelectorAll(".fallInit");

  startAnimation({ elements, effectAction });
};

export default setFallEffect;
