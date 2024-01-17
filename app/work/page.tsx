import { Metadata } from "next";
import styles from "./page.module.css";
import { findTextWork, getCurrentLang } from "@/utils/helpers";
import ExpandContent from "@/components/expandContent/ExpandContent";
import WorkContentWrapper from "@/components/workContentWrapper/WorkContentWrapper";
import RegularButton from "@/components/buttons/regular/RegularButton";
import Link from "next/link";
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
        {content.map(({ blueant, agroHof, kobe, freelance }, index: number) => (
          <div key={index}>
            {/*Freelance*/}
            <WorkContentWrapper duration={freelance.duration}>
              <h2>{freelance.company}</h2>
              <p>{freelance.position}</p>
              <p>{freelance.tasks}</p>
              <ExpandContent lang={currentLang}>
                <p>{freelance.desc}</p>
              </ExpandContent>
              <h3>{project()}</h3>

              <ExpandContent lang={currentLang}>
                <div>
                  <Link href={"/projects"}>
                    <strong style={{ textDecoration: "underline" }}>
                      {currentLang === "hun"
                        ? `Tovább a ${project()} oldalra`
                        : `Go to ${project()}'s page`}
                    </strong>{" "}
                  </Link>{" "}
                </div>
              </ExpandContent>
            </WorkContentWrapper>

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
                  (
                    {
                      labely,
                      checkoutExt,
                      emailTemplatingApp,
                      magentoConverter,
                    },
                    j: number
                  ) =>
                    [
                      ...labely,
                      ...checkoutExt,
                      ...emailTemplatingApp,
                      ...magentoConverter,
                    ].map((item, k: number) => (
                      <div key={k}>
                        <h4>{item.title}</h4>
                        <p>
                          <a
                            rel="noreferrer noopener"
                            target="_blank"
                            href={item.url}
                          >
                            {item.url}
                          </a>
                        </p>
                        <p>{item.desc}</p>
                      </div>
                    ))
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
              <a rel="noreferrer noopener" target="_blank" href={cv()}>
                <RegularButton label={label()} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
