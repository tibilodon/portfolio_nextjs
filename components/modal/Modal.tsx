"use client";
import { useState } from "react";
import styles from "./modal.module.css";

const Modal: React.FunctionComponent = () => {
  const [show, setShow] = useState<boolean>(false);
  const modalHandler = (): void => {
    setShow(!show);
  };
  return (
    <>
      {/* <!-- Trigger/Open The Modal -->*/}
      <button onClick={modalHandler}>Open Modal</button>

      {/* 
<!-- The Modal -->*/}
      <div
        onClick={modalHandler}
        className={!show ? styles.modal : styles.open}
      >
        {/*  <!-- Modal content -->*/}
        <div className={styles.modalContent}>
          <span onClick={modalHandler} className={styles.close}>
            xxx
          </span>
          <p>Some text in the Modal..</p>
        </div>
      </div>
    </>
  );
};

export default Modal;
