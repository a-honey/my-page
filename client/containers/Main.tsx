import Projects from "@/components/main/projects";
import About from "@/components/main/about";
import Skills from "@/components/main/skills";
import Footer from "@/components/common/Footer";

type Props = {};

const Main = ({}: Props) => {
  return (
    <div className="h-screen bg-orange-500 snap-y snap-mandatory scroll-smooth overflow-y-auto">
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
};

export default Main;
