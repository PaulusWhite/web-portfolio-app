import Image from "next/image";

import style from "./../../../styles/modules/work/commingProjectCardItem.module.scss";

const CommingProjectCardItem = () => {
  return (
    <div className={`${style["comming-project"]} fallInit`}>
      <Image src="/coding.jpg" fill={true} alt="coding" sizes="100%" />
      <div className={style.veil}></div>
      <p className={style.notice}>Comming soon</p>
    </div>
  );
};

export default CommingProjectCardItem;
