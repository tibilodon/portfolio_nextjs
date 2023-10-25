import { Metadata } from "next";
import styles from "./page.module.css";
import { getCurrentLang, findProjectsContact } from "@/utils/helpers";
import { LangOption, Projects } from "@/utils/commonTypes";
import Loading from "../loading";
import ProjectsContent from "@/components/content/projects/ProjectsContent";
// import Image from "next/image";
// import hingyi from "@/public/images/hingyi.png";
// import busyant from "@/public/images/busyant.png";
// import portfolio from "@/public/images/portfolio.png";

export const metadata: Metadata = {
  title: "Projects",
  description: "Projects page",
};

export default async function Projects() {
  const lang = await getCurrentLang();
  const content: Projects = findProjectsContact(lang as LangOption);

  const { title, buttonLess, buttonMore, projects } = content;

  if (!content) {
    return <Loading />;
  }
  return (
    <>
      <div className={styles.wrap}>
        <h1>{title}</h1>
        <div className={styles.contentWrap}>
          <div className={styles.projects}>
            {projects.map((project, index: number) => (
              <div key={index}>
                {Object.keys(project).map((projKey) => (
                  <div key={projKey}>
                    {/* <h2>{key}</h2> */}
                    {project[projKey].map((item, itemIndex) => (
                      <div key={itemIndex}>
                        <h3>{item.title}</h3>
                        {/* <p>{item.desc}</p> */}

                        <ProjectsContent
                          btnLess={buttonLess}
                          btnMore={buttonMore}
                          text={item.desc}
                          url={item.url}
                          projKey={projKey}
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
