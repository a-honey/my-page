import Project from "./Project";
import * as Type from "../../../types/mainType";


const Projects = ({projects}: {projects: Type.Projects | null}) => {
  return (
    <div className="main-container" id="projects">
      <h1 className="main-name">Projects</h1>
      <Project />
    </div>
  );
};

export default Projects;
