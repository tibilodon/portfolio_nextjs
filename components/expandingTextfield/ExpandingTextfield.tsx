"use client";
import { useState, useEffect } from "react";

type ExpandingTextfieldProps = {};

const ExpandingTextfield: React.FunctionComponent<
  ExpandingTextfieldProps
> = () => {
  const [val, setVal] = useState("");
  const [rowNumbs, setRowNumbs] = useState(1);

  useEffect(() => {
    if (val.length % 30 === 0) {
      let ek = val.length / 30;
      console.log("the set val", ek);
      if (ek >= 0) {
        setRowNumbs(ek + 1);
      }
    }
  }, [val]);

  const formHandler = (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { id, value } = e.currentTarget;
    setVal(value);
  };
  return (
    <>
      <textarea
        id="message"
        value={val}
        placeholder="message"
        onChange={formHandler}
        cols={30}
        rows={rowNumbs}
      ></textarea>
    </>
  );
};

export default ExpandingTextfield;
