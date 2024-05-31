//Components
import Section from "@/components/common/Section";
import About from "@/components/sections/About";
import Experience from "@/components/sections/experience/Experience";
import Skills from "@/components/sections/skills/Skills";

const Main = () => {
  return (
    <main>
      <Section index={1} label="About me" content={<About />} />
      <Section index={2} label="Experience" content={<Experience />} />
      <Section index={3} label="Skills" content={<Skills />} />
    </main>
  );
};

export default Main;
