import Nav from "./Nav";
import * as Type from "../../../types/mainType";
import styles from "./index.module.css";

const About = ({about, intro}:{ about: Type.About|null; intro:Type.Intro|null }) => {
  return (
    <div className="main-container">
      <div className={styles.firstBlock}>
        <h1>{intro?.greet}</h1>
        <h2>
          {intro?.subGreet}
        </h2>
        <h3>{intro?.message}</h3>
        <Nav />
      </div>
      <div className={styles.secondBlock}>
        <h1 className="main-name">about me</h1>
        <div className={styles.contentContainer}>
          <div className={styles.imgContainer}>이미지</div>
          <ul className={styles.textListConainer}>
            <li className={styles.textItemContainer}>
              <div>아이콘</div>
              <div className={styles.textContainer}>
                <div>이름</div>
                <div>{about?.name}</div>
              </div>
            </li>
            <li className={styles.textItemContainer}>
              <div>아이콘</div>
              <div className={styles.textContainer}>
                <div>생년월일</div>
                <div>정아현</div>
              </div>
            </li>
            <li className={styles.textItemContainer}>
              <div>아이콘</div>
              <div className={styles.textContainer}>
                <div>주소지</div>
                <div>정아현</div>
              </div>
            </li>
            <li className={styles.textItemContainer}>
              <div>아이콘</div>
              <div className={styles.textContainer}>
                <div>연락처</div>
                <div>정아현</div>
              </div>
            </li>
            <li className={styles.textItemContainer}>
              <div>아이콘</div>
              <div className={styles.textContainer}>
                <div>이메일</div>
                <div>정아현</div>
              </div>
            </li>
            <li className={styles.textItemContainer}>
              <div>아이콘</div>
              <div className={styles.textContainer}>
                <div>학력</div>
                <div>정아현</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
