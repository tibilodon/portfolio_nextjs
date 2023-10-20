import styles from "./workContentWrapper.module.css";
import Image from "next/image";
import icon from "@/public/icons/work_icon.svg";

type Props = { children: React.ReactNode; duration: string };

const WorkContentWrapper: React.FunctionComponent<Props> = ({
  children,
  duration,
}) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.hero}>
        <Image width={50} height={50} priority src={icon} alt="work icon" />
        <h5>{duration}</h5>
      </div>
      <div className={styles.children}>
        <span>{children}</span>
      </div>
    </div>
  );
};

export default WorkContentWrapper;
