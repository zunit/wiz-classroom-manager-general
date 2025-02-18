import React from "react";
import DefaultPrompt from "@/components/activities/DefaultPrompt";
import CustomPrompt from "@/components/activities/CustomPrompt";
import ActivityTypes from "@/utils/ActivityTypes";
import ActivityIcon from "@/layout/timetable-settings/ActivityIcon";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";

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
      <h1>Design Activity</h1>
      <div style={{ marginBottom: "2rem" }}>
        <ActivityIcon activityType={ActivityTypes.DESIGN} />
      </div>
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
