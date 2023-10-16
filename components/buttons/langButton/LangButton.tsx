//prop-drilling is not the most elegant solution, however is the easiest in this case (all components globally need to access the current language of the application, which is accessed via cookies)
"use client";
import styles from "./langButton.module.css";

type LangButtonProps = {
  text: string;
  //##might be obsolete if the component sets the state
  active: boolean;
  onClick: () => void;
};
const LangButton: React.FunctionComponent<LangButtonProps> = ({
  text,
  active,
  onClick,
}) => {
  return (
    <>
      <div onClick={onClick} className={styles.wrap}>
        <span
          className={
            active ? `${styles.button} ${styles.active}` : styles.button
          }
        >
          {text}
        </span>
      </div>
    </>
  );
};

export default LangButton;
