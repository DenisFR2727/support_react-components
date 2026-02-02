import "./style.css";

export default function Button({ className, icon, children, ...props }) {
  return (
    <button className={`btn ${className}`} {...props}>
      {icon && <span className="btn-icon">{icon}</span>}
      {children && <span className="btn-text">{children}</span>}
    </button>
  );
}
