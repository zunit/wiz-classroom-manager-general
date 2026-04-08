import React from "react";
import ActivityPrompt from "@/activities/ActivityPrompt";
import ActivityTypes from "@/utils/ActivityTypes";
import { ToggleButton, ToggleButtonGroup, Tooltip } from "@mui/material";

function ChallengeRoundActivity() {
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
      <h2>Challenge-round time!</h2>
      <p>
        For this challenge-round activity, you will build a game related to the
        given theme.
      </p>
      <p>
        An example of a theme could be "a magical cat in an enchanted forest".
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
        activityType={ActivityTypes.CHALLENGE_ROUND}
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

export default ChallengeRoundActivity;
