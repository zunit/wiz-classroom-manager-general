import React from "react";
import "@/styles/toggle-button.css";

function ToggleButtonGroup(props) {
  const { selection, orientation, ...otherProps } = props;

  return (
    <div
      className={`toggle-button-group ${
        orientation === "vertical" ? "vertical" : ""
      }`}
      {...otherProps}
    >
      {React.Children.map(props.children, (child) => {
        return React.cloneElement(child, { groupSelection: selection });
      })}
    </div>
  );
}

export default ToggleButtonGroup;
