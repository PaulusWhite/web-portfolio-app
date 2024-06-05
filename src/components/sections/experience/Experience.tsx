"use client";

import { useState, useRef } from "react";
import style from "./../../../styles/modules/experience/experience.module.scss";
import descListStyle from "./../../../styles/modules/experience/description.module.scss";

//data
import data from "./../../../lib/data.json";

//interfaces
import { IDataRadioItem, IDataRadioValue } from "@/interfaces/IData";

//components
import DescriptionList from "./DescriptionList";
import RadioBtn from "./RadioBtn";

const Experience = () => {
  const radioList: IDataRadioItem[] = data.radioList as IDataRadioItem[];
  const defaultValue: IDataRadioValue = radioList[0].value;
  const descListRef = useRef(null);

  const [activeInput, setInput] = useState<IDataRadioValue>(defaultValue);

  const changeInput = (value: IDataRadioValue) => {
    const descListNode: HTMLDivElement = descListRef.current!;
    descListNode.classList.remove(descListStyle.show);

    setTimeout(() => {
      setInput(value);
    }, 350);
  };

  return (
    <div className={style["exp-wrapper"]}>
      <div className={`${style.experience} unrolling-el`}>
        <div className={style.radioList}>
          {radioList.map((radioItem: IDataRadioItem) => {
            const isChecked: boolean = activeInput === radioItem.value;

            return (
              <RadioBtn
                key={radioItem.id}
                label={radioItem.label}
                value={radioItem.value}
                isChecked={isChecked}
                setInput={changeInput}
              />
            );
          })}
        </div>

        <DescriptionList {...data.descriptionList[activeInput]} descListRef={descListRef} />
      </div>
    </div>
  );
};

export default Experience;
