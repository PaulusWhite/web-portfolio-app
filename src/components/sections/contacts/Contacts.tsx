"use client";

//style
import style from "./../../../styles/modules/contacts/contacts.module.scss";

//Icons
import githubIcon from "./../../../../public/contacts/github.svg";
import inIcon from "./../../../../public/contacts/in.svg";
import resumeIcon from "./../../../../public/contacts/resume.svg";

//components
import ContactItem from "./ContactItem";
import Form from "./Form";

const Contacts = () => {
  return (
    <div className={style.contacts}>
      <div className={style["form-field"]}>
        <Form />

        <div className={style.text}>
          <p className="ascentInit">
            Do you have any questions about me or any kind of propositions? Please, get in touch
            with me!
          </p>
          <p className="ascentInit">
            Also if you have some remarks or you've found some mistakes in my work, I always welcome
            constructive criticism.
          </p>
          <p className="ascentInit">
            Have you already sent a message to me? I will answer in the shortest time.
          </p>
        </div>
      </div>

      <footer className="ascentInit">
        <ul className={style["contacts-list"]}>
          <ContactItem logo={inIcon.src} link="https://www.linkedin.com/in/exactlypaul/" />
          <ContactItem logo={githubIcon.src} link="https://github.com/PaulusWhite" />
          <ContactItem logo={resumeIcon.src} link="" />
        </ul>
        <p className={style.inbox}>
          My inbox: <a href="mailto:exactlypaulus@gmail.com">exactlypaulus@gmail.com</a>
        </p>
      </footer>
    </div>
  );
};

export default Contacts;
