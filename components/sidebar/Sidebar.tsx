"use client";
import { useCallback } from "react";
import Link from "next/link";
import styles from "./sidebar.module.css";
import back_icon from "@/public/icons/back.svg";
import Image from "next/image";
import PathButton from "../buttons/pathButton/PathButton";
//when nav happens on sidebar, active path will be gathered from pathName, therefore sate will be set to an empty string
import { usePath } from "@/utils/activeContext";
import { LangOption } from "@/utils/commonTypes";
import LangButton from "../buttons/langButton/LangButton";

import { findTextMenus } from "@/utils/helpers";

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
  const { pathMatchRoute } = usePath();
  const handler = useCallback(
    (val: LangOption) => {
      setLang(val);
    },
    [setLang]
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
              <PathButton label="home" text={findTextMenus(lang, "home")} />
            </Link>
            <Link onClick={collapseHandler} href={"/about"} as={"/about"}>
              <PathButton label="about" text={findTextMenus(lang, "about")} />
            </Link>
            <Link onClick={collapseHandler} href={"/work"} as={"/work"}>
              <PathButton label="work" text={findTextMenus(lang, "work")} />
            </Link>
            <Link onClick={collapseHandler} href={"/projects"} as={"/projects"}>
              <PathButton
                label="projects"
                text={findTextMenus(lang, "projects")}
              />
            </Link>
            {/*services*/}
            <Link onClick={collapseHandler} href={"/services"} as={"/services"}>
              <PathButton
                label="services"
                text={findTextMenus(lang, "services")}
              />
            </Link>
            {/*services*/}

            <Link onClick={collapseHandler} href={"/contact"} as={"/contact"}>
              <PathButton
                label="contact"
                text={findTextMenus(lang, "contact")}
              />
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
