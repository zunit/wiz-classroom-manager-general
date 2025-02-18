import React from "react";
import ActivityTypes from "@/utils/ActivityTypes";
import ActivityIcon from "@/layout/timetable-settings/ActivityIcon";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";

function CodeWritingActivity() {
  const [promptMode, setPromptMode] = React.useState("random");

  function handleChangePromptMode(event, newPromptMode) {
    setPromptMode(newPromptMode);
  }

  return (
    <>
      <h1>Make This Happen!</h1>
      <div style={{ marginBottom: "2rem" }}>
        <ActivityIcon activityType={ActivityTypes.CODE_WRITING} />
      </div>
      <p>You will be given a challenge that you have to solve using code!</p>

      <ToggleButtonGroup
        value={promptMode}
        exclusive
        onChange={handleChangePromptMode}
      >
        <ToggleButton value="random" color="primary">
          Random
        </ToggleButton>
        <ToggleButton value="pick" color="primary">
          Teacher's Pick
        </ToggleButton>
      </ToggleButtonGroup>
    </>
  );
}

export default CodeWritingActivity;
