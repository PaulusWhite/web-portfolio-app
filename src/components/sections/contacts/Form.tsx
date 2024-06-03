import { useEffect, useRef, useReducer } from "react";

import style from "./../../../styles/modules/contacts/form.module.scss";

//components
import Button from "@/components/common/Button";

//scripts
import setUnrollEffect from "@/scripts/startAnimations/setUnrollEffect";

interface IReducerState {
  nameValue: string;
  mailValue: string;
  messageValue: string;
}

interface IAction {
  type: "name" | "mail" | "message";
  payload: string;
}

const INIT_REDUCER_STATE: IReducerState = {
  nameValue: "",
  mailValue: "",
  messageValue: "",
};

const reducer = (state: IReducerState, action: IAction) => {
  const { type, payload } = action;
  if (type === "name") return { ...state, nameValue: payload };
  if (type === "mail") return { ...state, mailValue: payload };
  if (type === "message") return { ...state, messageValue: payload };

  return state;
};

const Form = () => {
  const formRef = useRef(null);

  const [state, dispatch] = useReducer(reducer, INIT_REDUCER_STATE);
  const { nameValue, mailValue, messageValue } = state;

  useEffect(() => {
    const formNode: HTMLFormElement = formRef.current!;
    // setUnrollEffect(formNode);
  }, []);

  return (
    <form className={style.form} ref={formRef} onSubmit={(e) => e.preventDefault()}>
      <h3>Write me a letter</h3>

      <input
        type="text"
        placeholder="You Name"
        value={nameValue}
        onChange={(e) => dispatch({ type: "name", payload: e.target.value })}
      />

      <input
        type="email"
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
  );
};

export default Form;
