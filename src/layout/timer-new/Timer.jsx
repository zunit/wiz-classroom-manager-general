import React from "react";
import { AppContext } from "@/context/AppContext";
import formatTime from "@/utils/formatTime";
import { Fab, Tooltip } from "@mui/material";
import "@/styles/timer-new.css";

function Timer() {
  const { chunks, currentChunkIndex } = React.useContext(AppContext);

  const [timeLeft, setTimeLeft] = React.useState(
    chunks[currentChunkIndex].time
  );
  const [isTimerRunning, setIsTimerRunning] = React.useState(false);
  const [isActivityEnded, setIsActivityEnded] = React.useState(false);

  function handleClickTimerToggle() {
    setIsTimerRunning((isTimerRunning) => !isTimerRunning);
  }

  function handleClickTimerInc() {
    setTimeLeft((timeLeft) => timeLeft + 60);
  }

  function handleClickTimerDec() {
    setTimeLeft((timeLeft) => Math.max(timeLeft - 60, 0));
  }

  // Timer functionality
  React.useEffect(() => {
    let interval;
    if (isTimerRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((timeLeft) => timeLeft - 1);
      }, 1000);
    } else {
      if (timeLeft === 0) {
        setIsActivityEnded(true);
      }
      clearInterval(interval);
      setIsTimerRunning(false);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timeLeft]);

  return (
    <>
      <div id="timer-container">
        <h1 id="timer-display">Time Left: {formatTime(timeLeft)}</h1>
        <div id="timer-controls-container">
          <Tooltip title="Decrease timer by 1 minute">
            <Fab
              size="small"
              color="secondary"
              disabled={isActivityEnded}
              onClick={handleClickTimerDec}
            >
              <span className="material-symbols-rounded">timer_arrow_down</span>
            </Fab>
          </Tooltip>
          <Tooltip title="Play/pause timer">
            <Fab
              color="primary"
              disabled={isActivityEnded}
              onClick={handleClickTimerToggle}
            >
              <span id="timer-toggle" className="material-symbols-rounded">
                {isTimerRunning ? "pause" : "play_arrow"}
              </span>
            </Fab>
          </Tooltip>
          <Tooltip title="Increase timer by 1 minute">
            <Fab
              size="small"
              color="secondary"
              disabled={isActivityEnded}
              onClick={handleClickTimerInc}
            >
              <span className="material-symbols-rounded">timer_arrow_up</span>
            </Fab>
          </Tooltip>
        </div>
        <div id="timer-bottom-border"></div>
      </div>
    </>
  );
}

export default Timer;
