import {
  engTexts,
  hunTexts,
  hunAboutShortTexts,
  engAboutShortTexts,
  engAboutLongTexts,
  hunAboutLongTexts,
  engWork,
  hunWork,
  engContact,
  hunContact,
  engProject,
  hunProject,
} from "@/utils/content";
import {
  LangOption,
  MenuTexts,
  About,
  WorkExperience,
  Contact,
  Projects,
} from "@/utils/commonTypes";
import { getCookie } from "./cookieActions";

const getCurrentLang = async () => {
  const res = await getCookie("lang");
  if (res?.value) {
    return res?.value;
  } else {
    return "eng";
  }
};

const findTextContact = (lang: LangOption): Contact => {
  if (lang === "eng") {
    return engContact;
  } else {
    return hunContact;
  }
};

const findTextMenus = (
  lang: LangOption,

  val: keyof MenuTexts
): string => {
  if (lang === "eng") {
    return engTexts[val];
  } else {
    return hunTexts[val];
  }
};

//if no cookies present, the language will be set to "eng" by default
const findTextAbout = async (): Promise<About> => {
  const res = await getCurrentLang();
  if (res === "eng") {
    return [engAboutShortTexts, engAboutLongTexts];
  } else {
    return [hunAboutShortTexts, hunAboutLongTexts];
  }
};

const findTextWork = async (): Promise<WorkExperience> => {
  const res = await getCurrentLang();
  if (res === "eng") {
    return engWork;
  } else {
    return hunWork;
  }
};

const findProjectsContact = (lang: LangOption): Projects => {
  if (lang === "eng") {
    return engProject;
  } else {
    return hunProject;
  }
};
export {
  findTextMenus,
  findTextAbout,
  findTextWork,
  getCurrentLang,
  findTextContact,
  findProjectsContact,
};
