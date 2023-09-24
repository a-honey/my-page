import styles from "./index.module.scss";

const Intro = () => {
  return (
    <div className={styles.container}>
      <div className={styles.center}>
        <h1>Ahyeon, Jung</h1>
        <h2>The front-end developer</h2>
      </div>
      <div className={styles.right}>
        <div>portfolio</div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.item}>
          <label>TEL |</label>
          <div>010-XXXX-XXXX</div>
        </div>
        <div className={styles.item}>
          <label>E-MAIL |</label>
          <div>ahoney0512@gamil.com</div>
        </div>
        <div className={styles.item}>
          <label>GITHUB |</label>
          <div> Ahyeon, Jung</div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
