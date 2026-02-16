import { useState, useCallback } from "react";

export default function useInput(defaultValue, validationFn) {
  const [enteredValue, setEnteredValue] = useState(defaultValue);
  const [didEdit, setDidEdit] = useState(false);

  const isValidValue = validationFn(enteredValue);

  function handleChangeInput(event) {
    setEnteredValue(event.target.value);
    setDidEdit(false);
  }
  const onBlurInputChange = useCallback(() => {
    setDidEdit(true);
  }, []);

  return {
    value: enteredValue,
    handleChangeInput,
    hasError: didEdit && !isValidValue,
    onBlurInputChange,
  };
}
