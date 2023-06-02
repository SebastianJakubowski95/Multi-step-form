import { useState } from "react";

export const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);

  function onChangeHandler(event) {
    setValue(event.target.value);
  }

  return {
    value,
    onChangeHandler,
    isValid: validator(value),
  };
};
