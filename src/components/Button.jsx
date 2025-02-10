import "@/styles/button.css";

function Button(props) {
  const { children, primary, ...buttonProps } = props;
  return (
    <button className={primary ? "primary" : null} {...buttonProps}>
      {children}
    </button>
  );
}

export default Button;
