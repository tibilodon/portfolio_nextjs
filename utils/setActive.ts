import { useState } from "react";

export default function useBooleanState(initialState = false) {
  const [value, setValue] = useState(initialState);

  const setTrue = () => setValue(true);
  const setFalse = () => setValue(false);
  const toggle = () => setValue((prevValue) => !prevValue);

  return {
    value,
    setTrue,
    setFalse,
    toggle,
  };
}
