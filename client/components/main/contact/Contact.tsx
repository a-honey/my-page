import styles from "./contact.module.scss";
import Footer from "@/components/common/Footer";

const Contact = () => {
  return (
    <div className="main-container" id="contact">
      <h1 className="main-name">contact</h1>
      <div className={styles.container}>
        <form>
          <label>title</label>
          <input placeholder="제목을 입력해주세요." />
          <label>email</label>
          <input placeholder="이메일 주소를 입력해주세요." />
          <label>content</label>
          <textarea placeholder="내용을 입력해주세요." />
          <button>Submit</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
