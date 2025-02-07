import React from "react";

function TimeControls() {
  const [timeLeft, setTimeLeft] = React.useState(0);
  const [isTimerRunning, setIsTimerRunning] = React.useState(false);

  function formatTime(time) {
    const minutes = String(Math.floor(time / 60)).padStart(2, "0");
    const seconds = String(time % 60).padStart(2, "0");
    return `${minutes}:${seconds}`;
  }

  return (
    <>
      <h1>Time Left: {formatTime(timeLeft)}</h1>
      <button>{isTimerRunning ? "Pause" : "Resume"} Timer</button>
      <button>Extend Time</button>
      <button>End Activity Now</button>
    </>
  );
}

export default TimeControls;
