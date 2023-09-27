import styles from "./navbar.module.css";

import Image from "next/image";
import menu_icon from "@/public/icons/menu.svg";
import Link from "next/link";
import Sidebar from "../sidebar/Sidebar";
import { useCallback } from "react";

type LangOption = "hun" | "eng";

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
  const handler = useCallback(() => {
    setSidebar(!sidebar);
  }, [sidebar, setSidebar]);

  const killme: React.CSSProperties = {
    backgroundColor: "red",
    padding: "1em",
  };
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
        <div className={styles.items}>
          <Link href="/contact" as="/contact">
            <span>Contact</span>
          </Link>
          <Link href="/about" as="/about">
            <span>About</span>
          </Link>
          <Link href="/work" as="/work">
            <span>Work</span>
          </Link>
          <Link href="/project" as="/project">
            <span>Project</span>
          </Link>
          <Link href="/" as="/">
            <button>Home</button>
          </Link>
          <Link href="/test" as="/test">
            <button style={killme}>test</button>
          </Link>
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
