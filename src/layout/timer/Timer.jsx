import React from "react";
import { AppContext } from "@/context/AppContext.jsx";
import formatTime from "@/utils/formatTime";
import Button from "@/components/ui/Button";

import "@/styles/timer.css";

function Timer() {
  const {
    chunks,
    currentChunkIndex,
    setCurrentChunkIndex,
    isClassStarted,
    setIsClassStarted,
    isClassEnded,
    setIsClassEnded,
  } = React.useContext(AppContext);

  const [isActivityStarted, setIsActivityStarted] = React.useState(false);
  const [isActivityPaused, setIsActivityPaused] = React.useState(true);
  const [isActivityEnded, setIsActivityEnded] = React.useState(false);
  const [timeLeft, setTimeLeft] = React.useState(-1);

  // Decides what the activity button text should be
  function getActivityButtonLabel() {
    let buttonLabel;
    if (!isClassStarted) {
      buttonLabel = "Start Class";
    } else if (!isActivityEnded) {
      buttonLabel = "End Activity Now";
    } else {
      buttonLabel = "Start Next Activity";
    }
    return buttonLabel;
  }

  // Decides what the timer button text should be
  function getTimerButtonLabel() {
    let buttonLabel;
    if (!isActivityStarted) {
      buttonLabel = "Start Timer";
    } else if (!isActivityPaused) {
      buttonLabel = "Pause Timer";
    } else {
      buttonLabel = "Resume Timer";
    }
    return buttonLabel;
  }

  // Timer functionality
  React.useEffect(() => {
    if (!isActivityStarted) {
      if (timeLeft === 0) {
        setIsActivityEnded(true);
      }
      return;
    }

    let interval;
    if (!isActivityPaused && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((timeLeft) => timeLeft - 1);
      }, 1000);
    } else {
      if (timeLeft === 0) {
        setIsActivityEnded(true);
      }
      clearInterval(interval);
      setIsActivityPaused(true);
    }
    return () => clearInterval(interval);
  }, [isActivityPaused, timeLeft]);

  function handleActivityButtonClick() {
    if (!isClassStarted) {
      // Start the class
      setIsClassStarted(true);
      setTimeLeft(chunks[currentChunkIndex].time);
    } else if (!isActivityEnded) {
      // End the activity
      setTimeLeft(0);
    } else {
      if (currentChunkIndex === chunks.length - 1) {
        setIsClassEnded(true);
      }
      // Go to next activity
      setCurrentChunkIndex((currentChunkIndex) => currentChunkIndex + 1);
      setTimeLeft(chunks[currentChunkIndex].time);
      setIsActivityEnded(false);
      setIsActivityStarted(false);
    }
  }

  function handleTimerButtonClick() {
    if (!isActivityStarted) {
      setIsActivityStarted(true);
      setIsActivityPaused(false);
    } else if (isActivityPaused) {
      setIsActivityPaused(false);
    } else {
      setIsActivityPaused(true);
    }
  }

  return (
    <div id="timer-container">
      <h1 id="timer">
        Time Left:{" "}
        {isClassStarted && currentChunkIndex <= chunks.length - 1
          ? formatTime(timeLeft)
          : "--:--"}
      </h1>
      <div id="timer-controls-container">
        <Button
          primary={true}
          disabled={isClassEnded}
          onClick={handleActivityButtonClick}
        >
          {getActivityButtonLabel()}
        </Button>
        <Button
          disabled={
            !isClassStarted || isClassEnded || (!isClassEnded && timeLeft === 0)
          }
          onClick={handleTimerButtonClick}
        >
          {getTimerButtonLabel()}
        </Button>
        <Button disabled={!isClassStarted || isClassEnded}>Extend Time</Button>
      </div>
    </div>
  );
}

export default Timer;
