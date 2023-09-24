import Image from "next/image";
import * as Type from "../../types/mainType";
import styles from "./skills.module.sass";

const Skills = ({ skills }: { skills: Type.Skills | null }) => {
  return (
    <main>
      <div className={styles.contentContainer}>
        <div className={`${styles.itemContainer} ${styles.front}`}>
          <Image
            src="/assets/fronts.svg"
            alt="front"
            width={300}
            height={600}
          />
        </div>
        <div className={`${styles.itemContainer} ${styles.back}`}>
          <Image src="/assets/backs.svg" alt="front" width={240} height={600} />
        </div>
        <div className={`${styles.itemContainer} ${styles.communication}`}>
          <Image
            src="/assets/developments.svg"
            alt="front"
            width={240}
            height={600}
          />
        </div>
        <div className={`${styles.itemContainer} ${styles.version}`}>
          <Image
            src="/assets/version.svg"
            alt="front"
            width={240}
            height={600}
          />
        </div>
        <div className={`${styles.itemContainer} ${styles.certificate}`}>
          <ul>
            {skills?.certificate ? (
              skills.certificate.map((skill) => (
                <li key={skill.name}>{skill.name}</li>
              ))
            ) : (
              <li>자격증 없음</li>
            )}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Skills;
