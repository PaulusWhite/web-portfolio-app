import Image from "next/image";
import Link from "next/link";

import style from "./../styles/modules/logo.module.scss";

//scripts
import displayMobileNav from "@/scripts/displayMobileNav";

const Logo = () => (
  <div className={style.logo}>
    <span className={style.tag}>&lsaquo;</span>

    <Link
      href="#about"
      className={style["logo__logo-field"]}
      onClick={() => {
        displayMobileNav(true);
      }}
    >
      <Image src="/logo.svg" width={35} height={35} alt="logo" />
      <span className={style["logo__label"]}>Exactly Paul</span>
    </Link>

    <span className={style.tag}>/&rsaquo;</span>
  </div>
);

export default Logo;
