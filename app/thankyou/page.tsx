import ThankYouContent from "@/components/content/thankYou/ThankYouContent";
import { Metadata } from "next";
import { getCurrentLang, findThankYouTexts } from "@/utils/helpers";
import { LangOption, ThankYou } from "@/utils/commonTypes";
import Loading from "../loading";
import { getCookie } from "@/utils/cookieActions";

// export const metadata: Metadata = {
//   title: "Thank You!",
//   description: "Thank You page",
// };

export async function generateMetadata(): Promise<Metadata> {
  // { params, searchParams }: Props,
  // parent: ResolvingMetadata
  // const id = params.id;
  const lang = await getCookie("lang");

  const title = lang?.value === "eng" ? "Thank You!" : "Köszönöm!";
  const description =
    lang?.value === "eng"
      ? "Tibor Vigh | Thank You!"
      : "Vigh Tibor | Köszönöm!";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: "https://tiborvigh.com/api/og",
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

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
