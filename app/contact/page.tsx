import styles from "./page.module.css";
import type { Metadata } from "next";
import Loading from "../loading";
import InputForm from "@/components/inputForm/InputForm";
import { getCookie } from "@/utils/cookieActions";
import { LangOption } from "@/utils/commonTypes";

//only works with server components
export const metadata: Metadata = {
  title: "Contact",
  description: "Contact page",
};

export default async function Contact() {
  const lang = await getCookie("lang");
  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.hero}>
          <h1>Contact</h1>
          <p>
            Feel free to get contact me any time. I will get back to you as soon
            as I can!
          </p>
        </div>
        <div className={styles.inputs}>
          <InputForm lang={(lang?.value as LangOption) ?? "eng"} />
        </div>
      </div>
    </>
  );
}
