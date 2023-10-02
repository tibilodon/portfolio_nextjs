import styles from "./navbar.module.css";

import Image from "next/image";
import menu_icon from "@/public/icons/menu.svg";
import Link from "next/link";
import Sidebar from "../sidebar/Sidebar";
import { useCallback } from "react";
import PathButton from "../buttons/pathButton/PathButton";
import { usePath } from "@/utils/activeContext";
import { LangOption, MenuTexts } from "@/utils/commonTypes";
import { engTexts, hunTexts } from "@/utils/content";
import { findText } from "@/utils/helpers";

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

  // const killme: React.CSSProperties = {
  //   backgroundColor: "red",
  //   padding: "1em",
  // };

  return (
    <>
      <div
        className={styles.wrap}
        onClick={sidebar === true ? handler : undefined}
      >
        <div>
          {!sidebar ? (
            <Image onClick={handler} src={menu_icon} alt="menu icon" />
          ) : null}
        </div>
        <div className={styles.items} onClick={pathMatchRoute}>
          <Link href="/" as="/">
            {/* <button>Home</button> */}
            <PathButton label="home" text={findText(lang, "home")} />
          </Link>

          <Link href="/about" as="/about">
            {/* <span>About</span> */}
            <PathButton label="about" text={findText(lang, "about")} />
          </Link>
          <Link href="/work" as="/work">
            {/* <span>Work</span> */}
            <PathButton label="work" text={findText(lang, "work")} />
          </Link>
          <Link href="/project" as="/project">
            {/* <span>Project</span> */}
            <PathButton label="project" text={findText(lang, "project")} />
          </Link>
          <Link href="/contact" as="/contact">
            {/* <span>Contact</span> */}
            <PathButton label="contact" text={findText(lang, "contact")} />
          </Link>
          {/* <Link href="/test" as="/test">
            <button style={killme}>test</button>
          </Link> */}
        </div>
      </div>
      {sidebar ? (
        <Sidebar
          lang={lang}
          setLang={setLang}
          sidebar={sidebar}
          setSidebar={setSidebar}
        />
      ) : null}
    </>
  );
};

export default Navbar;
