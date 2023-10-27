"use client";
import styles from "./aboutContent.module.css";
import { useState } from "react";
import { AboutTextsLong } from "@/utils/commonTypes";

type ContentProps = {
  data: AboutTextsLong;
};

const Content: React.FunctionComponent<ContentProps> = ({ data }) => {
  const [show, setShow] = useState<boolean>(false);
  const [val, setVal] = useState<string>("");
  const [current, setCurrent] = useState<string>("");
  const [buttonWidth, setButtonWidth] = useState("100%");

  const handleButtonClick = (tech: string) => {
    // Reduce the button width to 20% when pressed
    if (buttonWidth === "30%" && tech === current) {
      setButtonWidth("100%");
    } else {
      setButtonWidth("30%");
    }
  };
  const handler = (data: string, tech: string): void => {
    const currentTech = tech.toLowerCase();
    handleButtonClick(currentTech);
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
      return ``;
    } else {
      return `${styles.opaque}`;
    }
  };

  return (
    <>
      <div className={styles.wrap}>
        {data.map(({ technologies, technologiesDesc }, index: number) => (
          <div key={index}>
            {technologies.map((tech: string, techIndex: number) => (
              <div key={techIndex} className={styler(tech)}>
                <span
                  style={{ width: buttonWidth }}
                  className={`${styles.btn} ${styles[tech.toLowerCase()]}`}
                  onClick={() =>
                    handler((technologiesDesc as any)[tech.toLowerCase()], tech)
                  }
                >
                  {tech}
                </span>
              </div>
            ))}
          </div>
        ))}
        <div className={styles.regular}>{val}</div>
      </div>
    </>
  );
};

export default Content;
