import React from "react";
import ActivityPrompt from "@/activities/ActivityPrompt";
import ActivityTypes from "@/utils/ActivityTypes";
import { ToggleButton, ToggleButtonGroup, Tooltip } from "@mui/material";

function JeopardyActivity() {
  const [promptMode, setPromptMode] = React.useState("random");

  const [randomPrompt, setRandomPrompt] = React.useState(null);
  const [customPrompt, setCustomPrompt] = React.useState("");

  function handleChangePromptMode(event, newPromptMode) {
    setPromptMode(newPromptMode);
  }

  const handleChangePrompt = React.useCallback((event) => {
    setCustomPrompt(event.target.value);
  }, []);

  return (
    <>
      <ToggleButtonGroup
        value={promptMode}
        exclusive
        onChange={handleChangePromptMode}
      >
        <Tooltip title="Let the computer choose a random prompt">
          <ToggleButton value="random" color="primary">
            Random
          </ToggleButton>
        </Tooltip>
        <Tooltip title="Let the teacher type their own prompt">
          <ToggleButton value="custom" color="primary">
            Custom
          </ToggleButton>
        </Tooltip>
      </ToggleButtonGroup>

      <ActivityPrompt
        activityType={ActivityTypes.JEOPARDY}
        promptMode={promptMode}
        randomPrompt={randomPrompt}
        setRandomPrompt={setRandomPrompt}
        customPrompt={customPrompt}
        handleChangePrompt={handleChangePrompt}
      />
    </>
  );
}

export default JeopardyActivity;
