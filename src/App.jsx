import React from "react";
import { AppContext } from "@/context/AppContext";
import StartingPage from "@/pages/StartingPage";
import ActivityPage from "@/pages/ActivityPage";
import EndingPage from "@/pages/EndingPage";
import ActivityTypes from "@/utils/ActivityTypes";
import { Difficulties, TimeChunkModel } from "@/utils/TimeChunkModel";
import { Fab, Tooltip, useColorScheme } from "@mui/material";
import "./App.css";

// If true, all activities will appear in the timetable setup
const debug = false;

function App() {
  const { chunks, currentChunkIndex, isClassStarted, resetAppContext } =
    React.useContext(AppContext);

  // Set up the activity chunks in the timetable setup
  // This is here instead of locally in the StartingPage component
  // so the reset button can work when the user is still in the starting page
  const defaultChunkActivityTypes = debug
    ? ActivityTypes.getValidActivityTypes()
    : [
        ActivityTypes.RANDOM,
        ActivityTypes.INDIVIDUAL,
        ActivityTypes.RANDOM,
        ActivityTypes.INDIVIDUAL,
      ];
  const defaultChunksSetup = defaultChunkActivityTypes.map((activityType) => {
    let time = activityType === ActivityTypes.INDIVIDUAL ? "20" : "10";
    let activityDifficulty = ActivityTypes.hasDifficulties(activityType)
      ? difficulty
      : null;
    return new TimeChunkModel(time, activityType, activityDifficulty);
  });
  const [chunksSetup, setChunksSetup] = React.useState(defaultChunksSetup);
  const [difficulty, setDifficulty] = React.useState(Difficulties.EXPERIENCED);

  const { mode, setMode } = useColorScheme();

  function handleChangeTheme() {
    let newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
  }

  function handleReset() {
    setChunksSetup(defaultChunksSetup);
    resetAppContext();
  }

  return (
    <>
      {!isClassStarted ? (
        <StartingPage
          {...{ chunksSetup, setChunksSetup, difficulty, setDifficulty }}
        />
      ) : currentChunkIndex < chunks.length ? (
        <ActivityPage />
      ) : (
        <EndingPage />
      )}

      <Tooltip
        title={`Change to ${mode === "light" ? "dark" : "light"} theme`}
        placement="left"
      >
        <Fab id="toggle-theme" onClick={handleChangeTheme}>
          <span className="material-symbols-rounded">
            {mode === "light" ? "dark_mode" : "light_mode"}
          </span>
        </Fab>
      </Tooltip>

      <Tooltip title="Reset" placement="left">
        <Fab id="button-reset" onClick={handleReset}>
          <span className="material-symbols-rounded">refresh</span>
        </Fab>
      </Tooltip>
    </>
  );
}

export default App;
