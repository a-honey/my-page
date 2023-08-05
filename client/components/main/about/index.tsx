import Nav from "./Nav";
import styles from "./index.module.css";

const About = () => {
  return (
    <div className="main-container">
      <div className={styles.firstBlock}>
        <h1>안녕하세요. 프론트엔드 개발자 정아현입니다.</h1>
        <h2>
          일단 도전하며 배우고, 실수를 잡아가면서 열심히 공부하고 있습니다.
        </h2>
        <h3>Good Luck with Your Coding Journey :D</h3>
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
                <div>정아현</div>
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
