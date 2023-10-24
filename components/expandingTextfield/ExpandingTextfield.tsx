"use client";
import styles from "./expandingTextfield.module.css";
import { useState, useEffect, useRef } from "react";

type ExpandingTextfieldProps = {
  id: string;
  val: string;
  placeHolder: string;
  onChange: (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  cols: number;
};

const ExpandingTextfield: React.FunctionComponent<ExpandingTextfieldProps> = ({
  id,
  val,
  placeHolder,
  onChange,
  cols,
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  // const [rowNumbs, setRowNumbs] = useState(1);

  // useEffect(() => {
  //   console.log(window.innerWidth);
  //   let rows = Math.ceil(val.length / cols);
  //   if (rows > 0) {
  //     setRowNumbs(rows);
  //   }
  //   if (rows === 0) {
  //     setRowNumbs(1);
  //   }
  // }, [val, cols]);

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
          ref={textareaRef}
          id={id}
          value={val}
          placeholder={placeHolder}
          onChange={onChange}
          // cols={cols}
          rows={1}
        />
      </div>
    </>
  );
};

export default ExpandingTextfield;
