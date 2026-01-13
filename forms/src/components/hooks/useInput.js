import { useState } from "react";
import { hasMinLength, isEmail, isNotEmpty } from "../../util/validation";
import { useCallback } from "react";

export default function useInput(defaultValue, validationFn) {
  const [enteredValue, setEnteredValue] = useState(defaultValue);
  const [didEdit, setDidEdit] = useState(false);

  const valueIsValid = validationFn(enteredValue);

  const handleInputChange = useCallback((event) => {
    setEnteredValue(event.target.value);
    setDidEdit(false);
  });

  const handleInputBlur = useCallback(() => {
    setDidEdit(true);
  });

  function reset() {
    setEnteredValue(defaultValue);
    setDidEdit(false);
  }

  return {
    value: enteredValue,
    handleInputChange,
    handleInputBlur,
    hasError: didEdit && !valueIsValid,
    reset,
  };
}
