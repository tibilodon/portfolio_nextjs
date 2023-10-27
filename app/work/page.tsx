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
  //quick lang related fixes
  const title = (): string => {
    if (currentLang === "eng") {
      return "Work";
    }
    if (currentLang === "hun") {
      return "Tapasztalat";
    } else {
      return "Work";
    }
  };

  const project = (): string => {
    if (currentLang === "eng") {
      return "Projects";
    }
    if (currentLang === "hun") {
      return "Projektek";
    } else {
      return "Projects";
    }
  };

  const label = (): string => {
    if (currentLang === "eng") {
      return "Download CV";
    }
    if (currentLang === "hun") {
      return "Önéletrajz letöltése";
    } else {
      return "Download CV";
    }
  };

  const cv = (): string | undefined => {
    if (currentLang === "eng") {
      return process.env.CV_URL_ENG;
    }
    if (currentLang === "hun") {
      return process.env.CV_URL_HUN;
    } else {
      return process.env.CV_URL_ENG;
    }
  };
  return (
    <>
      <div className={styles.wrap}>
        <h1>{title()}</h1>
        {content.map(({ blueant, agroHof, kobe }, index: number) => (
          <div key={index}>
            {/*blueant*/}
            <WorkContentWrapper duration={blueant.duration}>
              <h2>{blueant.company}</h2>
              <p>{blueant.position}</p>
              <p>{blueant.tasks}</p>
              <ExpandContent lang={currentLang}>
                <p>{blueant.desc}</p>
              </ExpandContent>
              {/*blueant projects*/}
              <h3>{project()}</h3>
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
            </WorkContentWrapper>
            {/*agrohof*/}
            <WorkContentWrapper duration={agroHof.duration}>
              <h2>{agroHof.company}</h2>
              <p>{agroHof.position}</p>
              <p>{agroHof.tasks}</p>
              <ExpandContent lang={currentLang}>
                <p>{agroHof.desc}</p>
              </ExpandContent>
            </WorkContentWrapper>
            {/*kobe*/}
            <WorkContentWrapper duration={kobe.duration}>
              <h2>{kobe.company}</h2>
              <p>{kobe.position}</p>
              <p>{kobe.tasks}</p>
              <ExpandContent lang={currentLang}>
                <p>{kobe.desc}</p>
              </ExpandContent>
            </WorkContentWrapper>
            <div className={styles.download}>
              <a
                rel="noreferrer noopener"
                target="_blank"
                href={cv()}
              >
                <RegularButton label={label()} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
