import Image from "next/image";
import * as Type from "../../types/mainType";
import styles from "./index.module.css";

const About = ({
  about,
  intro,
}: {
  about: Type.About | null;
  intro: Type.Intro | null;
}) => {
  return (
    <div className="main-container">
      <div className={styles.firstBlock} id="intro">
        <h1>{intro?.greet}</h1>
        <h2>{intro?.subGreet}</h2>
        <h3>{intro?.message}</h3>
      </div>
      <div className={styles.secondBlock} id="about">
        <h1 className="main-name">about me</h1>
        <div className={styles.contentContainer}>
          <ul className={styles.textListContainer}>
            <li className={styles.textItemContainer}>
              <div className={styles.textContainer}>
                <div>이름</div>
                <div>{about?.name}</div>
              </div>
            </li>
            <li className={styles.textItemContainer}>
              <div className={styles.textContainer}>
                <div>생년월일</div>
                <div>{about?.birthdate}</div>
              </div>
            </li>
            <li className={styles.textItemContainer}>
              <div className={styles.textContainer}>
                <div>주소지</div>
                <div>{about?.address}</div>
              </div>
            </li>
            <li className={styles.textItemContainer}>
              <div className={styles.textContainer}>
                <div>연락처</div>
                <div>{about?.tel}</div>
              </div>
            </li>
            <li className={styles.textItemContainer}>
              <div className={styles.textContainer}>
                <div>이메일</div>
                <div>{about?.email}</div>
              </div>
            </li>
            <li className={styles.textItemContainer}>
              <div className={styles.textContainer}>
                <div>학력</div>
                <div>{about?.education}</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
