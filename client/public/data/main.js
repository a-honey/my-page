export const data = {
  intro: {
    greet: "안녕하세요. 프론트엔드 개발자 정아현입니다.",
    subGreet:
      "일단 도전하며 배우고, 실수를 잡아가면서 열심히 공부하고 있습니다.",
    message: "Good Luck with Your Coding Journey :D",
  },
  about: {
    imgUrl: "profile.jpg",
    name: "정아현",
    birthdate: "2001-05-12",
    address: "Seoul, South Korea",
    tel: 1234567890,
    email: "john@example.com",
    education: "Global Communication",
  },
  skills: {
    frontend: [
      {
        name: "HTML",
        level: "Advanced",
      },
      {
        name: "CSS",
        level: "Advanced",
      },
      {
        name: "JS",
        level: "Advanced",
      },
      {
        name: "Styled Component",
        level: "Intermediate",
      },
      {
        name: "TailwindCSS",
        level: "Intermediate",
      },
      {
        name: "TypeScript",
        level: "Advanced",
      },
      {
        name: "React",
        level: "Advanced",
      },
      {
        name: "Nest.js",
        level: "Intermediate",
      },
    ],
    backend: [
      {
        name: "Python",
        level: "Advanced",
      },
      {
        name: "MongoDB",
        level: "Advanced",
      },
      {
        name: "MySQL",
        level: "Intermediate",
      },
    ],
    versionControl: [
      {
        name: "Git",
        level: "Advanced",
      },
      {
        name: "GitHub",
        level: "Advanced",
      },
      {
        name: "GitLab",
        level: "Intermediate",
      },
    ],
    communication: [
      {
        name: "Figma",
        level: "Advanced",
      },
    ],
  },
  projects: [
    {
      title: "SEOUL PLOG FIESTA ",
      subTitle:
        "플로깅을 장려하기 위해 제작한 환경 보호 및 건강한 도시 조성 권장 프로젝트",
      imgUrl: "seoulplogfiesta.jpg",
      description:
        "안정적인 라이브러리 사용의 중요성을 깨닫고, 리액트로 제작한 웹 사이트입니다. 빠른 상호작용이 가능한 리액트의 장점을 살려 앱처럼 개발했습니다. 앱처럼 화면을 꽉채우기 위해 vh를 사용하여 개발하였다가, 맥, 윈도우, 모니터 등 환경마다의 반응이 달라 문제점이 있어 한계점을 익힐 수 있었고 min-width를 통해 임시방편을 사용하였습니다. Context API, Redux, Recoil 등을 활용하여 상태관리 라이브러리마다의 차이점을 익히고자 하였으나, 웹서비스 규모의 특성상 특별한 장단점을 익히기는 어려웠습니다. 특히 하나의 상태에 관련하여 하나의 라이브러리를 사용하는 것으로 잘못 생각하면서 localStorage, sessionStorage, search, ContextAPI,  Recoil, Redux-Toolkit을 전부 사용하게 되었고 이에 따른 혼란을 직접 겪으며 하나의 상태관리를 하는 이유를 깨달을 수 있었습니다. 추후 Redux-Toolkit으로 리팩토링을 하며 하나의 라이브러리 사용의 편리함을 익힐 수 있었습니다. 프로젝트 종료 이후 타입스크립트로 마이그레이션하였으며, 그 과정에서 ts, tsx 확장자 외의 모듈을 불러오기 위한 타입스크립트 선언 및 웹팩을 익혔습니다. 또한 WebSocket을 이용하여 받은 채팅 확인 및 새로운 채팅 알림 토스트메시지 등 실시간 채팅기능을 추가하였습니다.",
      features: "Feature 1, Feature 2",
      featuresDescription: [
        "플로깅 참여 개인 및 그룹 인증",
        "친구 요청 및 수락 기능, 그룹 가입요청 및 수락 기능",
        "geojson과 D3.js를 이용하여 인증 게시글에 따른 비트맵 지도 구현",
        "WebSocket을 활용한 실시간 채팅 및 알림",
      ],
      projectRepository: "https://github.com/a-honey/seoul-plog-fiesta",
      role: "Team Leader, Frontend Developer",
      stack: ["React", "Sass", "D3.js", "Redux Toolkit", "Axios", "Socket.io"],
    },
    {
      title: "TAKE YOUR TICKET",
      subTitle:
        "영화, 책, 극 등의 사진, 리뷰, 키워드를 입력하여 개인 맞춤형 티켓을 제작하는 프로젝트",
      imgUrl: "takeyourticket.jpg",
      description:
        "React와 Next의 차이점에 대해 알아본 후, 다른 웹 프레임워크의 장단점을 이해하고자 Vue로 제작한 웹 사이트입니다. 백없이 html에 전달할 방법에 대해 고민하다가, 다른 사람들과 쉽게 공유할 수 있는 url을 통한 데이터 보관 방법을 선택했습니다.",
      features: "Feature 1, Feature 2",
      featuresDescription: [
        "사진 미리보기",
        "맞춤형 티켓 제작",
        "색상, 폰트크기 등 UI 사용자 수정 기능",
      ],
      projectRepository: "https://github.com/example/take-your-ticket",
      role: "Frontend Developer",
      stack: ["Vue.js", "file-saver", "html2canvas"],
    },
  ],
};
