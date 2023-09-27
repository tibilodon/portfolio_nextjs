"use client";
import { useCallback } from "react";
import Link from "next/link";
import styles from "./sidebar.module.css";
import back_icon from "@/public/icons/back.svg";
import Image from "next/image";
import { usePathname } from "next/navigation";
import PathButton from "../buttons/pathButton/PathButton";

type LangOption = "hun" | "eng";
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
        <Image
          onClick={collapseHandler}
          src={back_icon}
          alt="back icon"
          className={styles.backBtn}
        />
        <div className={styles.items}>
          <Link onClick={collapseHandler} href={"/"} as={"/"}>
            <PathButton label="Home" pathname={pathname} />
          </Link>
          <Link onClick={collapseHandler} href={"/about"} as={"/about"}>
            <PathButton label="About" pathname={pathname} />
          </Link>
          <div className={styles.mobile}>
            <Link onClick={collapseHandler} href={"/contact"} as={"/contact"}>
              <PathButton label="Contact" pathname={pathname} />
            </Link>
          </div>
          <Link onClick={collapseHandler} href={"/project"} as={"/project"}>
            <PathButton label="Project" pathname={pathname} />
          </Link>
          <Link onClick={collapseHandler} href={"/work"} as={"/work"}>
            <PathButton label="Work" pathname={pathname} />
          </Link>
          <Link onClick={collapseHandler} href={"/contact"} as={"/contact"}>
            <PathButton label="Contact" pathname={pathname} />
          </Link>
        </div>

        <button
          className={
            lang === "hun" ? styles.buttonActive : styles.buttonInactive
          }
          onClick={() => handler("hun")}
        >
          hun
        </button>
        <button
          className={
            lang === "eng" ? styles.buttonActive : styles.buttonInactive
          }
          onClick={() => handler("eng")}
        >
          eng
        </button>
      </div>
    </>
  );
};

export default Sidebar;
