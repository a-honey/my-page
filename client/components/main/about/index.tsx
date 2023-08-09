import { CgProfile } from "react-icons/cg";
import { TbCalendarStar } from "react-icons/tb";
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidPhoneCall } from "react-icons/bi";
import { HiOutlineMailOpen } from "react-icons/hi";
import { IoSchoolOutline } from "react-icons/io5";
import * as Type from "../../../types/mainType";
import styles from "./index.module.css";

const About = ({
  about,
  intro,
}: {
  about: Type.About | null;
  intro: Type.Intro | null;
}) => {
  return (
    <div className="main-container">
      <div className={styles.firstBlock} id="intro">
        <h1>{intro?.greet}</h1>
        <h2>{intro?.subGreet}</h2>
        <h3>{intro?.message}</h3>
      </div>
      <div className={styles.secondBlock} id="about">
        <h1 className="main-name">about me</h1>
        <div className={styles.contentContainer}>
          <div className={styles.imgContainer}>이미지</div>
          <ul className={styles.textListContainer}>
            <li className={styles.textItemContainer}>
              <CgProfile />
              <div className={styles.textContainer}>
                <div>이름</div>
                <div>{about?.name}</div>
              </div>
            </li>
            <li className={styles.textItemContainer}>
              <TbCalendarStar />
              <div className={styles.textContainer}>
                <div>생년월일</div>
                <div>{about?.birthdate}</div>
              </div>
            </li>
            <li className={styles.textItemContainer}>
              <FaLocationDot />
              <div className={styles.textContainer}>
                <div>주소지</div>
                <div>{about?.address}</div>
              </div>
            </li>
            <li className={styles.textItemContainer}>
              <BiSolidPhoneCall />
              <div className={styles.textContainer}>
                <div>연락처</div>
                <div>{about?.tel}</div>
              </div>
            </li>
            <li className={styles.textItemContainer}>
              <HiOutlineMailOpen />
              <div className={styles.textContainer}>
                <div>이메일</div>
                <div>{about?.email}</div>
              </div>
            </li>
            <li className={styles.textItemContainer}>
              <IoSchoolOutline />
              <div className={styles.textContainer}>
                <div>학력</div>
                <div>{about?.education}</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
