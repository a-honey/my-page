import About from "../components/about";
import Skills from "../components/skills";
import { data } from "../public/data/main";
import * as Type from "../types/mainType";
import { useEffect, useState } from "react";
import Contact from "../components/contact/Contact";
import Intro from "@/components/intro";
import Index from "@/components/Index";
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
  const components = [
    "intro",
    "index",
    "about",
    "description",
    "skills",
    "project",
    "project1",
    "project2",
    "finish",
  ]; // 컴포넌트 목록 배열
  const [currentComponentIndex, setCurrentComponentIndex] = useState(0);

  const moveToNextComponent = () => {
    // 다음 컴포넌트로 이동
    const nextIndex = (currentComponentIndex + 1) % components.length;
    setCurrentComponentIndex(nextIndex);
  };

  const moveToBeforeComponent = () => {
    // 이전 컴포넌트로 이동
    const beforeIndex = (currentComponentIndex - 1) % components.length;
    setCurrentComponentIndex(beforeIndex);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      moveToNextComponent();
    } else if (e.key === "ArrowLeft") {
      moveToBeforeComponent();
    }
  };

  const handleScroll = (e: Event) => {
    // 스크롤 이벤트를 감지하여 다음 컴포넌트로 이동
    moveToNextComponent();
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentComponentIndex]);

  // 현재 컴포넌트 인덱스를 사용하여 현재 표시할 컴포넌트 선택
  // 현재 컴포넌트 인덱스를 사용하여 현재 표시할 컴포넌트 선택
  const currentComponent = components[currentComponentIndex];

  // currentComponent에 따라 컴포넌트 렌더링
  let currentContent;
  switch (currentComponent) {
    case "intro":
      currentContent = <Intro />;
      break;
    case "index":
      currentContent = <Index />;
      break;
    case "about":
      currentContent = (
        <About about={importData.about} intro={importData.intro} />
      );
      break;
    case "description":
      currentContent = <Description />;
      break;
    case "skills":
      currentContent = <Skills skills={importData.skills} />;
      break;
    case "project":
      currentContent = <Blank content="project" />;
      break;
    case "project1":
      currentContent = <Project project={importData.projects[0]} />;
      break;
    case "project2":
      currentContent = <Project project={importData.projects[1]} />;
      break;
    case "finish":
      currentContent = <Blank content="Thank you" />;
      break;
    default:
      currentContent = null;
  }

  return <>{currentContent}</>;
};

export default Main;
