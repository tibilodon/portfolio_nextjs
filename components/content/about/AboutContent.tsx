"use client";
import styles from "./aboutContent.module.css";
import { useState } from "react";
import { About } from "@/utils/commonTypes";

type ContentProps = {
  label: string;
  content: string;
};

const Content: React.FunctionComponent<ContentProps> = ({ content, label }) => {
  const [show, setShow] = useState(false);
  const handler = (): void => {
    setShow(!show);
  };
  return (
    <>
      <div className={styles.wrap}>
        <div className={!show ? styles.regular : styles.show}>
          <span onClick={handler}>{label}</span>
          {show ? <div className={styles.content}>{content}</div> : null}
        </div>
      </div>
    </>
  );
};

export default Content;
