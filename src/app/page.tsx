"use client";
import { useContext, useEffect } from "react";
import { LoaderContext } from "./ContextProvider";
import { ILoaderContext } from "@/interfaces/IContext";

//Components
import Section from "@/components/common/Section";
import About from "@/components/sections/About";
import Experience from "@/components/sections/experience/Experience";
import Skills from "@/components/sections/skills/Skills";
import Work from "@/components/sections/work/Work";
import Contacts from "@/components/sections/contacts/Contacts";

const Main = () => {
  const { setIsLoading } = useContext(LoaderContext) as ILoaderContext;

  useEffect(() => {
    setIsLoading(false);
  }, []);
  return (
    <main>
      <Section index={1} label="About me" id="about" content={<About />} />
      <Section index={2} label="Skills" id="skills" content={<Skills />} />
      <Section index={3} label="Experience" id="experience" content={<Experience />} />
      <Section index={4} label="Work" id="work" content={<Work />} />
      <Section index={5} label="Contacts" id="contacts" content={<Contacts />} />
    </main>
  );
};

export default Main;
