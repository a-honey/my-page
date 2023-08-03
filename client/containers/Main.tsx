import About from "@/components/main/about";
import Education from "@/components/main/education";
import Start from "@/components/main/start";

type Props = {};

const Main = ({}: Props) => {
  return (
    <div className="h-screen bg-purple-300 snap-y snap-mandatory scroll-smooth overflow-y-auto">
      <Start/>
      <About/>
      <Education/>
    </div>
  );
};

export default Main;
