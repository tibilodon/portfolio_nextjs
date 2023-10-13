"use client";
import styles from "./expandContent.module.css";
import { useState, useEffect } from "react";

type ExpandContentProps = { children: React.ReactNode };

const ExpandContent: React.FunctionComponent<ExpandContentProps> = ({
  children,
}) => {
  const [expand, setExpand] = useState<boolean>(false);
  const [label, setLabel] = useState<string>("See More");
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
      if (expand) {
        setLabel("See Less");
      } else {
        setLabel("See More");
      }
    };
    selectLabel();
  }, [expand]);

  return (
    <>
      <div className={styles.wrap}>
        <span className={styles.btn} onClick={handler}>
          {label}
        </span>
        <div className={setStyle()}>
          <div className={styles.content}>{children}</div>
        </div>
      </div>
    </>
  );
};

export default ExpandContent;
