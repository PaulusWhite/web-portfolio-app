"use client";

import { useEffect, useRef } from "react";

import style from "./../../../styles/modules/contacts/popupPortal.module.scss";

interface IPopupPortalProps {
  errorsArr: string[] | false;
  successMessage: string | false;
  closePopupPortal: () => void;
}

const PopupPortal = (props: IPopupPortalProps) => {
  const { errorsArr, successMessage, closePopupPortal } = props;
  const extraClass = errorsArr ? "error" : "success";

  const popupRef = useRef(null);

  const forceClosePopup = () => {
    const popupNode: HTMLDivElement = popupRef.current!;
    popupNode.classList.remove(style.show);

    setTimeout(() => {
      closePopupPortal();
    }, 300);
  };

  useEffect(() => {
    const popupNode: HTMLDivElement = popupRef.current!;

    const appearanceID = setTimeout(() => {
      popupNode.classList.add(style.show);
    }, 100);

    const timerID = setTimeout(() => {
      popupNode.classList.remove(style.show);

      setTimeout(() => {
        closePopupPortal();
      }, 350);
    }, 5100);

    return () => {
      clearTimeout(appearanceID);
      clearTimeout(timerID);
    };
  }, []);

  return (
    <div
      className={`${style["popupPortal"]} ${style[extraClass]}`}
      ref={popupRef}
      onClick={forceClosePopup}
    >
      {errorsArr &&
        errorsArr.map((errorMessage: string, index: number) => {
          return <span key={index + errorMessage[1]}>{errorMessage}</span>;
        })}
      {successMessage && <span>{successMessage}</span>}
    </div>
  );
};

export default PopupPortal;
