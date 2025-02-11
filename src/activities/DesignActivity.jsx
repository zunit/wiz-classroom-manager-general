import React from "react";
// import ToggleButton from "@/components/ui/ToggleButton.jsx";
// import ToggleButtonGroup from "@/components/ui/ToggleButtonGroup.jsx";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import CustomPrompt from "@/components/activities/CustomPrompt";
import DefaultPrompt from "@/components/activities/DefaultPrompt";

function DesignActivity() {
  const [promptType, setPromptType] = React.useState("default");

  function handlePromptTypeChange(event, newPromptType) {
    setPromptType(newPromptType);
  }

  function PromptComponent() {
    let promptComponent;
    switch (promptType) {
      case "default":
        promptComponent = <DefaultPrompt />;
        break;
      case "custom":
        promptComponent = <CustomPrompt />;
        break;
      default:
        promptComponent = <DefaultPrompt />;
        console.warn(
          `Invalid prompt type for Design component (was given '${promptType}')`
        );
    }
    return promptComponent;
  }
  return (
    <>
      <h2>Design Activity</h2>
      <p>
        Design a sprite/backdrop with the given theme within the given time
        limit.
      </p>
      <ToggleButtonGroup
        value={promptType}
        exclusive
        onChange={handlePromptTypeChange}
      >
        <ToggleButton value="default">Default</ToggleButton>
        <ToggleButton value="custom">Custom</ToggleButton>
      </ToggleButtonGroup>
      <PromptComponent />
      <p>Once you are ready, start the timer at the top.</p>
    </>
  );
}

export default DesignActivity;
