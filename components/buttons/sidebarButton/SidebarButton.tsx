"use client";
import { useCallback } from "react";
import Image from "next/image";
import styles from "./sidebarButton.module.css";
import menu_icon from "@/public/icons/menu.svg";
import Sidebar from "../../sidebar/Sidebar";

type LangOption = "hun" | "eng";

type SidebarButtonProps = {
  sidebar: boolean;
  setSidebar: (sidebar: boolean) => void;
  lang: LangOption;
  setLang: (lang: LangOption) => void;
};

const SidebarButton: React.FunctionComponent<SidebarButtonProps> = ({
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
        className={styles.wrap}
        // onClick={sidebar === true ? handler : undefined}
      >
        {!sidebar ? (
          <Image
            className={styles.icon}
            width={35}
            height={35}
            onClick={handler}
            src={menu_icon}
            alt="menu icon"
            priority
          />
        ) : null}
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

export default SidebarButton;
