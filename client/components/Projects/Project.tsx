import * as Type from "../../types/mainType";
import Header from "../common/Header";
import styles from "./project.module.scss";
import Image from "next/image";

const Project = ({ project }: { project: Type.Project }) => {
  return (
    <main className="bright">
      <div className={styles.mainContainer}>
        <Header right={null} />
        <div className={styles.container}>
          <div className={styles.imgContainer}>
            <Image
              src="/assets/image.png"
              width={800}
              height={600}
              alt="project"
            />
          </div>
          <div className={styles.contentContainer}>
            <h1>{project.title}</h1>
            <h2>{project.subTitle}</h2>
            <div>
              <div className={styles.textContainer}>
                <div className={styles.description}>{project.description}</div>
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
        </div>
      </div>
    </main>
  );
};

export default Project;
