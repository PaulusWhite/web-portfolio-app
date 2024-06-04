import Image from "next/image";
import { MutableRefObject } from "react";

import style from "./../styles/modules/loader.module.scss";

const Loader = (props: { loaderRef: MutableRefObject<null> }) => (
  <div className={style.loader} ref={props.loaderRef}>
    <Image src="/logo.svg" alt="logo icon" width={150} height={150} />
  </div>
);

export default Loader;
