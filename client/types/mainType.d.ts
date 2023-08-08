export declare module "mainType";

type Intro = {
  greet: string;
  subGreet: string;
  message: string;
};

type About = {
  imgUrl: string;
  name: string;
  birthdate: string;
  address: string;
  tel: number;
  email: string;
  education: string;
};

enum SkillLevel {
  Beginner = "Beginner",
  Intermediate = "Intermediate",
  Advanced = "Advanced",
}

type Skill = {
  iconUrl?: string;
  name: string;
  level: SkillLevel;
};

type Skills = {
  frontend: Skill[];
  backend: Skill[];
  versionControl: Skill[];
  communication?: Skill[];
  certificate?: Skill[];
};

type Project = {
  title: string;
  subTitle: string;
  imgUrl: string;
  description: string;
  features: string;
  featuresDescription: string;
  projectRepository: string;
  role: string;
  stack: string;
};

type Projects = Project[];
