import { forwardRef } from "react";

const Input = forwardRef(function Input(
  { classes, label, textarea, ...props },
  ref,
) {
  return (
    <>
      <label htmlFor={label}>{label}</label>
      {textarea ? (
        <textarea className={classes} ref={ref} {...props} />
      ) : (
        <input className={classes} ref={ref} {...props} />
      )}
    </>
  );
});
export default Input;
