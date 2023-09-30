import Contact from "../common/Contact";
import styles from "./index.module.scss";

const Intro = () => {
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.center}>
          <h1>Ahyeon, Jung</h1>
          <h2>The front-end developer</h2>
        </div>
        <div className={styles.right}>
          <div>Welcome to My Protfolio</div>
        </div>
        <Contact />
      </div>
    </section>
  );
};

export default Intro;
