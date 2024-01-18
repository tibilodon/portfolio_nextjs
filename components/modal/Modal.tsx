"use client";
import { useState, useCallback, useEffect } from "react";
import styles from "./modal.module.css";
import LangButton from "../buttons/langButton/LangButton";
import { TnC } from "@/utils/commonTypes";
import { createCookie, getCookie } from "@/utils/cookieActions";
import Loading from "@/app/loading";

const Modal: React.FunctionComponent = () => {
  const [isTnc, setIsTnc] = useState<TnC>(null);

  useEffect(() => {
    const awaitCookie = async () => {
      const tnc = await getCookie("tnc");

      if (tnc?.value) {
        setIsTnc(tnc.value as TnC);
        if (tnc?.value === "true") {
        }
      } else {
        setIsTnc("false");
      }
    };
    awaitCookie();
  }, []);

  const handler = useCallback((): void => {
    setIsTnc("true");
    createCookie("tnc", "true");
  }, []);

  if (!isTnc) {
    return <Loading />;
  }

  return (
    <>
      {/* 
<!-- The Modal -->*/}
      <div className={isTnc === "true" ? styles.modal : styles.open}>
        {/*  <!-- Modal content -->*/}
        <div className={styles.modalContent}>
          <div className={styles.content}>
            <h1>Cookie Usage Notice</h1>
            <p>
              To enhance your experience on our website, we use cookies. These
              cookies are small pieces of data that are stored on your device.
              We want to assure you that your privacy is important to us, and we
              are committed to being transparent about how we use cookies.
            </p>

            <h1>What Cookies Do We Use?</h1>
            <p>
              We only store one piece of information in the cookies: your
              language choice. This allows us to remember your preferred
              language for a more personalized browsing experience.
            </p>
            <h1>Why Do We Use Cookies?</h1>
            <p>
              Language Preference: Storing your language choice helps us display
              our website in your preferred language automatically, making your
              visit more convenient. Rest assured, we do not collect any
              personally identifiable information through cookies, and they are
              used solely for enhancing your experience on our website. By using
              our website, you agree to the use of cookies in accordance with
              our Privacy Policy. If you have any concerns about your privacy or
              cookie usage, please review our Privacy Policy for more
              information. Thank you for choosing our website. We hope you enjoy
              your visit!
            </p>
          </div>

          <div className={styles.close}>
            <LangButton
              active={true}
              onClick={handler}
              text="Accept and close"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
