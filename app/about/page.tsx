import { Metadata } from "next";
import styles from "./page.module.css";
import { getCookie } from "@/utils/cookieActions";

export const metadata: Metadata = {
  title: "About",
  description: "About page",
};

export default async function About(props: any) {
  const lang = await getCookie("lang");
  return (
    <>
      <div className={styles.wrap}>
        <h1>about</h1>
        <p>{lang?.value}</p>
      </div>
    </>
  );
}
