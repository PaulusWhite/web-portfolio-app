import { FormEvent, useState, useContext } from "react";
import { createPortal } from "react-dom";

import style from "./../../../styles/modules/contacts/form.module.scss";

//components
import Button from "@/components/common/Button";
import PopupPortal from "./PopupPortal";
import InputField from "./InputField";

//context
import { LoaderContext } from "@/context/LoaderContextProvider";
import { FormContext } from "@/context/FormContextProvider";

//interfaces
import { IValidationResult, IFormData } from "@/scripts/formValidations";
import { IPostRequestBody } from "@/interfaces/IPostMessageByEmail";
import { IResponseData } from "@/interfaces/IPostMessageByEmail";
import { ILoaderContext } from "@/context/LoaderContextProvider";
import { IFormContext } from "@/context/FormContextProvider";

//scripts
import { isFormDataValid } from "@/scripts/formValidations";

const Form = () => {
  const { setIsSpinnerLoading } = useContext(LoaderContext) as ILoaderContext;
  const { nameValue, emailValue, messageValue, changeValue } = useContext(
    FormContext,
  ) as IFormContext;

  const [isPopupMessage, setPopupMessage] = useState<boolean>(false);
  const [errorsArr, setErrors] = useState<false | string[]>(false);
  const [successMessage, setSuccessMessage] = useState<false | string>(false);

  const submitForm = async (e: FormEvent) => {
    e.preventDefault();

    const formData: IFormData = {
      nameValue,
      emailValue,
      messageValue,
    };

    const validationData: IValidationResult = isFormDataValid(formData);
    const { isValid, errors } = validationData;

    if (!isValid) {
      setErrors(errors as string[]);
      setPopupMessage(true);
      return;
    }

    setIsSpinnerLoading(true);

    const requestBody: IPostRequestBody = {
      name: nameValue,
      email: emailValue,
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
    changeValue("reset", "");
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
          <InputField
            type="name"
            value={nameValue}
            placeholder="Your Name"
            changeValue={changeValue}
          />
          <InputField
            type="email"
            value={emailValue}
            placeholder="Your Email"
            changeValue={changeValue}
          />
          <InputField
            type="message"
            value={messageValue}
            placeholder="Your Message"
            changeValue={changeValue}
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
