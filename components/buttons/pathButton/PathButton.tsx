"use client";
import styles from "./pathButton.module.css";
import { usePathname } from "next/navigation";

import { usePath } from "@/utils/activeContext";
type PathButtonProps = {
  label: string;
  text: string;
};

const PathButton: React.FunctionComponent<PathButtonProps> = ({
  label,
  text,
}) => {
  const pathName = usePathname();
  console.log(pathName);
  const checkIsActive = (): string => {
    let style: string;

    const resultString = pathName.replace("/", "");

    if (resultString === label) {
      return (style = "active");
    }
    if (pathName === "/" && label === "home") {
      return (style = "active");
    } else {
      return (style = "inactive");
    }
  };

  const { path } = usePath();
  const markActive = (): string => {
    let style: string;
    switch (label) {
      case "home":
        style = path === "/" ? "active" : "inactive";
        break;
      case "about":
        style = path === "/about" ? "active" : "inactive";
        break;
      case "project":
        style = path === "/project" ? "active" : "inactive";
        break;
      case "work":
        style = path === "/work" ? "active" : "inactive";
        break;
      case "contact":
        style = path === "/contact" ? "active" : "inactive";
        break;

      default:
        style = "inactive";
        break;
    }
    return style;
  };
  // console.log("PATH VALUE:", path);
  return (
    <>
      <div className={styles.wrap}>
        <h1 className={styles[path ? markActive() : checkIsActive()]}>
          {text}
        </h1>
      </div>
    </>
  );
};

export default PathButton;