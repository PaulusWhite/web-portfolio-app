"use client";

import { useEffect, useRef } from "react";

//style
import style from "./../../../styles/modules/contacts/contacts.module.scss";

//Icons
import githubIcon from "./../../../../public/contacts/github.svg";
import inIcon from "./../../../../public/contacts/in.svg";

//components
import ContactItem from "./ContactItem";
import Form from "./Form";

//scripts
import setAscentEffect from "@/scripts/startAnimations/setAscentEffect";

const Contacts = () => {
  const textRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    const textBlock: HTMLDivElement = textRef.current!;
    const footerNode: HTMLDivElement = footerRef.current!;

    setAscentEffect([...Array.from(textBlock.children), footerNode]);
  }, []);

  return (
    <div className={style.contacts}>
      <div className={style["form-field"]}>
        <Form />

        <div className={style.text} ref={textRef}>
          <p>
            Do you have any questions about me or any kind of propositions? Please, get in touch
            with me!
          </p>
          <p>
            Also if you have some remarks or you've found some mistakes in my work, I always welcome
            constructive criticism.
          </p>
          <p>Have you already sent a message to me? I will answer in the shortest time.</p>
        </div>
      </div>

      <footer ref={footerRef}>
        <ul className={style["contacts-list"]}>
          <ContactItem logo={inIcon.src} link="https://www.linkedin.com/in/exactlypaul/" />
          <ContactItem logo={githubIcon.src} link="https://github.com/PaulusWhite" />
        </ul>
        <p className={style.inbox}>
          My inbox: <a href="mailto:exactlypaulus@gmail.com">exactlypaulus@gmail.com</a>
        </p>
      </footer>
    </div>
  );
};

export default Contacts;
