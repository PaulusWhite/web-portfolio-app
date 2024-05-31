import style from "./../../../styles/modules/contacts/contactItem.module.scss";

import Image from "next/image";

interface IContactItemProps {
  logo: string;
  link: string;
}

const ContactItem = (props: IContactItemProps) => (
  <li>
    <a href={props.link} className={style["contact-item"]}>
      <Image src="" width={40} height={40} alt="contact-icon" />
    </a>
  </li>
);

export default ContactItem;
