import emoji from "react-easy-emoji";

const intro = {
  title: "EUM DAEWOONG",
  subTitle: "Front End Developer(Soon)",
  story:
    "안녕하세요. 계속 발전하고 싶은 개발자입니다. 항상 밝은 태도로 즐겁게 일하고 싶습니다.",
};

const sociallink = {
  github: "https://github.com/gnobaaaar",
  linkedin: "https://www.linkedin.com/in/daewoong-eum-673407195/",
  gmail: "eumdengs@gmail.com",
  medium: "https://medium.com/@gnobaaaar",
  tstory: "https://raabongit.tistory.com/",
};

const skills = {
  title: "SKILLS",
  subTitle: "that i used or using",

  project: [
    {
      projectId: 1,
      projectName: "personal portfolio",
      projectPeriod: "2021.02.-2021.02 (1인)",
      projectImg: "#",
      projectDetail:
        "현재 보고 계신 포트폴리오 페이지입니다. React기반으로 제작. 추후 몇가지 api를 통해 업데이트를 해볼 예정입니다.",
      projectUrl: "https://github.com/gnobaaaar/gnoFolio",
      prjectSkills: "React, Saas, GitHub",
    },
    {
      projectId: 2,
      projectName: "e-book website",
      projectPeriod: "2020.02.-2020.04 (4인)",
      projectImg: "#",
      projectDetail:
        "멀티캠퍼스 교육과정 중 만들어본 e북 업로드 사이트입니다. 미완성으로 끝난 미흡한 결과이지만 많은 것을 배울 수 있었습니다.(자체 우수상)",
      projectUrl: "https://github.com/gnobaaaar/multiicampus21_project",
      prjectSkills: "React, MobX, Django, aws, Docker, RestAPI, MySQL",
    },
  ],
};

const certification = {
  title: "Certifications",
  certificates: [
    {
      cerId: 1,
      cerName: "AWS Certified Solutions Architech - Assosiate",
      cerImg: require("../assets/img/AWS SAA.png"),
      cerPublisher: "AWS",
      cerUrl:
        "https://www.credly.com/badges/3176379b-e7dd-402b-a4d5-16cd06fa9477/public_url",
    },
    {
      cerId: 2,
      cerName: "Microsoft Certified Azure Fundamentals",
      cerImg: require("../assets/img/azure.png"),
      cerPublisher: "Microsoft",
      cerUrl:
        "https://www.credly.com/badges/60a8bebe-664d-4fc7-bccc-e79b55042034/public_url",
    },
    {
      cerId: 3,
      cerName: "Microsoft Certified Azure Data Fundamentals",
      cerImg: require("../assets/img/Azure DataFund.png"),
      cerPublisher: "Microsoft",
      cerUrl:
        "https://www.credly.com/badges/f47ae83b-643e-4453-b2ad-01c92f27c853/public_url",
    },
  ],
};

const exps = {
  title: "WORK EXPERIENCE",
  subTitle: "구직 중입니다",
};

const footer = {
  title: "CONTACT ME",
  subTitle: "MY EMAIL OPEN ALWAYS",
  location: "Seocho, Seoul",
  img: require("../assets/img/myProfile2.png"),
};

export { intro, sociallink, skills, exps, certification, footer };
