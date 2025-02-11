import Button from "@/components/ui/Button.jsx";
import "@/styles/toggle-button.css";

function ToggleButton(props) {
  const { children, value, groupSelection, ...buttonProps } = props;

  return (
    <Button
      className={`toggle-button${
        buttonProps.className ? buttonProps.className : ""
      }${groupSelection === value ? " primary" : ""}`}
      {...buttonProps}
    >
      {children}
    </Button>
  );
}

export default ToggleButton;
