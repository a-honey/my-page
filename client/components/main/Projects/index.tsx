import Project from "./Project";
import * as Type from "../../../types/mainType";
import { useState } from "react";


const Projects = ({projects}: {projects: Type.Projects | null}) => {
  const [ currentProjectIndex, setCurrentProjectIndex ] = useState(0);

  return (
    <div className="main-container" id="projects">
      <h1 className="main-name">Projects</h1>
      {projects && <Project project={projects[currentProjectIndex]} setIndex={setCurrentProjectIndex}/>}
    </div>
  );
};

export default Projects;
