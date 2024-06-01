import Image from "next/image";
import Link from "next/link";

import style from "./../styles/modules/logo.module.scss";

import icon from "../../public/logo.svg";

const Logo = () => (
  <div className={style.logo}>
    <span className={style.tag}>&lsaquo;</span>

    <Link href="#about" className={style["logo__logo-field"]}>
      <Image src={icon.src} width={35} height={35} alt="logo" />
      <span className={style["logo__label"]}>Exactly Paul</span>
    </Link>

    <span className={style.tag}>/&rsaquo;</span>
  </div>
);

export default Logo;
