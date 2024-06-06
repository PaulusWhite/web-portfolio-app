"use client";
import { useContext, useEffect, useRef } from "react";

import { LoaderContext } from "@/app/ContextProvider";
import { ILoaderContext } from "@/interfaces/IContext";

import style from "./../styles/modules/spinner.module.scss";

const Spinner = () => {
  const { isSpinnerLoading } = useContext(LoaderContext) as ILoaderContext;
  const spinnerRef = useRef(null);

  useEffect(() => {
    const spinnerNode: HTMLDivElement = spinnerRef.current!;

    if (isSpinnerLoading) {
      spinnerNode.classList.add("active-loader");
      spinnerNode.classList.remove("none");

      setTimeout(() => {
        spinnerNode.classList.remove("hide");
      }, 250);
    } else {
      spinnerNode.classList.remove("active-loader");
      spinnerNode.classList.add("hide");

      setTimeout(() => {
        spinnerNode.classList.add("none");
      }, 250);
    }
  }, [isSpinnerLoading]);

  return (
    <div className={`${style["spinner-wrapper"]} hide none`} ref={spinnerRef}>
      <div className={style.spinner}></div>
    </div>
  );
};

export default Spinner;
