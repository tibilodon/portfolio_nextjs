"use client";
import styles from "./pathButton.module.css";

import { usePath } from "@/utils/activeContext";
type PathButtonProps = {
  pathname: string;
  label: string;
};

const PathButton: React.FunctionComponent<PathButtonProps> = ({
  pathname,
  label,
}) => {
  const checkIsActive = (): string => {
    let style: string;

    const resultString = pathname.replace("/", "");

    if (resultString === label.toLocaleLowerCase()) {
      return (style = "active");
    }
    if (pathname === "/" && label === "Home") {
      return (style = "active");
    } else {
      return (style = "inactive");
    }
  };

  const { path } = usePath();
  const markActive = (): string => {
    let style: string;
    switch (label) {
      case "Home":
        style = path === "/" ? "active" : "inactive";
        break;
      case "About":
        style = path === "/about" ? "active" : "inactive";
        break;
      case "Project":
        style = path === "/project" ? "active" : "inactive";
        break;
      case "Work":
        style = path === "/work" ? "active" : "inactive";
        break;
      case "Contact":
        style = path === "/contact" ? "active" : "inactive";
        break;

      default:
        style = "inactive";
        break;
    }
    return style;
  };
  console.log("PATH VALUE:", path);
  return (
    <>
      <div className={styles.wrap}>
        <h1 className={styles[path ? markActive() : checkIsActive()]}>
          {label}
        </h1>
      </div>
    </>
  );
};

export default PathButton;
