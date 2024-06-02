"use client";

import { useState, useEffect, useRef } from "react";
import style from "./../../../styles/modules/experience/experience.module.scss";

//data
import data from "./../../../lib/data.json";

//interfaces
import { IDataRadioItem, IDataRadioValue } from "@/interfaces/IData";

//components
import DescriptionList from "./DescriptionList";
import RadioBtn from "./RadioBtn";

//scripts
import setUnrollEffect from "@/scripts/startAnimations/setUnrollEffect";

const Experience = () => {
  const radioList: IDataRadioItem[] = data.radioList as IDataRadioItem[];
  const defaultValue: IDataRadioValue = radioList[0].value;
  const expRef = useRef(null);

  const [activeInput, setInput] = useState<IDataRadioValue>(defaultValue);

  useEffect(() => {
    const expNode: HTMLDivElement = expRef.current!;
    setUnrollEffect(expNode);
  }, []);

  return (
    <div className={style.experience} ref={expRef}>
      <div className={style.radioList}>
        {radioList.map((radioItem: IDataRadioItem) => {
          const isChecked: boolean = activeInput === radioItem.value;

          return (
            <RadioBtn
              key={radioItem.id}
              label={radioItem.label}
              value={radioItem.value}
              isChecked={isChecked}
              setInput={setInput}
            />
          );
        })}
      </div>
      <DescriptionList {...data.descriptionList[activeInput]} />
    </div>
  );
};

export default Experience;
