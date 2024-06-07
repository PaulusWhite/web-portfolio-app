import Image from "next/image";

import style from "./../../../styles/modules/contacts/contactItem.module.scss";

interface IContactItemProps {
  logo: string;
  link: string;
}

const ContactItem = (props: IContactItemProps) => (
  <li className={style["contact-item"]}>
    <a href={props.link} className={style["contact-item"]} target="_blank">
      <Image src={props.logo} width={50} height={50} alt="contact-icon" />
    </a>
  </li>
);

export default ContactItem;
