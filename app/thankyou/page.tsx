"use client";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ThankYou = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 10000);
  });

  return (
    <div className={styles.wrap}>
      <h1>Thank You!</h1>
      <h3>I will get back to you shortly.</h3>
    </div>
  );
};

export default ThankYou;
