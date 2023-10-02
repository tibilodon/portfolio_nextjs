"use client";
import { useCallback } from "react";
import Link from "next/link";
import styles from "./sidebar.module.css";
import back_icon from "@/public/icons/back.svg";
import Image from "next/image";
import { usePathname } from "next/navigation";
import PathButton from "../buttons/pathButton/PathButton";
//when nav happens on sidebar, active path will be gathered from pathName, therefore sate will be set to an empty string
import { usePath } from "@/utils/activeContext";
import { LangOption, MenuTexts } from "@/utils/commonTypes";
import LangButton from "../buttons/langButton/LangButton";

import { engTexts, hunTexts } from "@/utils/content";
import { findText } from "@/utils/helpers";

type SidebarProps = {
  lang: LangOption;
  setLang: (lang: LangOption) => void;
  sidebar: boolean;
  setSidebar: (sidebar: boolean) => void;
};

const Sidebar: React.FunctionComponent<SidebarProps> = ({
  lang,
  setLang,
  sidebar,
  setSidebar,
}) => {
  const pathname = usePathname();
  const { pathMatchRoute } = usePath();
  console.log("PATHNAME", pathname);
  const handler = useCallback(
    (val: LangOption) => {
      setLang(val);
    },
    [lang, setLang]
  );

  const collapseHandler = useCallback(() => {
    setSidebar(!sidebar);
  }, [sidebar, setSidebar]);

  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.hero}>
          <Image
            onClick={collapseHandler}
            src={back_icon}
            alt="back icon"
            className={styles.backBtn}
            width={30}
            height={30}
          />
          <div className={styles.items} onClick={pathMatchRoute}>
            <Link onClick={collapseHandler} href={"/"} as={"/"}>
              <PathButton label="home" text={findText(lang, "home")} />
            </Link>
            <Link onClick={collapseHandler} href={"/about"} as={"/about"}>
              <PathButton label="about" text={findText(lang, "about")} />
            </Link>
            {/* <div className={styles.mobile}>
            <Link onClick={collapseHandler} href={"/contact"} as={"/contact"}>
            <PathButton text="Contact" />
            </Link>
          </div> */}
            <Link onClick={collapseHandler} href={"/project"} as={"/project"}>
              <PathButton label="project" text={findText(lang, "project")} />
            </Link>
            <Link onClick={collapseHandler} href={"/work"} as={"/work"}>
              <PathButton label="work" text={findText(lang, "work")} />
            </Link>
            <Link onClick={collapseHandler} href={"/contact"} as={"/contact"}>
              <PathButton label="contact" text={findText(lang, "contact")} />
            </Link>
          </div>
        </div>
        <div className={styles.lang}>
          <div className={styles.langButton}>
            <LangButton
              active={lang === "hun" ? true : false}
              onClick={() => handler("hun")}
              text="Hun"
            />
          </div>
          <div className={styles.langButton}>
            <LangButton
              active={lang === "eng" ? true : false}
              onClick={() => handler("eng")}
              text="Eng"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
