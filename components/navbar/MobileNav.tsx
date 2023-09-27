"use client";
import { useCallback } from "react";
import styles from "./mobileNav.module.css";
import Link from "next/link";
import Image from "next/image";
import menu_icon from "@/public/icons/menu.svg";
import Sidebar from "../sidebar/Sidebar";
import home_icon from "@/public/icons/home.svg";
import message_icon from "@/public/icons/message.svg";

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
        <div>
          {!sidebar ? (
            <Image
              width={30}
              height={30}
              onClick={handler}
              src={menu_icon}
              alt="menu icon"
            />
          ) : null}
        </div>
        <div className={styles.items}>
          <Link href="/contact" as="/contact">
            <Image
              width={25}
              height={25}
              src={message_icon}
              alt="message icon"
            />
          </Link>
        </div>
        {/* <Link href="/about" as="/about">
          <button>About</button>
        </Link> */}
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

export default MobileNav;
