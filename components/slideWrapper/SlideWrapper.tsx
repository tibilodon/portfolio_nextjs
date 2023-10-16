import styles from "./slideWrapper.module.css";

type SlideWrapperProps = {
  children: React.ReactNode;
  show: boolean;
};

const SlideWrapper: React.FunctionComponent<SlideWrapperProps> = ({
  children,
  show,
}) => {
  return (
    <div className={!show ? styles.wrap : `${styles.wrap} ${styles.show}`}>
      {children}
    </div>
  );
};

export default SlideWrapper;
