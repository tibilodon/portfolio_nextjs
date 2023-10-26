"use client";
import styles from "./expandingTextfield.module.css";
import { useEffect, useRef } from "react";

type ExpandingTextfieldProps = {
  id: string;
  val: string;
  placeHolder: string;
  onChange: (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};

const ExpandingTextfield: React.FunctionComponent<ExpandingTextfieldProps> = ({
  id,
  val,
  placeHolder,
  onChange,
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"; // Reset the height
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Set the height to fit the content
    }
  }, [val]);

  return (
    <>
      <div className={styles.wrap}>
        <textarea
          required
          ref={textareaRef}
          id={id}
          value={val}
          placeholder={placeHolder}
          onChange={onChange}
          rows={1}
        />
      </div>
    </>
  );
};

export default ExpandingTextfield;
