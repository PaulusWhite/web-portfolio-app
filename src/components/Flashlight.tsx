import { MutableRefObject } from "react";

import style from "./../styles/modules/flashlight.module.scss";

interface IFlashlightProps {
  node: MutableRefObject<null>;
}

const Flashlight = (props: IFlashlightProps) => (
  <div ref={props.node} className={style.flashlight}></div>
);

export default Flashlight;
