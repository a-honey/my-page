import styles from "./contact.module.scss";
import Footer from "../../../components/common/Footer";
import { BsGithub, BsPencilSquare, BsInstagram } from "react-icons/bs";

const Contact = () => {
  return (
    <div className="main-container" id="contact">
      <h1 className="main-name">contact</h1>
      <div className={styles.container}>
        <div>
          Do you like my portfolio? <span>Send Email</span>
        </div>
        <div>
          <span>Email |</span> ahoney@gmail.com
        </div>
        <div>
          <span>Tel |</span> 010-1234-5678
        </div>
        <div className="icons flex text-4xl mx-2 my-5 gap-5">
          <BsGithub />
          <BsPencilSquare />
          <BsInstagram />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
