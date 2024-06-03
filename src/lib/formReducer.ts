//scripts
import { isInputValueValid } from "@/scripts/formValidations";

interface IReducerState {
  nameValue: string;
  mailValue: string;
  messageValue: string;
}

interface IAction {
  type: "name" | "mail" | "message";
  payload: string;
}

const formReducer = (state: IReducerState, action: IAction) => {
  const { type } = action;
  const payload = action.payload === " " ? "" : action.payload;

  if (type === "name" && isInputValueValid(payload as string))
    return { ...state, nameValue: payload };
  if (type === "mail" && isInputValueValid(payload as string))
    return { ...state, mailValue: payload };
  if (type === "message") return { ...state, messageValue: payload };

  return state;
};

export default formReducer;

export type { IReducerState };
