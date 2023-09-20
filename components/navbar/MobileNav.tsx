"use client";
import { useCallback } from "react";
import styles from "./mobileNav.module.css";
import Link from "next/link";
import Image from "next/image";
import menu_icon from "@/public/icons/menu.svg";
import Sidebar from "../sidebar/Sidebar";

type LangOption = "hun" | "eng";

type MobileNavProps = {
  sidebar: boolean;
  setSidebar: (sidebar: boolean) => void;
  lang: LangOption;
  setLang: (lang: LangOption) => void;
};

const MobileNav: React.FunctionComponent<MobileNavProps> = ({
  sidebar,
  setSidebar,
  lang,
  setLang,
}) => {
  const handler = useCallback(() => {
    setSidebar(!sidebar);
  }, [sidebar, setSidebar]);
  return (
    <>
      <div
        onClick={sidebar === true ? handler : undefined}
        className={styles.wrap}
      >
        {!sidebar ? (
          <Image onClick={handler} src={menu_icon} alt="menu icon" />
        ) : null}
        <Link href="/" as="/">
          <button>Home</button>
        </Link>
        <Link href="/about" as="/about">
          <button>About</button>
        </Link>
      </div>
      {sidebar ? <Sidebar lang={lang} setLang={setLang} /> : null}
    </>
  );
};

export default MobileNav;
