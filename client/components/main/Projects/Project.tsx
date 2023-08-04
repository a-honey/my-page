const Project = () => {

  return (
    <div>
      <h1>프로젝트 제목</h1>
      <h2>프로젝트 소제목</h2>
      <div className="content-container">
        <div>프로젝트 이미지 슬라이드</div>
        <div className="content">
            <p>프로젝트 설명 길게~</p>
            <ul>
                <li>
                    <div>주요 기능</div>
                    <div>주요 기능을 설명</div>
                </li>
                <li>
                    <div>깃허브</div>
                    <div>프로젝트 바로가기</div>
                </li>
                <li>
                    <div>역할</div>
                    <div>내 역할에서 사용한 스택</div>
                </li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Project;
