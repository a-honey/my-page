import Projects from "@/components/main/projects";
import About from "@/components/main/about";
import Skills from "@/components/main/skills";
import * as Type from "../types/mainType";

export type Props = {
  about: Type.About;
  intro: Type.Intro;
  skills: Type.Skills;
  projects: Type.Projects;
};

const Main = ({ importData }: { importData: Props }) => {
  return (
    <div className={`snap-y snap-mandatory scroll-smooth`}>
      <About about={importData.about} intro={importData.intro} />
      <Skills skills={importData.skills} />
      <Projects projects={importData.projects} />
    </div>
  );
};

export default Main;
