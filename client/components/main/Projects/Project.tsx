import * as Type from "../../../types/mainType";
import styles from "./project.module.scss";

const Project = ({
  project,
  setIndex,
}: {
  project: Type.Project;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <div className={styles.contentContainer}>
      <h1>{project.title}</h1>
      <h2>{project.subTitle}</h2>
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <img src="/assets/image.png" alt="project" />
        </div>
        <div className={styles.textContainer}>
          <p>{project.description}</p>
          <ul>
            <li>
              <label>주요 기능</label>
              <div>{project.featuresDescription}</div>
            </li>
            <li>
              <label>역할</label>
              <div>{project.role}</div>
            </li>
            <li>
              <label>스택</label>
              <div>{project.stack}</div>
            </li>
            <li>
              <a href={project.projectRepository}>프로젝트 둘러보기</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Project;
