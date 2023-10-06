import {
  engTexts,
  hunTexts,
  hunAboutShortTexts,
  engAboutShortTexts,
  engAboutLongTexts,
  hunAboutLongTexts,
} from "@/utils/content";
import { LangOption, MenuTexts, About } from "@/utils/commonTypes";
import { getCookie } from "./cookieActions";

const getCurrentLang = async () => {
  const res = await getCookie("lang");
  if (res?.value) {
    return res?.value;
  } else {
    return "eng";
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
export { findTextMenus, findTextAbout };
