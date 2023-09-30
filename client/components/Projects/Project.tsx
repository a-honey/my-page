import * as Type from "../../types/mainType";
import Header from "../common/Header";
import styles from "./project.module.scss";
import Image from "next/image";

const Project = ({ project }: { project: Type.Project }) => {
  return (
    <section className="bright">
      <div className={styles.mainContainer}>
        <Header right={null} />
        <div className={styles.container}>
          <div className={styles.imgContainer}>
            <Image
              src={`/assets/${project.imgUrl}`}
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
                    {project.featuresDescription.map((feat) => (
                      <div key={feat}>{feat}</div>
                    ))}
                  </li>
                  <li>
                    <label>역할</label>
                    <div>{project.role}</div>
                  </li>
                  <li>
                    <label>스택</label>
                    <div className="stack">
                      {project.stack.map((el) => (
                        <span key={el}>{" " + el}</span>
                      ))}
                    </div>
                  </li>
                  <li>
                    <a href={project.projectRepository} target="_blank">
                      프로젝트 둘러보기
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
