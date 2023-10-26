import { Metadata } from "next";
import styles from "./page.module.css";
import { getCurrentLang, findProjectsContact } from "@/utils/helpers";
import { LangOption, Projects } from "@/utils/commonTypes";
import Loading from "../loading";
import ProjectsContent from "@/components/content/projects/ProjectsContent";

export const metadata: Metadata = {
  title: "Projects",
  description: "Projects page",
};

export default async function Projects() {
  const lang = await getCurrentLang();
  const content: Projects = findProjectsContact(lang as LangOption);

  const { title, buttonLess, buttonMore, siteLabel, projects } = content;

  if (!content) {
    return <Loading />;
  }
  return (
    <>
      <div className={styles.wrap}>
        <h1>{title}</h1>
        <div className={styles.contentWrap}>
          <div>
            {projects.map((project, index: number) => (
              <div key={index}>
                {Object.keys(project).map((projKey) => (
                  <div key={projKey}>
                    {/* <h2>{key}</h2> */}
                    {project[projKey].map((item, itemIndex) => (
                      <div className={styles.projects} key={itemIndex}>
                        <h2>{item.title}</h2>
                        <ProjectsContent
                          btnLess={buttonLess}
                          btnMore={buttonMore}
                          text={item.desc}
                          url={item.url}
                          projKey={projKey}
                          siteLabel={siteLabel}
                        />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
