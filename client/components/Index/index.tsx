import styles from "./index.module.scss";

const Index = () => {
  return (
    <div className={styles.container}>
      <h1>INDEX</h1>
      <div className={styles.contentContainer}>
        <ul>
          <li>첫번째</li>
          <li>두번째</li>
          <li>세번째</li>
        </ul>
      </div>
    </div>
  );
};

export default Index;
