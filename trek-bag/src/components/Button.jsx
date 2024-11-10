export default function Button({ buttonType, children, action }) {
  return (
    <button
      onClick={action}
      className={`btn ${buttonType === "secondary" ? "btn--secondary" : ""}`}
    >
      {children}
    </button>
  );
}
