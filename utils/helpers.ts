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
  engThankYou,
  hunThankYou,
  engServices,
  hunServices,
  engShopServices,
  hunShopServices,
} from "@/utils/content";
import {
  LangOption,
  MenuTexts,
  About,
  WorkExperience,
  Contact,
  Projects,
  ThankYou,
  Services,
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

const findTextServices = (lang: LangOption): Services[] => {
  if (lang === "eng") {
    return [engServices, engShopServices];
  } else {
    return [hunServices, hunShopServices];
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

const findThankYouTexts = (lang: LangOption): ThankYou => {
  if (lang === "eng") {
    return engThankYou;
  } else {
    return hunThankYou;
  }
};
export {
  findTextMenus,
  findTextAbout,
  findTextWork,
  getCurrentLang,
  findTextContact,
  findProjectsContact,
  findThankYouTexts,
  findTextServices,
};
