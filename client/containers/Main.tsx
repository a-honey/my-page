import Projects from "../components/Projects/index";
import About from "../components/about";
import Skills from "../components/skills";
import { data } from "../public/data/main";
import * as Type from "../types/mainType";
import { useEffect, useState } from "react";
import Contact from "../components/contact/Contact";
import Intro from "@/components/intro";

export type Props = {
  about: Type.About;
  intro: Type.Intro;
  skills: Type.Skills;
  projects: Type.Projects;
};

const Main = ({ importData }: { importData: Props }) => {
  const components = ["intro", "about", "skills", "projects", "contact"]; // 컴포넌트 목록 배열
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
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("scroll", handleScroll);
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
    case "about":
      currentContent = (
        <About about={importData.about} intro={importData.intro} />
      );
      break;
    case "skills":
      currentContent = <Skills skills={importData.skills} />;
      break;
    case "projects":
      currentContent = <Projects projects={importData.projects} />;
      break;
    case "contact":
      currentContent = <Contact />;
      break;
    default:
      currentContent = null;
  }

  return <main>{currentContent}</main>;
};

export default Main;
