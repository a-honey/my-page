import Nav from "./Nav";
import styles from "./index.module.css";

const About = () => {
  return (
    <div className="main-container">
      <div className="first-block">
        <h1> 첫 페이지 렌더링 되면 인사말</h1>
        <h2> 간단한 자기소개</h2>
        <h3> 나의 메시지 </h3>
        <Nav/>
      </div>
      <div className="second-block">
        <h1 className="main-name">about me</h1>
        <div className="content-container">
          <div>이미지</div>
          <ul className="content">
            <li>
              <div>아이콘</div>
              <div className="text-container">
                <div>이름</div>
                <div>정아현</div>
              </div>  
            </li>
            <li>
              <div>아이콘</div>
              <div className="text-container">
                <div>생년월일</div>
                <div>정아현</div>
              </div>  
            </li>
            <li>
              <div>아이콘</div>
              <div className="text-container">
                <div>주소지</div>
                <div>정아현</div>
              </div>  
            </li>
            <li>
              <div>아이콘</div>
              <div className="text-container">
                <div>연락처</div>
                <div>정아현</div>
              </div>  
            </li>
            <li>
              <div>아이콘</div>
              <div className="text-container">
                <div>이메일</div>
                <div>정아현</div>
              </div>  
            </li>
            <li>
              <div>아이콘</div>
              <div className="text-container">
                <div>학력</div>
                <div>정아현</div>
              </div>  
            </li>
          </ul>
        </div>
      </div>
  </div>
  );
};

export default About;