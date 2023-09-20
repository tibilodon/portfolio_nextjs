"use client";
import { useState, useCallback, useEffect } from "react";
import { createCookie, getCookie } from "@/utils/cookieActions";
import styles from "./sidebar.module.css";

type LangOption = "hun" | "eng";
type SidebarProps = {
  lang: LangOption;
  setLang: (lang: LangOption) => void;
};

const Sidebar: React.FunctionComponent<SidebarProps> = ({ lang, setLang }) => {
  // const [lang, setLang] = useState<LangOption>("eng");
  // useEffect(() => {
  //   const awaitCookie = async () => {
  //     const language = await getCookie("lang");
  //     if (language?.value) {
  //       setLang(language.value as LangOption);
  //     } else {
  //       setLang("eng");
  //     }
  //     console.log(language);
  //   };
  //   awaitCookie();
  // }, []);

  // const handler = (val: LangOption): void => {
  //   setLang(val);
  //   createCookie("lang", val);
  // };

  const handler = useCallback(
    (val: LangOption) => {
      setLang(val);
    },
    [lang, setLang]
  );

  return (
    <>
      <div className={styles.wrap}>
        <>
          <h1>sidar item</h1>
          <h1>sidar item</h1>
          <h1>sidar item</h1>
          <h1>sidar item</h1>
          <button
            className={
              lang === "hun" ? styles.buttonActive : styles.buttonInactive
            }
            onClick={() => handler("hun")}
          >
            hun
          </button>
        </>
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
