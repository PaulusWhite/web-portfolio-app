"use client";

import Link from "next/link";

import style from "./../styles/modules/errorPage.module.scss";
import { useEffect, useContext } from "react";

//Components
import Button from "@/components/common/Button";

//context
import { LoaderContext } from "./ContextProvider";
import { ILoaderContext } from "@/interfaces/IContext";

const ErrorPage = () => {
  const { setIsLoading } = useContext(LoaderContext) as ILoaderContext;

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <div className={style["error-page"]}>
      <h1>404</h1>
      <p>Page is not found</p>
      <Link href="/">
        <Button>On the main</Button>
      </Link>
    </div>
  );
};

export default ErrorPage;
