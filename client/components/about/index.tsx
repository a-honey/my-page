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
            <li key="second">서비스의 목적을 생각합니다</li>
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
                    <span>2023.04 - 2023.11</span> 엘리스 AI 트랙 8기 수료
                  </li>
                  <li key="univ">
                    <span>2020.03 - </span>경희대학교 글로벌커뮤니케이션학부
                    입학
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
                    <span>2022.07 - 2023.01</span>써브웨이 미들 매니저
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <h2>Activity</h2>
                  <li key="first">
                    <span>2020.09 - 2022.12</span>교내 자치기구 편집부장 및
                    영어기사 작성
                  </li>
                  <li key="second">
                    <span>2017.05 - 2021.12</span>난민교육후원회 영어동화번역
                    봉사단
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <h2>Certification</h2>
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
