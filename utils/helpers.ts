import { engTexts, hunTexts } from "@/utils/content";
import { LangOption, MenuTexts } from "@/utils/commonTypes";

const findText = (lang: LangOption, val: keyof MenuTexts): string => {
  let res;
  if (lang === "eng") {
    return (res = engTexts[val]);
  } else {
    return (res = hunTexts[val]);
  }
};
export { findText };
