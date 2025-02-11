import "@/styles/button.css";

function Button(props) {
  const { className, children, primary, ...buttonProps } = props;
  return (
    <button
      className={`${className}${primary ? " primary" : ""}`}
      {...buttonProps}
    >
      {children}
    </button>
  );
}

export default Button;
