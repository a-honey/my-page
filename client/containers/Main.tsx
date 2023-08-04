import Projects from "@/components/main/projects";
import About from "@/components/main/about";
import Skills from "@/components/main/skills";

type Props = {};

const Main = ({}: Props) => {
  return (
    <div className="h-screen bg-purple-300 snap-y snap-mandatory scroll-smooth overflow-y-auto">
      <About/>
      <Skills/>
      <Projects/>
    </div>
  );
};

export default Main;
