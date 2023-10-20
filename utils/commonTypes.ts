type LangOption = "hun" | "eng" | null;
type TnC = "true" | "false" | null;
type MenuTexts = {
  home: string;
  about: string;
  project: string;
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
    reasonOfLeaving: string;
  };
}[];

type Form = {
  name: string;
  email: string;
  message: string;
  language: LangOption;
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
};
