"use client";
import styles from "./thankYouContent.module.css";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

type ThankYouContentProps = {
  title: string;
  content: string;
};

const ThankYouContent: React.FunctionComponent<ThankYouContentProps> = ({
  title,
  content,
}) => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 10000);
  });
  return (
    <div className={styles.wrap}>
      <h1>{title}</h1>
      <h3>{content}</h3>
    </div>
  );
};

export default ThankYouContent;
