import { Metadata } from "next";
import styles from "./page.module.css";
import { findTextWork } from "@/utils/helpers";
import ExpandContent from "@/components/expandContent/ExpandContent";
export const metadata: Metadata = {
  title: "Work",
  description: "Work page",
};

export default async function Work() {
  const content = await findTextWork();
  return (
    <>
      <div className={styles.wrap}>
        <h1>Work</h1>
        {content.map(({ blueant, agroHof, kobe }, index: number) => (
          <div key={index}>
            {/*blueant*/}
            <h1>{blueant.company}</h1>
            <p>{blueant.position}</p>
            <ExpandContent>
              <p>{blueant.desc}</p>
            </ExpandContent>
            <p>{blueant.tasks}</p>
            {/*blueant projects*/}
            <ExpandContent>
              {blueant.projects.map(
                ({ labely, emailTemplatingApp }, j: number) =>
                  [...labely, ...emailTemplatingApp].map((item, k: number) => (
                    <div key={k}>
                      <h4>{item.title}</h4>
                      <p>{item.url}</p>
                      <p>{item.desc}</p>
                    </div>
                  ))
              )}
            </ExpandContent>
            <p>{blueant.duration}</p>
            <p>{blueant.reasonOfLeaving}</p>
            {/*agrohof*/}
            <div className={styles.contentHero}>
              <h1>{agroHof.company}</h1>
              <p>{agroHof.position}</p>
              <ExpandContent>
                <p>{agroHof.desc}</p>
              </ExpandContent>
              <p>{agroHof.tasks}</p>
              <p>{agroHof.duration}</p>
              <p>{agroHof.reasonOfLeaving}</p>
            </div>
            {/*kobe*/}
            <div className={styles.contentHero}>
              <h1>{kobe.company}</h1>
              <p>{kobe.position}</p>
              <ExpandContent>
                <p>{kobe.desc}</p>
              </ExpandContent>
              <p>{kobe.tasks}</p>
              <p>{kobe.duration}</p>
              <p>{kobe.reasonOfLeaving}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
