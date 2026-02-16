export default function Input({
  classes,
  htmlFor,
  label,
  id,
  error,
  ...props
}) {
  return (
    <>
      <label htmlFor={htmlFor}>{label}</label>
      <input id={id} {...props} />
      {error && <p className="error">{error}</p>}
    </>
  );
}
