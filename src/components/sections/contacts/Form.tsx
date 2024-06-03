import { useEffect, useRef } from "react";

import style from "./../../../styles/modules/contacts/form.module.scss";

//components
import Button from "@/components/common/Button";

//scripts
import setUnrollEffect from "@/scripts/startAnimations/setUnrollEffect";

const Form = () => {
  const formRef = useRef(null);

  useEffect(() => {
    const formNode: HTMLFormElement = formRef.current!;
    setUnrollEffect(formNode);
  }, []);

  return (
    <form className={style.form} ref={formRef} onSubmit={(e) => e.preventDefault()}>
      <h3>Write me a letter</h3>

      <input type="text" placeholder="You Name" />
      <input type="email" placeholder="You Email" />

      <textarea rows={10} placeholder="Your Message" />

      <Button>Get in touch</Button>
    </form>
  );
};

export default Form;
