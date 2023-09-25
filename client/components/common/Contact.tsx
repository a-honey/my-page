import Link from "next/link";
import styles from "./index.module.scss";

const Contact = () => {
  return (
    <div className={styles.bottom}>
      <div className={styles.item}>
        <label>E-MAIL |</label>
        <div>ahoney0512@gamil.com</div>
      </div>
      <div className={styles.item}>
        <label>GITHUB |</label>
        <Link
          href={"https://github.com/a-honey"}
          target="_blank"
          rel="noopener noreferrer"
        >
          Ahyeon, Jung
        </Link>
      </div>
    </div>
  );
};

export default Contact;
