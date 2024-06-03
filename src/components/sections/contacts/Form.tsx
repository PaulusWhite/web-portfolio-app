import { useEffect, useRef, useReducer, FormEvent } from "react";
import { createPortal } from "react-dom";

import style from "./../../../styles/modules/contacts/form.module.scss";

//components
import Button from "@/components/common/Button";
import ErrorPopupPortal from "./ErrorPopupPortal";

//scripts
import setUnrollEffect from "@/scripts/startAnimations/setUnrollEffect";
import { isInputValueValid, isMailInputValid } from "@/scripts/formValidations";

const COMMON_ERROR_TEXT: string = "You did not enter your";

interface IReducerState {
  errorsMessage: string;
  nameValue: string;
  mailValue: string;
  messageValue: string;
}

interface IAction {
  type: "name" | "mail" | "message" | "error";
  payload: string;
}

const INIT_REDUCER_STATE: IReducerState = {
  errorsMessage: "",
  nameValue: "",
  mailValue: "",
  messageValue: "",
};

const reducer = (state: IReducerState, action: IAction) => {
  const { type } = action;
  const payload = action.payload === " " ? "" : action.payload;

  if (type === "name" && isInputValueValid(payload as string))
    return { ...state, nameValue: payload };
  if (type === "mail" && isInputValueValid(payload as string))
    return { ...state, mailValue: payload };
  if (type === "message") return { ...state, messageValue: payload };
  if (type === "error") return { ...state, errorsMessage: payload };

  return state;
};

const Form = () => {
  const formRef = useRef(null);

  const [state, dispatch] = useReducer(reducer, INIT_REDUCER_STATE);
  const { errorsMessage, nameValue, mailValue, messageValue } = state;

  const submitForm = async (e: FormEvent) => {
    e.preventDefault();

    const errorsArr: string[] = [];

    if (!nameValue.length) errorsArr.push(`${COMMON_ERROR_TEXT} name`);
    if (mailValue && !isMailInputValid(mailValue)) {
      errorsArr.push("Email you entered is not correct");
    }
    if (!mailValue.length) errorsArr.push(`${COMMON_ERROR_TEXT} mail`);
    if (!messageValue.length) errorsArr.push(`${COMMON_ERROR_TEXT} message`);

    if (errorsArr.length) {
      if (errorsMessage) dispatch({ type: "error", payload: "" });
      dispatch({ type: "error", payload: errorsArr.toString() });
      return;
    }

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: process.env.NEXT_PUBLIC_GMAIL_ACCESS_KEY,
        name: nameValue,
        email: mailValue,
        message: messageValue,
      }),
    });

    const result = await response.json();
    if (result.success) {
      console.log(result);
    }
  };

  useEffect(() => {
    const formNode: HTMLFormElement = formRef.current!;
    // setUnrollEffect(formNode);
  }, []);

  return (
    <>
      <form className={style.form} ref={formRef} onSubmit={(e) => submitForm(e)}>
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
      </form>
      {errorsMessage &&
        createPortal(
          <ErrorPopupPortal
            errorMessage={errorsMessage}
            closePortal={() => dispatch({ type: "error", payload: "" })}
          />,
          document.body,
        )}
    </>
  );
};

export default Form;
