import Image from "next/image";
import * as Type from "../../../types/mainType";
import styles from "./skills.module.sass";

const Skills = ({ skills }: { skills: Type.Skills | null }) => {
  return (
    <div className="main-container" id="skills">
      <h1 className="main-name">skills</h1>
      <div className={styles.contentContainer}>
        <div className={`${styles.itemContainer} ${styles.front}`}>
          <h2>Frontend</h2>
          <Image
            src="/assets/fronts.svg"
            alt="front"
            width={240}
            height={600}
          />
        </div>
        <div className={`${styles.itemContainer} ${styles.back}`}>
          <h2>Backend</h2>
          <Image src="/assets/backs.svg" alt="front" width={240} height={600} />
        </div>
        <div className={`${styles.itemContainer} ${styles.communication}`}>
          <h2>Communication</h2>
          <Image
            src="/assets/developments.svg"
            alt="front"
            width={240}
            height={600}
          />
        </div>
        <div className={`${styles.itemContainer} ${styles.version}`}>
          <h2>Version Control</h2>
          <Image
            src="/assets/version.svg"
            alt="front"
            width={240}
            height={600}
          />
        </div>
        <div className={`${styles.itemContainer} ${styles.certificate}`}>
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
