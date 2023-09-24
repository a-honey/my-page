import Contact from "./Contact";
import styles from "./index.module.scss";

const Blank = ({ content }: { content: string }) => {
  return (
    <main>
      <div className={styles.container}>
        <div className={styles.center}>
          <h1>{content}</h1>
        </div>
        <div className={styles.right}>
          <div>portfolio</div>
        </div>
        <Contact />
      </div>
    </main>
  );
};

export default Blank;
