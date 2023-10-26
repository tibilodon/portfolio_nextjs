"use client";
import LangButton from "../buttons/langButton/LangButton";
import styles from "./expandContent.module.css";
import { useState, useEffect } from "react";
import Loading from "@/app/loading";

type ExpandContentProps = { children: React.ReactNode; lang: string };

const ExpandContent: React.FunctionComponent<ExpandContentProps> = ({
  children,
  lang,
}) => {
  useEffect(() => {
    const setCurrentLabel = () => {
      if (lang === "eng") {
        setLabel("See More");
      } else {
        setLabel("Bővebben");
      }
    };
    setCurrentLabel();
  }, [, lang]);
  const [expand, setExpand] = useState<boolean>(false);
  const [label, setLabel] = useState<string>("");
  const setStyle = (): string => {
    if (expand) {
      return `${styles.expand} ${styles.show}`;
    } else {
      return `${styles.expand}`;
    }
  };

  const handler = (): void => {
    setExpand(!expand);
  };

  useEffect(() => {
    const selectLabel = (): void => {
      if (expand && lang === "eng") {
        setLabel("See Less");
      }
      if (!expand && lang === "eng") {
        setLabel("See More");
      }
      if (expand && lang === "hun") {
        setLabel("Kevesebb");
      }
      if (!expand && lang === "hun") {
        setLabel("Bővebben");
      }
    };
    selectLabel();
  }, [expand, lang]);

  if (label === "") {
    return <Loading />;
  }

  return (
    <>
      <div className={styles.wrap}>
        <LangButton active={!expand} onClick={handler} text={label} />
        <div className={setStyle()}>
          <div className={styles.content}>{children}</div>
        </div>
      </div>
    </>
  );
};

export default ExpandContent;
