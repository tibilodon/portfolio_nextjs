import { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Work",
  description: "Work page",
};

export default function Work(params: any) {
  return (
    <>
      <div className={styles.wrap}>
        <h1>work</h1>
      </div>
    </>
  );
}
