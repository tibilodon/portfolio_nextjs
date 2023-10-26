import styles from "./navbar.module.css";
import Image from "next/image";
import menu_icon from "@/public/icons/menu.svg";
import Link from "next/link";
import Sidebar from "../sidebar/Sidebar";
import { useCallback } from "react";
import PathButton from "../buttons/pathButton/PathButton";
import { usePath } from "@/utils/activeContext";
import { LangOption } from "@/utils/commonTypes";
import { findTextMenus } from "@/utils/helpers";
import Loading from "@/app/loading";
import SlideWrapper from "../slideWrapper/SlideWrapper";

type NavbarProps = {
  sidebar: boolean;
  setSidebar: (sidebar: boolean) => void;
  lang: LangOption;
  setLang: (lang: LangOption) => void;
};

const Navbar: React.FunctionComponent<NavbarProps> = ({
  sidebar,
  setSidebar,
  lang,
  setLang,
}) => {
  const { pathMatchRoute } = usePath();

  const handler = useCallback(() => {
    setSidebar(!sidebar);
  }, [sidebar, setSidebar]);

  if (!lang) {
    return <Loading />;
  }

  return (
    <>
      <div
        className={styles.wrap}
        onClick={sidebar === true ? handler : undefined}
      >
        <div>
          {!sidebar ? (
            <Image onClick={handler} src={menu_icon} alt="menu icon" priority />
          ) : null}
        </div>
        <div className={styles.items} onClick={pathMatchRoute}>
          <Link href="/" as="/">
            <PathButton label="home" text={findTextMenus(lang, "home")} />
          </Link>

          <Link href="/about" as="/about">
            <PathButton label="about" text={findTextMenus(lang, "about")} />
          </Link>
          <Link href="/work" as="/work">
            <PathButton label="work" text={findTextMenus(lang, "work")} />
          </Link>
          <Link href="/projects" as="/projects">
            <PathButton
              label="projects"
              text={findTextMenus(lang, "projects")}
            />
          </Link>
          <Link href="/contact" as="/contact">
            <PathButton label="contact" text={findTextMenus(lang, "contact")} />
          </Link>
        </div>
      </div>
      <SlideWrapper show={sidebar}>
        <Sidebar
          lang={lang}
          setLang={setLang}
          sidebar={sidebar}
          setSidebar={setSidebar}
        />
      </SlideWrapper>
    </>
  );
};

export default Navbar;
