import Projects from "@/components/main/projects";
import About from "@/components/main/about";
import Skills from "@/components/main/skills";
import Footer from "@/components/common/Footer";
import * as Type from "../types/mainType";
import { useEffect, useState } from "react";
import Contact from "@/components/main/contact/Contact";

type Props = {};

const Main = ({}: Props) => {
  const [ isFetching, setIsFetching ] = useState(false);
  const [intro, setIntro] = useState<Type.Intro | null>(null);
  const [about, setAbout] = useState<Type.About | null>(null);
  const [skills, setSkills] = useState<Type.Skills | null>(null);
  const [projects, setProjects] = useState<Type.Projects | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsFetching(true);
        const res = await fetch("/data/main.json");
        const data = await res.json();
        console.log('나는 콘솔');
        console.log(data);
        setIntro(data.intro);
        setAbout(data.about);
        setProjects(data.projects);
        setSkills(data.skills); 
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsFetching(false);
      }
    }

    fetchData();
  },[])

  if (!isFetching) {
    <div>Loading...</div>;
  }

  return (
    <div className="h-screen snap-y snap-mandatory scroll-smooth overflow-y-auto">
      <About about={about} intro={intro} />
      <Skills skills={skills}/>
      <Projects projects={projects}/>
      <Contact />
    </div>
  );
};

export default Main;
