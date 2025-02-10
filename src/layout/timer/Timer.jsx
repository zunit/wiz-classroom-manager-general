import React from "react";
import { AppContext } from "@/context/TimetableContext.jsx";

import "@/styles/timer.css";

function Timer() {
  const {
    isClassStarted,
    setIsClassStarted,
    isActivityStarted,
    setIsActivityStarted,
    isActivityPaused,
    setIsActivityPaused,
    timeLeft,
    setTimeLeft,
  } = React.useContext(AppContext);

  function formatTime(time) {
    const minutes = String(Math.floor(time / 60)).padStart(2, "0");
    const seconds = String(time % 60).padStart(2, "0");
    return `${minutes}:${seconds}`;
  }

  function setActivityButtonLabel() {
    let buttonLabel;
    if (!isClassStarted) {
      buttonLabel = "Start Class";
    } else if (!isActivityStarted) {
      buttonLabel = "Start Activity";
    } else {
      buttonLabel = "End Activity Now";
    }
    return buttonLabel;
  }

  function setTimerButtonLabel() {
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

  return (
    <div id="timer-container">
      <h1 id="timer">
        Time Left: {isActivityStarted ? formatTime(timeLeft) : "--:--"}
      </h1>
      <div id="timer-controls-container">
        <button className="primary">{setActivityButtonLabel()}</button>
        <button>{setTimerButtonLabel()}</button>
        <button>Extend Time</button>
      </div>
    </div>
  );
}

export default Timer;
