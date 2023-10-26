import { Metadata } from "next";
import styles from "./page.module.css";
import { findTextWork, getCurrentLang } from "@/utils/helpers";
import ExpandContent from "@/components/expandContent/ExpandContent";
import WorkContentWrapper from "@/components/workContentWrapper/WorkContentWrapper";
import RegularButton from "@/components/buttons/regular/RegularButton";
export const metadata: Metadata = {
  title: "Work",
  description: "Work page",
};

export default async function Work() {
  const content = await findTextWork();
  const currentLang = await getCurrentLang();
  return (
    <>
      <div className={styles.wrap}>
        <h1>Work</h1>
        {content.map(({ blueant, agroHof, kobe }, index: number) => (
          <div key={index}>
            {/*blueant*/}
            <WorkContentWrapper duration={blueant.duration}>
              <h2>{blueant.company}</h2>
              <p>{blueant.position}</p>
              <ExpandContent lang={currentLang}>
                <p>{blueant.desc}</p>
              </ExpandContent>
              <p>{blueant.tasks}</p>
              {/*blueant projects*/}
              <h3>Projects</h3>
              <ExpandContent lang={currentLang}>
                {blueant.projects.map(
                  ({ labely, emailTemplatingApp }, j: number) =>
                    [...labely, ...emailTemplatingApp].map(
                      (item, k: number) => (
                        <div key={k}>
                          <h4>{item.title}</h4>
                          <p>{item.url}</p>
                          <p>{item.desc}</p>
                        </div>
                      )
                    )
                )}
              </ExpandContent>
              <p>{blueant.reasonOfLeaving}</p>
            </WorkContentWrapper>
            {/*agrohof*/}
            <WorkContentWrapper duration={agroHof.duration}>
              <h2>{agroHof.company}</h2>
              <p>{agroHof.position}</p>
              <ExpandContent lang={currentLang}>
                <p>{agroHof.desc}</p>
              </ExpandContent>
              <p>{agroHof.tasks}</p>
              <p>{agroHof.reasonOfLeaving}</p>
            </WorkContentWrapper>
            {/*kobe*/}
            <WorkContentWrapper duration={kobe.duration}>
              <h2>{kobe.company}</h2>
              <p>{kobe.position}</p>
              <ExpandContent lang={currentLang}>
                <p>{kobe.desc}</p>
              </ExpandContent>
              <p>{kobe.tasks}</p>
              <p>{kobe.reasonOfLeaving}</p>
            </WorkContentWrapper>
            <div className={styles.download}>
              <a
                rel="noreferrer noopener"
                target="_blank"
                href={process.env.CV_URL}
              >
                <RegularButton label={"Download CV"} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
