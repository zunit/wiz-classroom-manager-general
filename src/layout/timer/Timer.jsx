import React from "react";
import { AppContext } from "@/context/AppContext";
import { Fab, Tooltip } from "@mui/material";
import formatTime from "@/utils/formatTime";
import "@/styles/timer.css";

function Timer(props) {
  const { chunks, currentChunkIndex } = React.useContext(AppContext);

  const {
    isActivityStarted,
    isActivityEnded,
    onTimerStart,
    onTimerEnd,
    timerExtensionTrigger,
  } = props;

  const [timeLeft, setTimeLeft] = React.useState(
    chunks[currentChunkIndex].time
  );
  const [isTimerRunning, setIsTimerRunning] = React.useState(false);

  function handleClickTimerToggle() {
    if (!isActivityStarted) {
      onTimerStart();
    }
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
    // Prevent timer from starting when the component first mounts
    if (!isActivityStarted) {
      return;
    }

    let interval;
    if (isTimerRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((timeLeft) => timeLeft - 1);
      }, 1000);
    } else {
      if (timeLeft === 0) {
        onTimerEnd();
      }
      clearInterval(interval);
      setIsTimerRunning(false);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timeLeft]);

  // Reset timer when activity changes
  React.useEffect(() => {
    setTimeLeft(chunks[currentChunkIndex].time);
    setIsTimerRunning(false);
  }, [currentChunkIndex]);

  // Timer extension triggered by the ActivityEndDialog component
  React.useEffect(() => {
    // Prevent this from triggering when the component first mounts
    if (timerExtensionTrigger === 0) {
      return;
    }
    setTimeLeft(60);
  }, [timerExtensionTrigger]);

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
      </div>
    </>
  );
}

export default Timer;
