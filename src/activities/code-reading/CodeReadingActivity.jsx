import React from "react";
import ActivityPrompt from "@/activities/ActivityPrompt";
import ActivityTypes from "@/utils/ActivityTypes";
import ActivityIcon from "@/layout/timetable-settings/ActivityIcon";

function CodeReadingActivity() {
  // const [promptMode, setPromptMode] = React.useState("random");

  const [randomPrompt, setRandomPrompt] = React.useState(null);
  const [customPrompt, setCustomPrompt] = React.useState("");

  // function handleChangePromptMode(event, newPromptMode) {
  //   setPromptMode(newPromptMode);
  // }

  const handleChangePrompt = React.useCallback((event) => {
    setCustomPrompt(event.target.value);
  }, []);

  return (
    <>
      <h1>What Does This Code Do?</h1>
      <div style={{ marginBottom: "2rem" }}>
        <ActivityIcon activityType={ActivityTypes.CODE_READING} />
      </div>
      <p>
        In this activity, you will be given some code, and your task is to try
        to figure out what it does!
      </p>

      {/* <ToggleButtonGroup
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
      </ToggleButtonGroup> */}

      <ActivityPrompt
        activityType={ActivityTypes.CODE_READING}
        promptMode={"random"}
        randomPrompt={randomPrompt}
        setRandomPrompt={setRandomPrompt}
        customPrompt={customPrompt}
        handleChangePrompt={handleChangePrompt}
      />

      <p>Once you are ready, start the timer at the top.</p>
    </>
  );
}

export default CodeReadingActivity;
