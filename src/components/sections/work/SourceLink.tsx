import Image from "next/image";

import style from "./../../../styles/modules/work/sourceLink.module.scss";

interface ISourceLinkProps {
  link: string;
  type: "Website" | "Github";
}

const SourceLink = (props: ISourceLinkProps) => {
  const { link, type } = props;
  const imgPath = type === "Website" ? "/website.svg" : "/contacts/github.svg";

  return (
    <div className={style["source-link"]}>
      <div className={style["label"]}>
        <Image src={imgPath} alt="source image icon" width={30} height={30} />
        <h3>{type}</h3>
      </div>

      <a href={link} target="_blank">
        {link}
      </a>
    </div>
  );
};

export default SourceLink;
