type LangOption = "hun" | "eng" | "";
type TnC = "true" | "false" | null;
type MenuTexts = {
  home: string;
  about: string;
  projects: string;
  work: string;
  contact: string;
};

type HomeTexts = {
  heading: string;
  profession: string;
};

type AboutTextsShort = {
  title: string;
  paragraph: string;
  technologies: string[];
}[];

type Technologies = {
  javascript: string;
  typescript: string;
  nodejs: string;
  react: string;
  nextjs: string;
  sass: string;
};

type AboutTextsLong = {
  title: string;
  paragraph: string;
  technologies: string[];
  technologiesDesc: Technologies;
}[];

type About = [AboutTextsShort, AboutTextsLong];

type WorkExperience = {
  [key: string]: {
    company: string;
    position: string;
    desc: string;
    tasks: string;
    projects: {
      [key: string]: {
        title: string;
        url: string;
        desc: string;
      }[];
    }[];
    duration: string;
  };
}[];

type Contact = {
  title: string;
  hero: string;
  name: string;
  textfield: string;
  button: string;
};

type Form = {
  name: string;
  email: string;
  message: string;
  language: LangOption;
};

type Projects = {
  title: string;
  buttonMore: string;
  buttonLess: string;
  siteLabel: string;
  projs: {
    [key: string]: {
      title: string;
      url: string;
      desc: string;
    }[];
  }[];
};

type ThankYou = {
  title: string;
  content: string;
};

export type {
  LangOption,
  MenuTexts,
  HomeTexts,
  TnC,
  AboutTextsShort,
  Technologies,
  AboutTextsLong,
  About,
  WorkExperience,
  Form,
  Contact,
  Projects,
  ThankYou,
};
