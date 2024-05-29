import styles from "./page.module.css";
import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import portrait from "@/public/images/tib_jpg.jpg";
import Loading from "./loading";
import { getCookie } from "@/utils/cookieActions";

//pages for smooth scrolling
import About from "./about/page";
import Contact from "./contact/page";
import Projects from "./projects/page";
import Work from "./work/page";
import Services from "./services/#page";

import ScrollWrap from "@/components/scrollWrapper/ScrollWrap";
import { engHomeTexts, hunHomeTexts } from "@/utils/content";
import { HomeTexts } from "@/utils/commonTypes";

// type Props = {
//   params: { id: string };
//   searchParams: { [key: string]: string | string[] | undefined };
// };

export async function generateMetadata(): Promise<Metadata> {
  // { params, searchParams }: Props,
  // parent: ResolvingMetadata
  // const id = params.id;
  const lang = await getCookie("lang");

  const title =
    lang?.value === "eng"
      ? "Tibor Vigh | Web Developer"
      : "Vigh Tibor | Webfejlesztő";
  const description =
    lang?.value === "eng" ? "Tibor Vigh | Home" : "Vigh Tibor | Főoldal";

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

export type Details = {
  id: number;
  heading: string;
  profession: string;
  email: string;
  phone: string;
  lang: string;
};

export default async function Home() {
  const lang = await getCookie("lang");

  const texts = (): HomeTexts => {
    if (lang?.value === "eng") {
      return engHomeTexts;
    } else {
      return hunHomeTexts;
    }
  };

  return (
    <>
      {lang !== null ? (
        <>
          <ScrollWrap>
            <div className={styles.wrap}>
              <div className={styles.text}>
                <h1>{texts().heading}</h1>
                <h1>{texts().profession}</h1>
              </div>
              <Image
                className={styles.image}
                src={portrait}
                alt="portrait picture"
                priority
              />
            </div>
          </ScrollWrap>
          <ScrollWrap>
            <About />
          </ScrollWrap>
          <ScrollWrap>
            <Work />
          </ScrollWrap>
          <ScrollWrap>
            <Projects />
          </ScrollWrap>
          <ScrollWrap>
            <Services />
          </ScrollWrap>
          <ScrollWrap>
            <Contact />
          </ScrollWrap>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}
