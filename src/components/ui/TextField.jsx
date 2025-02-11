import "@/styles/text-field.css";

function TextField(props) {
  const { style, width, className, ...textareaProps } = props;

  return (
    <textarea
      className={`text-field${className ? ` ${className}` : ""}`}
      style={{ ...style, width: width }}
      {...textareaProps}
    />
  );
}

export default TextField;
