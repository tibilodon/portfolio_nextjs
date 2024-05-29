import styles from "./page.module.css";
import type { Metadata } from "next";
import Loading from "../loading";
import { getCurrentLang, findTextServices } from "@/utils/helpers";
import { LangOption, Services as ServicesType } from "@/utils/commonTypes";
import { getCookie } from "@/utils/cookieActions";
import RegularButton from "@/components/buttons/regular/RegularButton";
import Link from "next/link";
import Image from "next/image";
import Check from "@/public/icons/check.svg";
import ServicesContent from "@/components/content/services/ServicesContent";

export async function generateMetadata(): Promise<Metadata> {
  const lang = await getCookie("lang");

  const title = lang?.value === "eng" ? "Services" : "Szolgáltatások";
  const description =
    lang?.value === "eng"
      ? "Tibor Vigh | Services"
      : "Vigh Tibor | Szolgáltatások";

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

export default async function Services() {
  const lang = await getCurrentLang();
  const content: ServicesType[] = findTextServices(lang as LangOption);

  if (!content) {
    return <Loading />;
  }

  const {
    title,
    hero,
    description,
    includes,
    alt_hero,
    alt_description,
    button,
  } = content[0];

  const {
    title: shopTitle,
    hero: shopHero,
    description: shopDescription,
    includes: shopIncludes,
    alt_hero: shopAltHero,
    alt_description: shopAltDescription,
    button: shopButton,
  } = content[1];

  return (
    <>
      <div className={styles.wrap}>
        <h1>{lang === "eng" ? "Services" : "Szolgáltatások"}</h1>
        {/* <div className={styles.hero}>
          <h3>{title}</h3>
          <h4>{hero}</h4>
          <p>{description}</p>
        </div>
        <div className={styles.alt}>
          <span>
            {includes.map((item, index) => {
              return (
                <div className={styles.mappedWrap} key={index}>
                  <Image src={Check} alt="checkmark" />
                  <span>{item}</span>
                </div>
              );
            })}
          </span>
          <Link className={styles.claim} href={"/contact"}>
            <RegularButton label={button} />
          </Link>
        </div>
        <div className={styles.last}>
          <h4>{alt_hero}</h4>
          <p>{alt_description}</p>
        </div> */}
        <div className={styles.content}>
          <ServicesContent
            title={title}
            alt_description={alt_description}
            alt_hero={alt_hero}
            buttonLabel={button}
            description={description}
            hero={hero}
            includes={includes}
          />
          <ServicesContent
            title={shopTitle}
            alt_description={shopAltDescription}
            alt_hero={shopAltHero}
            buttonLabel={shopButton}
            description={shopDescription}
            hero={shopHero}
            includes={shopIncludes}
          />
        </div>
      </div>
    </>
  );
}
