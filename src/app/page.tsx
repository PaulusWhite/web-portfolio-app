//Components
import Section from "@/components/common/Section";
import About from "@/components/sections/About";
import Experience from "@/components/sections/experience/Experience";

const Main = () => {
  return (
    <main>
      <Section index={1} label="About me" content={<About />} />
      {/* <Experience /> */}
    </main>
  );
};

export default Main;
