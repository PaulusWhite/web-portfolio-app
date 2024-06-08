interface IFormData {
  nameValue: string;
  emailValue: string;
  messageValue: string;
}

interface IValidationResult {
  isValid: boolean;
  errors?: string[];
}
const COMMON_ERROR_TEXT: string = "You did not enter your";
const MAX_INPUT_LENGTH: number = 80;
const EMAIL_REGEXP =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

const isInputValueValid = (value: string) => value.length < MAX_INPUT_LENGTH;

const isMailInputValid = (value: string): boolean => {
  return EMAIL_REGEXP.test(value) || value.length > MAX_INPUT_LENGTH;
};

const isFormDataValid = (data: IFormData): IValidationResult => {
  const errors: string[] = [];
  const { nameValue, emailValue, messageValue } = data;

  if (!nameValue.length) errors.push(`${COMMON_ERROR_TEXT} name`);
  if (emailValue && !isMailInputValid(emailValue.trim()))
    errors.push("Email you entered is not correct");
  if (!emailValue.length) errors.push(`${COMMON_ERROR_TEXT} mail`);
  if (!messageValue.length) errors.push(`${COMMON_ERROR_TEXT} message`);

  return !errors.length ? { isValid: true } : { isValid: false, errors };
};

export { isInputValueValid, isMailInputValid, isFormDataValid };
export type { IValidationResult, IFormData };
