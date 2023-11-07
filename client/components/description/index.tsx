import Header from "../common/Header";
import styles from "./index.module.scss";

const Description = () => {
  return (
    <section className="bright main-container">
      <div className={styles.container}>
        <Header right={null} />
        <div className={styles.keywords}>
          <div>열정</div>
          <div>사용자 중심</div>
          <div>협업</div>
        </div>
        <div>
          <ul>
            <li>
              <h2># 사용자 친화적인</h2>
              알뜰폰으로 약정이 묶여 강제로 400kbs 데이터를 가지고 생활하던 중,
              사용하기 편한 웹 사이트에 대한 강한 관심과 열정을 느낀 후 사용자
              경험 친화적인 웹 서비스를 만들고자 프론트엔드 개발에
              뛰어들었습니다. 목적을 갖고 학습을 하며 웹 페이지의 빠른 로딩과
              사용자 경험 개선을 늘 고민했습니다. 물 속에서 바쁘게 움직이지만
              아름다워 보이는 백조처럼 사용자가 편안하게 사용할 수 있는 웹
              서비스를 제작하고 싶습니다.
            </li>
            <li>
              <h2># 지속적인 학습</h2>웹 기술과 사용자 기대치가 계속해서
              발전하면서, 웹 개발자로서 우리의 역할은 점점 더 중요해지고
              다양해지고 있습니다. 동시에 사용자들은 처음에 신선하다고 느낀
              경험을 자주 접하면 금새 지루함을 느끼게 됩니다. 따라서 항상 새로운
              기술을 받아들이고, 기존 지식을 업데이트하는 자세가 필요합니다.
              새로운 도전에 대한 열린 마음을 가지고, 항상 더 나은 방법을 찾으며
              개발해 나갈 준비가 되어 있습니다. 저는 새로운 경험을 제공하고,
              사용자에게 즐거움과 가치를 전달하는 것에 큰 보람을 느끼며,
              끊임없는 학습을 통해 팀과 프로젝트에 가치를 제공하고 싶습니다.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Description;
