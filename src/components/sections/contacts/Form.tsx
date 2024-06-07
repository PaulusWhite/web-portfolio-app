import { useReducer, FormEvent, useState, useContext } from "react";
import { createPortal } from "react-dom";

import style from "./../../../styles/modules/contacts/form.module.scss";

//components
import Button from "@/components/common/Button";
import PopupPortal from "./PopupPortal";

//context
import { LoaderContext } from "@/context/LoaderContextProvider";
import { ILoaderContext } from "@/context/LoaderContextProvider";

//interfaces
import { IValidationResult } from "@/scripts/formValidations";
import { IPostRequestBody } from "@/interfaces/IPostMessageByEmail";
import { IResponseData } from "@/interfaces/IPostMessageByEmail";

import { isFormDataValid } from "@/scripts/formValidations";

import formReducer from "@/lib/formReducer";
import { IReducerState } from "@/lib/formReducer";

const INIT_REDUCER_STATE: IReducerState = {
  nameValue: "",
  mailValue: "",
  messageValue: "",
};

const Form = () => {
  const [state, dispatch] = useReducer(formReducer, INIT_REDUCER_STATE);
  const { nameValue, mailValue, messageValue } = state;
  const { setIsSpinnerLoading } = useContext(LoaderContext) as ILoaderContext;

  const [isPopupMessage, setPopupMessage] = useState<boolean>(false);
  const [errorsArr, setErrors] = useState<false | string[]>(false);
  const [successMessage, setSuccessMessage] = useState<false | string>(false);

  const submitForm = async (e: FormEvent) => {
    e.preventDefault();

    const validationData: IValidationResult = isFormDataValid(state);
    const { isValid, errors } = validationData;

    if (!isValid) {
      setErrors(errors as string[]);
      setPopupMessage(true);
      return;
    }

    setIsSpinnerLoading(true);

    const requestBody: IPostRequestBody = {
      name: nameValue,
      email: mailValue,
      message: messageValue,
    };

    const response: Response = await fetch("/api", {
      method: "POST",
      body: JSON.stringify(requestBody),
    });

    const data: IResponseData = await response.json();
    const { isError, message } = data;

    if (isError) {
      setErrors([message]);
    } else {
      setSuccessMessage(message);
    }

    setIsSpinnerLoading(false);
    setPopupMessage(true);
    dispatch({ type: "reset", payload: "" });
  };

  const closePopupPortal = () => {
    setPopupMessage(false);
    setErrors(false);
    setSuccessMessage(false);
  };

  return (
    <>
      <form className={style.form} onSubmit={(e) => submitForm(e)}>
        <fieldset className={`${style.fieldset} unrolling-el`}>
          <h3>Write me a letter</h3>

          <input
            type="text"
            placeholder="You Name"
            value={nameValue}
            onChange={(e) => dispatch({ type: "name", payload: e.target.value })}
          />

          <input
            type="text"
            placeholder="You Email"
            value={mailValue}
            onChange={(e) => dispatch({ type: "mail", payload: e.target.value })}
          />

          <textarea
            rows={10}
            placeholder="Your Message"
            value={messageValue}
            onChange={(e) => dispatch({ type: "message", payload: e.target.value })}
          />

          <Button>Get in touch</Button>
        </fieldset>
      </form>

      {isPopupMessage &&
        createPortal(
          <PopupPortal {...{ errorsArr, successMessage, closePopupPortal }} />,
          document.body,
        )}
    </>
  );
};

export default Form;
