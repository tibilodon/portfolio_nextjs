"use client";
import Loading from "@/app/loading";
import styles from "./inputForm.module.css";
import { useState, useCallback, useEffect } from "react";
import { Form, LangOption } from "@/utils/commonTypes";
import RegularButton from "../buttons/regular/RegularButton";
import ExpandingTextfield from "../expandingTextfield/ExpandingTextfield";

type InputFormProps = { lang: LangOption };

const InputForm: React.FunctionComponent<InputFormProps> = ({ lang }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [form, setForm] = useState<Form>({
    name: "",
    email: "",
    message: "",
    language: lang,
  });

  useEffect(() => {
    setForm((prevVals) => ({
      ...prevVals,
      language: lang,
    }));
  }, [, lang]);

  const formHandler = (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { id, value } = e.currentTarget;
    setForm((prevVals) => ({
      ...prevVals,
      [id]: value,
    }));
  };

  //form handler
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const response = await fetch("/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setIsLoading(false);
        //TODO: Handle success
        console.log("User added successfully");

        setForm({
          name: "",
          email: "",
          message: "",
          language: lang,
        });
      } else {
        // Handle errors
        console.error("Error adding user");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <div className={styles.wrap}>
        <form onSubmit={handleSubmit}>
          <span className={styles.inputWrap}>
            <input
              id="name"
              value={form.name}
              type={"text"}
              placeholder={"name"}
              onChange={formHandler}
            />
          </span>

          <span className={styles.inputWrap}>
            <input
              id="email"
              value={form.email}
              type={"email"}
              placeholder={"e-mail"}
              onChange={formHandler}
            />
          </span>
          <span className={styles.textarea}>
            <ExpandingTextfield
              id="message"
              cols={30}
              onChange={formHandler}
              placeHolder="your message"
              val={form.message}
            />
          </span>
          <span className={styles.btn}>
            <RegularButton type="submit" label="Submit" />
          </span>
        </form>
      </div>
    </>
  );
};

export default InputForm;
