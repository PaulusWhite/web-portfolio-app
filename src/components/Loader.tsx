"use client";

import Image from "next/image";
import { useContext, useEffect, useRef } from "react";

import style from "./../styles/modules/loader.module.scss";

//context
import { LoaderContext, ILoaderContext } from "@/context/LoaderContextProvider";

const Loader = () => {
  const { isLoading } = useContext(LoaderContext) as ILoaderContext;
  const loaderRef = useRef(null);

  useEffect(() => {
    const loaderNode: HTMLDivElement = loaderRef.current!;

    if (!isLoading) {
      loaderNode.classList.add("hide");
      loaderNode.classList.remove("active-loader");

      setTimeout(() => {
        loaderNode.classList.add("none");
      }, 250);
    }
  }, [isLoading]);

  return (
    <div className={`${style.loader} active-loader`} ref={loaderRef}>
      <Image src="/logo.svg" alt="logo icon" width={150} height={150} />
    </div>
  );
};

export default Loader;
