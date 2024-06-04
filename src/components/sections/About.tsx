"use client";

import style from "./../../styles/modules/about.module.scss";
import Image from "next/image";

//Images
import photo from "./../../../public/photo.jpg";

const About = () => {
  return (
    <div className={style.about}>
      <div className={style.speech}>
        <p className="ascentInit">Glad to see you at my digital place!</p>

        <p className="ascentInit">
          I'm Paul and I've been involved in front-end development more than 1.5 years.
        </p>
        <p className="ascentInit">
          I spend my time on specializing in building complex web applications with up-to-date
          technologies to create the best user experience.
        </p>
        <p className="ascentInit">
          One of the main credos of mine is do what you love and do it with love.
        </p>
        <p className="ascentInit">
          Nowadays I'm looking for my first job in cohesive team where any puzzle will be solved.
        </p>
      </div>

      <div className={`${style["photo-frame"]} fallInit`}>
        <Image
          src={photo.src}
          alt="my-photo"
          fill={true}
          sizes="100%"
          priority={true}
          quality={85}
        />
      </div>
    </div>
  );
};

export default About;
