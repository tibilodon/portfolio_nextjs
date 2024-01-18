import { Metadata } from "next";
import styles from "./page.module.css";
import { getCurrentLang, findProjectsContact } from "@/utils/helpers";
import { LangOption, Projects as ProjectsType } from "@/utils/commonTypes";
import Loading from "../loading";
import ProjectsContent from "@/components/content/projects/ProjectsContent";
import { getCookie } from "@/utils/cookieActions";

// export const metadata: Metadata = {
//   title: "Projects",
//   description: "Projects page",
// };

export async function generateMetadata(): Promise<Metadata> {
  // { params, searchParams }: Props,
  // parent: ResolvingMetadata
  // const id = params.id;
  const lang = await getCookie("lang");

  const title = lang?.value === "eng" ? "Projects" : "Projektek";
  const description =
    lang?.value === "eng" ? "Tibor Vigh | Projects" : "Vigh Tibor | Projektek";

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

export default async function Projects() {
  const lang = await getCurrentLang();
  const content: ProjectsType = findProjectsContact(lang as LangOption);

  const { title, buttonLess, buttonMore, siteLabel, projs } = content;

  if (!content) {
    return <Loading />;
  }
  return (
    <>
      <div className={styles.wrap}>
        <h1>{title}</h1>
        <div className={styles.contentWrap}>
          <div>
            {projs.map((project, index: number) => (
              <div key={index}>
                {Object.keys(project).map((projKey) => (
                  <div key={projKey}>
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
