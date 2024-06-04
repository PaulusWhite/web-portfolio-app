"use client";

import style from "./../../../styles/modules/work/commingProjectCardItem.module.scss";

import Image from "next/image";

//IMG
import codingImg from "./../../../../public/coding.jpg";

const CommingProjectCardItem = () => {
  return (
    <div className={`${style["comming-project"]} fallInit`}>
      <Image src={codingImg.src} fill={true} alt="coding" sizes="100%" />
      <div className={style.veil}></div>
      <p className={style.notice}>Comming soon</p>
    </div>
  );
};

export default CommingProjectCardItem;
