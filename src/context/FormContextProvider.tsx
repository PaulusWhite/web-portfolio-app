import { createContext, useReducer } from "react";

//scripts
import { isInputValueValid } from "@/scripts/formValidations";

interface IFormContext {
  nameValue: string;
  emailValue: string;
  messageValue: string;
  changeValue: (type: TType, value: string) => void;
}

type TState = Omit<IFormContext, "reset" | "changeValue">;

type TType = "name" | "email" | "message" | "reset";

interface IAction {
  type: TType;
  payload: string;
}

const FormContext = createContext<IFormContext | null>(null);

const reducer = (state: TState, action: IAction) => {
  action.payload = action.payload === " " ? "" : action.payload;

  if (action.type !== "message" && !Boolean(isInputValueValid(action.payload))) return state;

  if (action.type === "name") return { ...state, nameValue: action.payload };
  if (action.type === "email") return { ...state, emailValue: action.payload };
  if (action.type === "message") return { ...state, messageValue: action.payload };
  if (action.type === "reset") return { ...state, nameValue: "", emailValue: "", messageValue: "" };

  return state;
};

const INIT_STATE: TState = {
  nameValue: "",
  emailValue: "",
  messageValue: "",
};

const FormContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const { nameValue, emailValue, messageValue } = state;

  const changeValue = (type: TType, value: string) => {
    dispatch({ type, payload: value });
  };

  return (
    <FormContext.Provider value={{ nameValue, emailValue, messageValue, changeValue }}>
      {children}
    </FormContext.Provider>
  );
};

export default FormContextProvider;
export { FormContext };
export type { IFormContext, TType };
