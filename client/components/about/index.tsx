import Image from "next/image";
import * as Type from "../../types/mainType";
import styles from "./index.module.scss";
import Contact from "../common/Contact";
import Circle from "../common/Circle";

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
          <Image
            src="/assets/profile.jpg"
            alt="front"
            width={300}
            height={600}
          />
          <h1>Ahyeon, Jung</h1>
          <ul>
            <li key="first">사용자의 입장에서 즐거운 경험을 추구합니다</li>
            <li key="second">서비스의 쓸모를 생각합니다</li>
            <li key="third">코드가 나아갈 방향을 고민합니다</li>
          </ul>
          <Contact />
        </div>
        <div className={styles.contentContainer}>
          <Circle />
          <h1 className="main-name">about me</h1>
          <div className={styles.content}>
            <ul>
              <li>
                <ul>
                  <h2>Education</h2>
                  <li key="elice">
                    <span>2023.04 - 2023.11</span> Elice AI 트랙 8기
                  </li>
                  <li key="univ">
                    <span>2020.03 - 휴학중</span>경희대학교
                    글로벌커뮤니케이션학부 입학
                  </li>
                  <li key="highschool">
                    <span>2017.03 - 2020.02</span>대원여자고등학교 졸업
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <h2>Work</h2>
                  <li key="company">
                    <span>2023.01 - 2023.03</span>중소벤처기업진흥공단 사무보조
                  </li>
                  <li key="subway">
                    <span>2022.07 - 2023.01</span>Subway Middle Manager
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <h2>Award</h2>
                  <li key="first">
                    <span>2025.02</span>경희대학교 글로벌커뮤니케이션학부 졸업
                  </li>
                  <li key="second">
                    <span>2020.02</span>대원여자고등학교 졸업
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <h2>Certification</h2>
                  <li key="first">
                    <span>2025.02</span>경희대학교 글로벌커뮤니케이션학부 졸업
                  </li>
                  <li key="second">
                    <span>2020.02</span>대원여자고등학교 졸업
                  </li>
                  <li key="second">
                    <span>2020.02</span>대원여자고등학교 졸업
                  </li>
                  <li key="second">
                    <span>2020.02</span>대원여자고등학교 졸업
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
