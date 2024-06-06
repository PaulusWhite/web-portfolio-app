//scripts
import { isInputValueValid } from "@/scripts/formValidations";

interface IReducerState {
  nameValue: string;
  mailValue: string;
  messageValue: string;
}

interface IAction {
  type: "name" | "mail" | "message" | "reset";
  payload: string;
}

const formReducer = (state: IReducerState, action: IAction) => {
  const { type } = action;
  const payload = action.payload === " " ? "" : action.payload;

  if (type === "name" && isInputValueValid(payload as string))
    return { ...state, nameValue: payload };
  if (type === "mail" && isInputValueValid(payload as string))
    return { ...state, mailValue: payload.trim() };
  if (type === "message") return { ...state, messageValue: payload };
  if (type === "reset") return { nameValue: "", mailValue: "", messageValue: "" };

  return state;
};

export default formReducer;

export type { IReducerState };
