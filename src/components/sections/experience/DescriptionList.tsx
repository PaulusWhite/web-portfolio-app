import style from "./../../../styles/modules/experience/description.module.scss";

//components
import BulletPoint from "./BulltetPoint";

//interfaces
import { IDataDescItem } from "@/interfaces/IData";

interface IDescriptionListProps {
  title: string;
  duration: string;
  logo: string;
  list: IDataDescItem[];
}

const DescriptionList = (props: IDescriptionListProps) => {
  const { title, duration, logo, list } = props;

  return (
    <div className={style.description}>
      <h3>{title}</h3>
      <p>{duration}</p>

      <ul>
        {list.map((descItem: IDataDescItem) => (
          <BulletPoint key={descItem.id} description={descItem.desc} />
        ))}
      </ul>
    </div>
  );
};

export default DescriptionList;
