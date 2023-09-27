import styles from "./page.module.css";
import { Metadata } from "next";
import prisma from "@/utils/prismaClient";
import Image from "next/image";
import portrait from "@/public/images/tib_jpg.jpg";
import Loading from "./loading";
import { Suspense } from "react";
import { getCookie } from "@/utils/cookieActions";

//pages for smooth scrolling
import About from "./about/page";
import Contact from "./contact/page";
import Project from "./project/page";
import Work from "./work/page";

import ScrollWrap from "@/components/scrollWrapper/ScrollWrap";

export const metadata: Metadata = {
  title: "Home",
  description: "Home page",
};

enum Language {
  ENG = "ENG",
  HUN = "HUN",
}
export type Details = {
  id: number;
  heading: string;
  profession: string;
  email: string;
  phone: string;
  lang: string;
};

async function getDetails(lang: Language): Promise<Details | null> {
  return await prisma.details.findFirst({
    where: {
      lang: lang,
    },
  });
}

export default async function Home() {
  const lang = await getCookie("lang");
  const result = await getDetails(
    lang.value === "eng" ? Language.ENG : Language.HUN
  );

  return (
    <>
      <Suspense fallback={<Loading />}>
        {result !== null ? (
          <>
            <div className={styles.wrap}>
              <div className={styles.text}>
                <h1>{result.heading}</h1>
                <h1>{result.profession}</h1>
              </div>
              <Image
                className={styles.image}
                //  height={604} width={395}
                src={portrait}
                alt="portrait picture"
                priority
              />
            </div>
            <ScrollWrap text={"about"}>
              <About />
            </ScrollWrap>
            <ScrollWrap text={"project"}>
              <Project />
            </ScrollWrap>
          </>
        ) : (
          <Loading />
        )}
      </Suspense>
    </>
  );
}
