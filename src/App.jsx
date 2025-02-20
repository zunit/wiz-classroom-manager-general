import React from "react";
import { AppContext } from "@/context/AppContext";
import StartingPage from "@/pages/StartingPage";
import ActivityPage from "@/pages/ActivityPage";
import EndingPage from "@/pages/EndingPage";
import { Fab, Tooltip, useColorScheme } from "@mui/material";
import "./App.css";

function App() {
  const { chunks, currentChunkIndex, isClassStarted } =
    React.useContext(AppContext);

  const { mode, setMode } = useColorScheme();

  function handleChangeTheme() {
    let newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
  }

  return (
    <>
      {!isClassStarted ? (
        <StartingPage />
      ) : currentChunkIndex < chunks.length ? (
        <ActivityPage />
      ) : (
        <EndingPage />
      )}

      <Tooltip title={`Change to ${mode === "light" ? "dark" : "light"} theme`}>
        <Fab id="toggle-theme" onClick={handleChangeTheme}>
          <span className="material-symbols-rounded">
            {mode === "light" ? "dark_mode" : "light_mode"}
          </span>
        </Fab>
      </Tooltip>
    </>
  );
}

export default App;
