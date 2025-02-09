import React from "react";
import "@/styles/timer.css";

function Timer() {
  const [timeLeft, setTimeLeft] = React.useState(0);
  const [isTimerStarted, setIsTimerStarted] = React.useState(false);
  const [isTimerRunning, setIsTimerRunning] = React.useState(false);

  function formatTime(time) {
    const minutes = String(Math.floor(time / 60)).padStart(2, "0");
    const seconds = String(time % 60).padStart(2, "0");
    return `${minutes}:${seconds}`;
  }

  function setTimerButtonLabel() {
    let buttonLabel;
    if (!isTimerStarted) {
      buttonLabel = "Start Timer";
    } else if (isTimerRunning) {
      buttonLabel = "Pause Timer";
    } else {
      buttonLabel = "Resume Timer";
    }

    return buttonLabel;
  }

  return (
    <div id="timer-container">
      <h1 id="timer">Time Left: {isTimerStarted ? formatTime(timeLeft) : "--:--"}</h1>
      <div id="timer-controls-container">
        <button className="primary">{setTimerButtonLabel()}</button>
        <button>Extend Time</button>
        <button>End Activity Now</button>
      </div>
    </div>
  );
}

export default Timer;
