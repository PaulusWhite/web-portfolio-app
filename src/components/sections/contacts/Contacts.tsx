import style from "./../../../styles/modules/contacts/contacts.module.scss";

//Icons
import githubIcon from "./../../../../public/contacts/github.svg";
import inIcon from "./../../../../public/contacts/in.svg";

//components
import ContactItem from "./ContactItem";

const Contacts = () => (
  <div className={style.contacts}>
    <div className={style["form-field"]}>
      <form>
        <h3>Write me a letter</h3>

        <input type="text" />
        <input type="email" />

        <textarea rows={10} />

        <button type="submit">Get in touch</button>
      </form>

      <div className={style.text}>
        <p>
          Do you have any questions about me or any kind of propositions? Please get in touch with
          me!
        </p>
        <p>
          Also if you have some remarks or you've found some mistakes in my work so then I always
          welcome constructive criticism.
        </p>
        <p>Have you already sent a message to me? I will answer in the shortest time.</p>
        <p>
          My inbox: <a href="mailto:exactlypaulus@gmail.com">exactlypaulus@gmail.com</a>
        </p>
      </div>
    </div>

    <footer>
      <ul className={style["contacts-list"]}>
        <ContactItem logo={inIcon.src} link="https://www.linkedin.com/in/exactlypaul/" />
        <ContactItem logo={githubIcon.src} link="https://github.com/PaulusWhite" />
      </ul>
      <button className={style["top-btn"]}>Back to top</button>
    </footer>
  </div>
);

export default Contacts;
