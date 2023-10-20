"use client";
import styles from "./aboutContent.module.css";
import { useState } from "react";
import { AboutTextsLong, Technologies } from "@/utils/commonTypes";

type ContentProps = {
  // label: string;
  // content: string;
  data: AboutTextsLong;
};

const Content: React.FunctionComponent<ContentProps> = ({
  // content,
  // label,
  data,
}) => {
  const [show, setShow] = useState<boolean>(false);
  const [val, setVal] = useState<string>("");
  const [current, setCurrent] = useState<string>("");
  const handler = (data: string, tech: string): void => {
    const currentTech = tech.toLowerCase();
    setShow(true);
    setVal(data);
    setCurrent(currentTech);

    if (currentTech === current) {
      if (!show) {
        setShow(true);
      } else {
        setShow(false);
        setCurrent("");
      }
    }
  };

  const styler = (data: string): string => {
    if (!show) {
      return "";
    }
    if (data.toLocaleLowerCase() === current) {
      return `${styles.notOpaque}`;
    } else {
      return `${styles.opaque}`;
    }
  };

  return (
    <>
      <div className={styles.wrap}>
        <div className={!show ? styles.contentWrap : styles.contentWrapShow}>
          {data.map(({ technologies, technologiesDesc }, index: number) => (
            <div
              className={
                !show ? styles.tech : `${styles.tech} ${styles.techShow}`
              }
              key={index}
            >
              {technologies.map((tech: string, techIndex: number) => (
                <div key={techIndex} className={styler(tech)}>
                  <span
                    className={`${styles.btn} ${styles[tech.toLowerCase()]}`}
                    onClick={() =>
                      handler(
                        (technologiesDesc as any)[tech.toLowerCase()],
                        tech
                      )
                    }
                  >
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          ))}
          {show ? (
            <div className={styles.tech}>
              <div
                className={
                  !show ? styles.regular : `${styles.regular} ${styles.show}`
                }
              >
                {val}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Content;
