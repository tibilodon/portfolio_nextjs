import styles from "./page.module.css";
import type { Metadata } from "next";
import Loading from "../loading";
import InputForm from "@/components/inputForm/InputForm";
import { getCurrentLang, findTextContact } from "@/utils/helpers";
import { LangOption, Contact as ContactType } from "@/utils/commonTypes";

//only works with server components
export const metadata: Metadata = {
  title: "Contact",
  description: "Contact page",
};

export default async function Contact() {
  const lang = await getCurrentLang();
  const content: ContactType = findTextContact(lang as LangOption);

  if (!content) {
    return <Loading />;
  }

  const { title, hero, name, textfield, button } = content;

  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.hero}>
          <h1>{title}</h1>
          <p>{hero}</p>
        </div>
        <div className={styles.inputs}>
          <InputForm
            name={name}
            textfield={textfield}
            button={button}
            lang={(lang as LangOption) ?? "eng"}
          />
        </div>
      </div>
    </>
  );
}
