"use client";
import Loading from "@/app/loading";
import styles from "./inputForm.module.css";
import { useState, useEffect } from "react";
import { Form, LangOption } from "@/utils/commonTypes";
import RegularButton from "../buttons/regular/RegularButton";
import ExpandingTextfield from "../expandingTextfield/ExpandingTextfield";
import { useRouter } from "next/navigation";

type InputFormProps = {
  lang: LangOption;
  name: string;
  textfield: string;
  button: string;
};

const InputForm: React.FunctionComponent<InputFormProps> = ({
  lang,
  name,
  textfield,
  button,
}) => {
  const router = useRouter();
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
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        //TODO: Handle success

        // setForm({
        //   name: "",
        //   email: "",
        //   message: "",
        //   language: lang,
        // });
        // setIsLoading(false);
        router.push("/thankyou");
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
              required
              id="name"
              value={form.name}
              type={"text"}
              placeholder={name}
              onChange={formHandler}
            />
          </span>

          <span className={styles.inputWrap}>
            <input
              required
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
              onChange={formHandler}
              placeHolder={textfield}
              val={form.message}
            />
          </span>
          <span className={styles.btn}>
            <RegularButton type="submit" label={button} />
          </span>
        </form>
      </div>
    </>
  );
};

export default InputForm;
