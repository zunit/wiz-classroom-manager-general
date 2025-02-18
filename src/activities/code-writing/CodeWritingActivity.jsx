import React from "react";
import ActivityPrompt from "@/activities/ActivityPrompt";
import ActivityTypes from "@/utils/ActivityTypes";
import ActivityIcon from "@/layout/timetable-settings/ActivityIcon";
import { ToggleButton, ToggleButtonGroup, Tooltip } from "@mui/material";

function CodeWritingActivity() {
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
      <h1>Make This Happen!</h1>
      <div style={{ marginBottom: "2rem" }}>
        <ActivityIcon activityType={ActivityTypes.CODE_WRITING} />
      </div>
      <p>
        You will be given a prompt, and your goal is to make it happen using
        code!
      </p>

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
        activityType={ActivityTypes.CODE_WRITING}
        promptMode={promptMode}
        randomPrompt={randomPrompt}
        setRandomPrompt={setRandomPrompt}
        customPrompt={customPrompt}
        handleChangePrompt={handleChangePrompt}
      />

      <p>Once you are ready, start the timer at the top.</p>
    </>
  );
}

export default CodeWritingActivity;
