import { Metadata } from "next";
import styles from "./page.module.css";
import { Suspense } from "react";
import Loading from "../loading";
import Content from "@/components/content/about/AboutContent";
import { findTextAbout } from "@/utils/helpers";
import { getCookie } from "@/utils/cookieActions";
// import { About as AboutType } from "@/utils/commonTypes";

// export const metadata: Metadata = {
//   title: "About",
//   description: "About page",
// };

export async function generateMetadata(): Promise<Metadata> {
  const lang = await getCookie("lang");

  const title = lang?.value === "eng" ? "About" : "Rólam";
  const description =
    lang?.value === "eng" ? "Web Developer | About" : "Webfejlesztő | Rólam";
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

export default async function About() {
  const texts = await findTextAbout();
  const short = texts[0];

  const long = texts[1];
  return (
    <>
      <Suspense fallback={<Loading />}>
        <div className={styles.wrap}>
          {short &&
            short.map(({ title, paragraph }, i: number) => {
              return (
                <div className={styles.hero} key={i}>
                  <h1>{title}</h1>
                  <p>{paragraph}</p>
                </div>
              );
            })}
          <Content data={long} />
        </div>
      </Suspense>
    </>
  );
}
