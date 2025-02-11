import "@/styles/text-field.css";

function TextField(props) {
  const { children, style, width, ...textareaProps } = props;

  return (
    <textarea
      className="text-field"
      style={{ ...style, width: width }}
      {...textareaProps}
    >
      {children}
    </textarea>
  );
}

export default TextField;
