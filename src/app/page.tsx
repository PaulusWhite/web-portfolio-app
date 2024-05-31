//Components
import Section from "@/components/common/Section";
import About from "@/components/sections/About";
import Experience from "@/components/sections/experience/Experience";
import Skills from "@/components/sections/skills/Skills";
import Work from "@/components/sections/work/Work";

const Main = () => {
  return (
    <main>
      <Section index={1} label="About me" content={<About />} />
      <Section index={2} label="Skills" content={<Skills />} />
      <Section index={3} label="Experience" content={<Experience />} />
      <Section index={4} label="Work" content={<Work />} />
    </main>
  );
};

export default Main;
