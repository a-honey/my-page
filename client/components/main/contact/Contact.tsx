import { useRef } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import styles from "./contact.module.scss";
import Footer from "@/components/common/Footer";

interface HookFormTypes {
  title: string;
  email: string;
  content: string;
}

const Contact = () => {
  const { register, handleSubmit } = useForm<HookFormTypes>();

  const sendEmail = () => {
    const data = getValues();
    try {
      emailjs.sendForm(
        "service_s14o008",
        "template_aur5ky4",
        data,
        "qSSot4z9FQLC8kJ3d"
      );
      console.log("Email sent successfully");
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  const { getValues } = useForm();

  return (
    <div className="main-container" id="contact">
      <h1 className="main-name">contact</h1>
      <div className={styles.container}>
        <form onSubmit={handleSubmit(sendEmail)}>
          <label>title</label>
          <input {...register("title")} placeholder="제목을 입력해주세요." />
          <label>email</label>
          <input
            {...register("email")}
            placeholder="이메일 주소를 입력해주세요."
          />
          <label>content</label>
          <textarea
            {...register("content")}
            placeholder="내용을 입력해주세요."
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
