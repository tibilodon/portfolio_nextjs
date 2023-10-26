import styles from "./page.module.css";
import { Metadata } from "next";
import Image from "next/image";
import portrait from "@/public/images/tib_jpg.jpg";
import Loading from "./loading";
import { getCookie } from "@/utils/cookieActions";

//pages for smooth scrolling
import About from "./about/page";
import Contact from "./contact/page";
import Projects from "./projects/page";
import Work from "./work/page";

import ScrollWrap from "@/components/scrollWrapper/ScrollWrap";
import { engHomeTexts, hunHomeTexts } from "@/utils/content";
import { HomeTexts } from "@/utils/commonTypes";

export const metadata: Metadata = {
  title: "Home",
  description: "Home page",
};

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
          <ScrollWrap text={"home"}>
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
          <ScrollWrap text={"about"}>
            <About />
          </ScrollWrap>
          <ScrollWrap text={"work"}>
            <Work />
          </ScrollWrap>
          <ScrollWrap text={"projects"}>
            <Projects />
          </ScrollWrap>
          <ScrollWrap text={"contact"}>
            <Contact />
          </ScrollWrap>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}
