import Projects from "@/components/main/projects";
import About from "@/components/main/about";
import Skills from "@/components/main/skills";
import Contact from "@/components/main/contact/Contact";

import * as Type from "../types/mainType";

export type DataProps = {
  intro: Type.Intro | null;
  about: Type.About | null;
  skills: Type.Skills | null;
  projects: Type.Projects | null;
};

const Main = ({ data }: { data: DataProps }) => {
  if (!data) {
    return <div>Error loading data.</div>;
  }
  return (
    <div
      className={`snap-y snap-mandatory scroll-smooth h-screen overflow-y-auto`}
    >
      <About about={data.about} intro={data.intro} />
      <Skills skills={data.skills} />
      <Projects projects={data.projects} />
      <Contact />
    </div>
  );
};

export default Main;
