import styles from "./regularButton.module.css";

type RegularButtonProps = {
  label: string;
  type?: "button" | "submit" | "reset";
};

const RegularButton: React.FunctionComponent<RegularButtonProps> = ({
  label,
  type,
}) => {
  return (
    <>
      <button type={type} className={styles.btn}>
        {label}
      </button>
    </>
  );
};

export default RegularButton;
