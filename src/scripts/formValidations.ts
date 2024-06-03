const MAX_INPUT_LENGTH: number = 80;
const EMAIL_REGEXP =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

const isInputValueValid = (value: string) => value.length < MAX_INPUT_LENGTH;

const isMailInputValid = (value: string): boolean => {
  return EMAIL_REGEXP.test(value) || value.length > MAX_INPUT_LENGTH;
};

export { isInputValueValid, isMailInputValid };
