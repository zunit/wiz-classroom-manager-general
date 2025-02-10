import React from "react";
import { AppContext } from "@/context/TimetableContext.jsx";

import "@/styles/timer.css";
import "@/styles/button.css";

function Timer() {
  const {
    chunks,
    currentChunkIndex,
    setCurrentChunkIndex,
    isClassStarted,
    setIsClassStarted,
    isClassEnded,
    setIsClassEnded,
    isActivityStarted,
    setIsActivityStarted,
    isActivityPaused,
    setIsActivityPaused,
    isActivityEnded,
    setIsActivityEnded,
    timeLeft,
    setTimeLeft,
  } = React.useContext(AppContext);

  function formatTime(time) {
    const minutes = String(Math.floor(time / 60)).padStart(2, "0");
    const seconds = String(time % 60).padStart(2, "0");
    return `${minutes}:${seconds}`;
  }

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
        <button
          className="primary"
          disabled={isClassEnded}
          onClick={handleActivityButtonClick}
        >
          {getActivityButtonLabel()}
        </button>
        <button
          disabled={
            !isClassStarted || isClassEnded || (!isClassEnded && timeLeft === 0)
          }
          onClick={handleTimerButtonClick}
        >
          {getTimerButtonLabel()}
        </button>
        <button disabled={!isClassStarted || isClassEnded}>Extend Time</button>
      </div>
    </div>
  );
}

export default Timer;
