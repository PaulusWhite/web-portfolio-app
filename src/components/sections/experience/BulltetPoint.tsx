import style from "./../../../styles/modules/experience/bulletPoint.module.scss";

interface IBulletPointProps {
  description: string;
}

const BulletPoint = (props: IBulletPointProps) => (
  <li className={style["bullet-point"]}>{props.description}</li>
);

export default BulletPoint;
