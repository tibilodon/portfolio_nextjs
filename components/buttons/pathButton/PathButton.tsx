import styles from "./pathButton.module.css";
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

    console.log(resultString); // Output: "contact"

    if (resultString === label.toLocaleLowerCase()) {
      return (style = "active");
    }
    if (pathname === "/" && label === "Home") {
      return (style = "active");
    } else {
      return (style = "inactive");
    }
  };
  //if pathname === label.toLowercase=>active|inactive

  return (
    <>
      <div className={styles.wrap}>
        <h1 className={styles[checkIsActive()]}>{label}</h1>
      </div>
    </>
  );
};

export default PathButton;
