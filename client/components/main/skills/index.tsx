import * as Type from "../../../types/mainType";
import styles from "./skills.module.sass";

const Skills = ({ skills }: { skills: Type.Skills | null }) => {
  return (
    <div className="main-container" id="skills">
      <h1 className="main-name">skills</h1>
      <div className={styles.contentContainer}>
        <div className={styles.itemContainer}>
          <h2>Frontend</h2>
          <ul>
            {skills?.frontend.map((skill) => (
              <li>{skill.name}</li>
            ))}
          </ul>
        </div>
        <div className={styles.itemContainer}>
          <h2>Backend</h2>
          <ul>
            {skills?.backend.map((skill) => (
              <li>{skill.name}</li>
            ))}
          </ul>
        </div>
        <div className={styles.itemContainer}>
          <h2>Version Control</h2>
          <ul>
            {skills?.versionControl.map((skill) => (
              <li>{skill.name}</li>
            ))}
          </ul>
        </div>
        <div className={styles.itemContainer}>
          <h2>Communication</h2>
          <ul>
            {skills?.communication ? (
              skills.communication.map((skill) => <li>{skill.name}</li>)
            ) : (
              <li>협업도구 없음</li>
            )}
          </ul>
        </div>
        <div className={styles.itemContainer}>
          <h2>Certificate</h2>
          <ul>
            {skills?.certificate ? (
              skills.certificate.map((skill) => <li>{skill.name}</li>)
            ) : (
              <li>자격증 없음</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
