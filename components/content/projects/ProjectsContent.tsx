"use client";
import styles from "./projectsContent.module.css";
import { useState } from "react";
import hingyi from "@/public/images/hingyi.jpg";
import busyant from "@/public/images/busyant.jpg";
import portfolio from "@/public/images/portfolio.jpg";
import placeholder from "@/public/images/placeholder.svg";
import LangButton from "@/components/buttons/langButton/LangButton";
import RegularButton from "@/components/buttons/regular/RegularButton";

type ProjectsContentProps = {
  text: string;
  btnMore: string;
  btnLess: string;
  url: string;
  projKey: string;
  siteLabel: string;
};

const ProjectsContent: React.FunctionComponent<ProjectsContentProps> = ({
  text,
  btnMore,
  btnLess,
  url,
  projKey,
  siteLabel,
}) => {
  const [show, setShow] = useState<boolean>(false);
  const [hovered, setHovered] = useState(false);

  const findImg = (): string => {
    switch (projKey) {
      case "hingyi":
        return hingyi.src;
      case "busyant":
        return busyant.src;
      case "portfolio":
        return portfolio.src;
      default:
        return placeholder.src;
    }
  };

  const customStyle: React.CSSProperties = {
    backgroundImage: `linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url(${findImg()})`,
  };

  const customStyleHovered: React.CSSProperties = {
    backgroundImage: `url(${findImg()})`,
  };

  const handleMouseEnter = (): void => {
    setHovered(true);
  };

  const handleMouseLeave = (): void => {
    setHovered(false);
  };

  const handleOnClick = (): void => {
    setShow(!show);
    setHovered(!hovered);
  };

  return (
    <>
      <div
        className={styles.wrap}
        // className={show ? `${styles.wrap} ${styles.wrapShow}` : styles.wrap}
        style={hovered ? customStyleHovered : customStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className={styles.btn}>
          {/* <button onClick={() => setShow(!show)}>
            {show ? btnLess : btnMore}
          </button> */}
          <LangButton
            active={!show}
            onClick={() => setShow(!show)}
            text={show ? btnLess : btnMore}
          />
        </div>
        <div
          className={show ? `${styles.content} ${styles.show}` : styles.content}
        >
          <div className={styles.desc}>
            <p>{text}</p>
            <a href={url} target="_blank" rel="noopener noreferrer">
              <RegularButton label={siteLabel} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsContent;
