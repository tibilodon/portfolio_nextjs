import { useState } from "react";
import styles from "./techButton.module.css";

type TechButtonProps = {
  active: boolean;
  label: string;
  current: string;
};

const TechButton: React.FunctionComponent<TechButtonProps> = ({
  active,
  label,
  current,
}) => {
  const [activeStyle, setActiveStyle] = useState(false);
  const isActive = (): void => {
    console.log(current);
    console.log(label);
    if (current === label) {
      setActiveStyle(true);
      console.log("seem slike me active");
    } else {
      setActiveStyle(false);
    }
  };
  return (
    <>
      <div className={styles.wrap}>
        <span
          onClick={isActive}
          className={activeStyle ? styles.active : styles.regular}
        >
          {label}
        </span>
      </div>
    </>
  );
};

export default TechButton;
