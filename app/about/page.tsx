import { Metadata } from "next";
import styles from "./page.module.css";
import { Suspense } from "react";
import Loading from "../loading";
import Content from "@/components/content/about/AboutContent";
import { findTextAbout } from "@/utils/helpers";
// import { About as AboutType } from "@/utils/commonTypes";

export const metadata: Metadata = {
  title: "About",
  description: "About page",
};

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
