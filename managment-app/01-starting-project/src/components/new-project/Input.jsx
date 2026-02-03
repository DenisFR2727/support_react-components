export default function Input({ label, textarea, ...props }) {
  return (
    <p>
      <label htmlFor={label}>{label}</label>
      {textarea ? <textarea {...props} /> : <input />}
    </p>
  );
}
