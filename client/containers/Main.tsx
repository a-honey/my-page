import About from "../components/about";
import Skills from "../components/skills";
import * as Type from "../types/mainType";
import Intro from "@/components/intro";
import Description from "@/components/description";
import Blank from "@/components/common/Blank";
import Project from "@/components/Projects/Project";

export type Props = {
  about: Type.About;
  intro: Type.Intro;
  skills: Type.Skills;
  projects: Type.Projects;
};

const Main = ({ importData }: { importData: Props }) => {
  return (
    <main>
      <div>
        <Intro /> <About about={importData.about} intro={importData.intro} />
        <Description />
        <Skills skills={importData.skills} /> <Blank content="project" />
        <Project project={importData.projects[0]} />
        <Project project={importData.projects[1]} />
        <Blank content="Thank you" />
      </div>
    </main>
  );
};

export default Main;
