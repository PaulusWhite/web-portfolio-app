"use client";

import { useEffect } from "react";

import style from "./../../../styles/modules/contacts/errorPopupPortal.module.scss";

interface IErrorPopupPortalProps {
  errorMessage: string;
  closePortal: () => void;
}

const ErrorPopupPortal = (props: IErrorPopupPortalProps) => {
  const { errorMessage, closePortal } = props;
  const errorsArr = errorMessage.split(",");

  useEffect(() => {
    const timerID = setTimeout(() => {
      closePortal();
    }, 5000);

    return () => clearTimeout(timerID);
  }, []);

  return (
    <div className={style["error-popup"]} onClick={closePortal}>
      {errorsArr.map((errorMessage: string, index: number) => (
        <span key={index + errorMessage[0]}>{errorMessage}</span>
      ))}
      <span></span>
    </div>
  );
};

export default ErrorPopupPortal;
