"use client";

import style from "./../../../styles/modules/work/commingProjectItem.module.scss";

import { useRef, useEffect } from "react";

import Image from "next/image";

//IMG
import codingImg from "./../../../../public/coding.jpg";

//scripts
import setFallEffect from "@/scripts/startAnimations/setFallEffect";

const CommingProjectItem = () => {
  const commingProjectRef = useRef(null);

  useEffect(() => {
    const commingProjectNode: HTMLElement = commingProjectRef.current!;
    setFallEffect(commingProjectNode);
  }, []);

  return (
    <div className={style["comming-project"]} ref={commingProjectRef}>
      <Image src={codingImg.src} fill={true} alt="coding" sizes="100%" />
      <div className={style.veil}></div>
      <p className={style.notice}>Comming soon</p>
    </div>
  );
};

export default CommingProjectItem;
