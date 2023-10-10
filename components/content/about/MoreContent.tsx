"us client";
import styles from "./moreContent.module.css";
import { useCallback } from "react";
type MoreContentProps = {
  content: string;
  show: boolean;
};

const MoreContent: React.FunctionComponent<MoreContentProps> = ({
  content,
  show,
}) => {
  //   console.log(keys);

  return (
    <>
      <div className={styles.wrap}>
        {/* <span>{keys}</span> */}
        {show ? <span>{content}</span> : null}
      </div>
    </>
  );
};

export default MoreContent;
