import styles from "./index.module.scss";

const Contact = () => {
  return (
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
  );
};

export default Contact;
