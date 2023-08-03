import Education from "@/components/main/education";

type Props = {};

const Main = ({}: Props) => {
  return (
    <div className="h-screen bg-purple-300 snap-mandatory scroll-smooth overflow-y-auto">
        <Education/>
    </div>
  );
};

export default Main;
