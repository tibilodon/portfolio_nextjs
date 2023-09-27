import styles from "./messageButton.module.css";
import icon from "@/public/icons/message.svg";
import Image from "next/image";
import Link from "next/link";

// export const MessageButton: React.FunctionComponent = () => {
//   return (
//     <div className={styles.wrap}>
//       <Image src={icon} alt="message icon" />
//     </div>
//   );
// };

const MessageButton: React.FunctionComponent = () => {
  return (
    <div className={styles.wrap}>
      <Link href={"/contact"} as={"/contact"}>
        <Image
          className={styles.icon}
          width={35}
          height={35}
          src={icon}
          alt="message icon"
        />
      </Link>
    </div>
  );
};

export default MessageButton;
