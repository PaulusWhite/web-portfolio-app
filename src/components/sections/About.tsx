"use client";

import { useEffect, useRef } from "react";

import style from "./../../styles/modules/about.module.scss";
import Image from "next/image";

//Images
import photo from "./../../../public/photo.jpg";

//Scripts
import setAscentEffect from "@/scripts/startAnimations/setAscentEffect";
import setFallEffect from "@/scripts/startAnimations/setFallEffect";

const About = () => {
  const speechRef = useRef(null);
  const photoFrameRef = useRef(null);

  useEffect(() => {
    const speechBlock: HTMLDivElement = speechRef.current!;
    const photoFrameNode: HTMLElement = photoFrameRef.current!;

    setAscentEffect(Array.from(speechBlock.children));
    setFallEffect(photoFrameNode);
  }, []);

  return (
    <div className={style.about}>
      <div className={style.speech} ref={speechRef}>
        <p>Glad to see you at my digital place!</p>

        <p>I'm Paul and I've been involved in front-end development more than 1.5 years.</p>
        <p>
          I spend my time on specializing in building complex web applications with up-to-date
          technologies to create the best user experience.
        </p>
        <p>One of the main credos of mine is do what you love and do it with love.</p>
        <p>
          Nowadays I'm looking for my first job in cohesive team where any puzzle will be solved.
        </p>
      </div>

      <div className={style["photo-frame"]} ref={photoFrameRef}>
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
