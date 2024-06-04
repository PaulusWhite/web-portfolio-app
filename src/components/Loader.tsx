"use client";

import Image from "next/image";
import { MutableRefObject, useContext, useEffect, useRef, useState } from "react";
import { LoaderContext } from "@/app/ContextProvider";

import style from "./../styles/modules/loader.module.scss";

import { ILoaderContext } from "@/interfaces/IContext";

const Loader = () => {
  const { isLoading } = useContext(LoaderContext) as ILoaderContext;
  const loaderRef = useRef(null);

  useEffect(() => {
    const loaderNode: HTMLDivElement = loaderRef.current!;
    if (!isLoading) loaderNode.classList.add(style.hide);
  }, [isLoading]);

  return (
    <div className={style.loader} ref={loaderRef}>
      <Image src="/logo.svg" alt="logo icon" width={150} height={150} />
    </div>
  );
};

export default Loader;
