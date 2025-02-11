import React from "react";
import ToggleButton from "@/components/ui/ToggleButton.jsx";
import ToggleButtonGroup from "@/components/ui/ToggleButtonGroup.jsx";
import CustomPrompt from "@/components/activities/CustomPrompt";

function DefaultDesignPrompt() {
  return <h1>Default Design Prompt Component</h1>;
}

function DesignActivity() {
  const [promptType, setPromptType] = React.useState("default");

  function PromptComponent() {
    let promptComponent;
    switch (promptType) {
      case "default":
        promptComponent = <DefaultDesignPrompt />;
        break;
      case "custom":
        promptComponent = <CustomPrompt />;
        break;
      default:
        promptComponent = <DefaultDesignPrompt />;
        console.warn(
          `Invalid prompt type for Design component (was given '${promptType}')`
        );
    }
    return promptComponent;
  }
  return (
    <>
      <h1>Design Activity</h1>
      <p>
        Design a sprite/backdrop with the given theme within the given time
        limit.
      </p>
      <ToggleButtonGroup selection={promptType}>
        <ToggleButton value="default" onClick={() => setPromptType("default")}>
          Default
        </ToggleButton>
        <ToggleButton value="custom" onClick={() => setPromptType("custom")}>
          Custom
        </ToggleButton>
      </ToggleButtonGroup>
      <PromptComponent />
      <p>Once you are ready, start the timer at the top.</p>
    </>
  );
}

export default DesignActivity;
