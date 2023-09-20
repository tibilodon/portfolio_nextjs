import styles from "./page.module.css";
import type { Metadata } from "next";

//only works with server components
export const metadata: Metadata = {
  title: "Contact",
  description: "Contact page",
};

export default function Contact(params: any) {
  return (
    <>
      <div className={styles.wrap}>
        <h1>Contact</h1>
      </div>
    </>
  );
}
