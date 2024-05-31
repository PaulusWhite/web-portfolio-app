interface IBulletPointProps {
  description: string;
}

const BulletPoint = (props: IBulletPointProps) => <li>{props.description}</li>;

export default BulletPoint;
