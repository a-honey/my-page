import Image from "next/image";
import * as Type from "../../types/mainType";
import styles from "./index.module.scss";
import Contact from "../common/Contact";

const About = ({
  about,
  intro,
}: {
  about: Type.About | null;
  intro: Type.Intro | null;
}) => {
  return (
    <main className="bright">
      <div className={styles.container}>
        <div className={styles.profile}>
          <div>사진</div>
          <div>프론트엔드 개발자 정아현입니다.</div>
          <div>2001.05.12</div>
          <Contact />
        </div>
        <div className={styles.secondBlock}>
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
    </main>
  );
};

export default About;
