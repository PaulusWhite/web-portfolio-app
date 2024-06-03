"use client";

import { useEffect } from "react";

import style from "./../../../styles/modules/contacts/popupPortal.module.scss";

interface IPopupPortalProps {
  errorsArr: string[] | false;
  successMessage: string | false;
  closePopupPortal: () => void;
}

const PopupPortal = (props: IPopupPortalProps) => {
  const { errorsArr, successMessage, closePopupPortal } = props;
  const extraClass = errorsArr ? "error" : "success";

  useEffect(() => {
    const timerID = setTimeout(() => {
      closePopupPortal();
    }, 5000);

    return () => clearTimeout(timerID);
  }, []);

  return (
    <div className={`${style["popupPortal"]} ${style[extraClass]}`} onClick={closePopupPortal}>
      {errorsArr &&
        errorsArr.map((errorMessage: string, index: number) => {
          return <span key={index + errorMessage[1]}>{errorMessage}</span>;
        })}
      {successMessage && <span>{successMessage}</span>}
    </div>
  );
};

export default PopupPortal;
