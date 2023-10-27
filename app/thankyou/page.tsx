import ThankYouContent from "@/components/content/thankYou/ThankYouContent";
import { Metadata } from "next";
import { getCurrentLang, findThankYouTexts } from "@/utils/helpers";
import { LangOption, ThankYou } from "@/utils/commonTypes";
import Loading from "../loading";

export const metadata: Metadata = {
  title: "Thank You!",
  description: "Thank You page",
};

export default async function Thanks() {
  const lang = await getCurrentLang();
  const thanksContent: ThankYou = findThankYouTexts(lang as LangOption);

  const { title, content } = thanksContent;

  if (!thanksContent) {
    return <Loading />;
  }
  return (
    <>
      <ThankYouContent title={title} content={content} />
    </>
  );
}
