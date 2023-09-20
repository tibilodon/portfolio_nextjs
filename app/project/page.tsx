import { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Project",
  description: "Project page",
};

export default function Project(params: any) {
  return (
    <>
      <div className={styles.wrap}>
        <h1>project</h1>
      </div>
    </>
  );
}
