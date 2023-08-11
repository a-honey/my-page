import Projects from "../components/main/projects";
import About from "../components/main/about";
import Skills from "../components/main/skills";
import Footer from "../components/common/Footer";
import { data } from "../public/data/main";
import * as Type from "../types/mainType";
import { useEffect, useState } from "react";
import Contact from "../components/main/contact/Contact";

export type Props = {
  about: Type.About;
  intro: Type.Intro;
  skills: Type.Skills;
  projects: Type.Projects;
};

const Main = ({ importData }: { importData: Props }) => {
  return (
    <div
      className={`snap-y snap-mandatory scroll-smooth h-screen overflow-y-auto`}
    >
      <About about={importData.about} intro={importData.intro} />
      <Skills skills={importData.skills} />
      <Projects projects={importData.projects} />
      <Contact />
    </div>
  );
};

export default Main;
