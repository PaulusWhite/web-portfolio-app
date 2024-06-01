import style from "./../../../styles/modules/experience/description.module.scss";

//components
import BulletPoint from "./BulltetPoint";

//interfaces
import { IDataDescItem } from "@/interfaces/IData";

interface IDescriptionListProps {
  process: string;
  title: string;
  duration: string;
  link: string;
  list: IDataDescItem[];
}

const DescriptionList = (props: IDescriptionListProps) => {
  const { process, title, duration, list, link } = props;

  return (
    <div className={style.description}>
      <h3>
        {process}{" "}
        {process ? (
          <a className={style.link} href={link} target="blank">
            @{title}
          </a>
        ) : (
          title
        )}
      </h3>

      <p className={style.duration}>{duration}</p>

      <ul className={style.list}>
        {list.map((descItem: IDataDescItem) => (
          <BulletPoint key={descItem.id} description={descItem.desc} />
        ))}
      </ul>
    </div>
  );
};

export default DescriptionList;
