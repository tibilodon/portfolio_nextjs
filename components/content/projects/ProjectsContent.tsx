"use client";
import styles from "./projectsContent.module.css";
import { useState, useEffect } from "react";
import hingyi from "@/public/images/hingyi.png";
import busyant from "@/public/images/busyant.png";
import portfolio from "@/public/images/portfolio.png";
import placeholder from "@/public/images/placeholder.svg";
import { StaticImageData } from "next/image";
import Image from "next/image";

type ProjectsContentProps = {
  text: string;
  btnMore: string;
  btnLess: string;
  url: string;
  projKey: string;
};

const ProjectsContent: React.FunctionComponent<ProjectsContentProps> = ({
  text,
  btnMore,
  btnLess,
  url,
  projKey,
}) => {
  const [show, setShow] = useState<boolean>(false);

  // const findImg = (): StaticImageData => {
  //   switch (projKey) {
  //     case "hingyi":
  //       // return "../../../public/images/hingyi.png";
  //       return hingyi;
  //     // break;
  //     case "busyant":
  //       // return "../../../public/images/busyant.png";
  //       return busyant;
  //     // break;
  //     case "portfolio":
  //       // return "../../../public/images/portfolio.png";
  //       return portfolio;
  //     // break;
  //     default:
  //       // return "../../../public/images/placeholder.svg";
  //       return placeholder;
  //   }
  // };

  const findImg = (): string => {
    switch (projKey) {
      case "hingyi":
        // return "../../../public/images/hingyi.png";
        return hingyi.src;
      // break;
      case "busyant":
        // return "../../../public/images/busyant.png";
        return busyant.src;
      // break;
      case "portfolio":
        // return "../../../public/images/portfolio.png";
        return portfolio.src;
      // break;
      default:
        // return "../../../public/images/placeholder.svg";
        return placeholder.src;
    }
  };

  const customStyle: React.CSSProperties = {
    background: `linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url(${findImg()})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  const customStyleHovered: React.CSSProperties = {
    backgroundImage: `url(${findImg()})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "40vh",
  };

  const [hovered, setHovered] = useState(false);
  const handleMouseEnter = (): void => {
    setHovered(true);
  };

  const handleMouseLeave = (): void => {
    setHovered(false);
  };

  return (
    <>
      <div
        className={styles.wrap}
        style={hovered ? customStyleHovered : customStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* <Image
            src={findImg()}
            priority
            alt={`${projKey} project's screenshot`}
            width={250}
            className={styles.img}
            // height={50}
          /> */}
        <div className={styles.btn}>
          <button onClick={() => setShow(!show)}>
            {show ? btnLess : btnMore}
          </button>
          {show ? (
            <>
              <p>{text}</p>
              <a href={url} target="_blank" rel="noopener noreferrer">
                Visit Website
              </a>
            </>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default ProjectsContent;
