import Image from "next/image";

import style from "./../styles/modules/loader.module.scss";

const Loader = () => (
  <div className={style.loader}>
    <Image src="/logo.svg" alt="logo icon" width={150} height={150} />
  </div>
);

export default Loader;
