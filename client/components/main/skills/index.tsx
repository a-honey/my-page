import * as Type from "../../../types/mainType";
import styles from "./skills.module.sass";

const Skills = ({skills}: {skills: Type.Skills | null}) => {
  return (
    <div className="main-container">
      <h1 className="main-name">skills</h1>
      <div className={styles.contentContainer}>
        <div className={styles.itemContainer}>
          <h2>Frontend</h2>
          <ul>
            <li>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JS</li>
              </ul>
            </li>
            <li>Styled Component</li>
            <li>TailwindCSS</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>Nest.js</li>
          </ul>
        </div>
        <div className={styles.itemContainer}>
          <h2>Backend</h2>
          <ul>
            <li>Python</li>
            <li>MongoDB</li>
            <li>MySQL</li>
          </ul>
        </div>
        <div className={styles.itemContainer}>
          <h2>Version Control</h2>
          <ul>
            <li>git</li>
            <li>GitHub</li>
            <li>GitLab</li>
          </ul>
        </div>
        <div className={styles.itemContainer}>
          <h2>Communication</h2>
          <ul>
            <li>Figma</li>
          </ul>
        </div>
        <div className={styles.itemContainer}>
          <h2>Certificate</h2>
          <ul>
            <li>자격증없음</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
