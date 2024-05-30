import style from "./../styles/modules/greeting.module.scss";

import Image from "next/image";

import photo from "./../../public/photo.jpg";

const Greeting = () => (
  <section className={style.greeting}>
    <div className={style.speech}>
      <h1>Glad to see you at my digital place</h1>

      <p>Hi, I'm Paul. I've been involved in front-end development more than 1.5 years.</p>
      <p>
        I spend my time on specializing in building complex web applications with up-to-date tools
        to create the best user experience.
      </p>
      <p>One of the main credos of mine is do what you love and do it with love.</p>
      <p>Nowadays I'm looking for my first job in cohesive team where any puzzle will be solved.</p>
    </div>

    <div className={style["photo-frame"]}>
      <Image
        src={photo.src}
        alt="my-photo"
        width={350}
        height={350}
        priority={true}
        quality={100}
      />
    </div>
  </section>
);

export default Greeting;
