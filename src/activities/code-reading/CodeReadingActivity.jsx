import React from "react";
import ActivityPrompt from "@/activities/ActivityPrompt";
import ActivityTypes from "@/utils/ActivityTypes";

function CodeReadingActivity() {
  const [randomPrompt, setRandomPrompt] = React.useState(null);
  const [customPrompt, setCustomPrompt] = React.useState("");

  const handleChangePrompt = React.useCallback((event) => {
    setCustomPrompt(event.target.value);
  }, []);

  return (
    <>
      <p>
        In this activity, you will be given some code, and your task is to try
        to figure out what it does!
      </p>

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
