import React from "react";
import { Fab, ThemeProvider, Tooltip, createTheme } from "@mui/material";
import { AppContext } from "@/context/AppContext";
import StartingPage from "@/pages/StartingPage";
import ActivityPage from "@/pages/ActivityPage";
import EndingPage from "@/pages/EndingPage";
import "./App.css";

function App() {
  const { chunks, currentChunkIndex, isClassStarted } =
    React.useContext(AppContext);
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const theme = createTheme({
    cssVariables: true,
    palette: {
      mode: isDarkMode ? "dark" : "light",
      background: {
        default: isDarkMode ? "#242424" : "#ffffff",
        inverse: isDarkMode ? "#ffffff" : "#242424",
      },
      text: {
        primary: isDarkMode
          ? "rgba(255, 255, 255, 0.87)"
          : "rgba(0, 0, 0, 0.87)",
        inverse: isDarkMode
          ? "rgba(0, 0, 0, 0.87)"
          : "rgba(255, 255, 255, 0.87)",
      },
      action: {
        hover: isDarkMode ? "#ffffff20" : "#00000010",
      },
      border: {
        default: isDarkMode ? "#ffffff40" : "#00000040",
      },
      primary: {
        main: isDarkMode ? "#8e70fa" : "#6f4ff9",
      },
      secondary: {
        main: isDarkMode ? "#67aba3" : "#00b6a6",
      },
      "activity-card": {
        "pulse-1": isDarkMode ? "#ffffff18" : "#00000010",
        "pulse-2": isDarkMode ? "#ffffff30" : "#00000020",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      {!isClassStarted ? (
        <StartingPage />
      ) : currentChunkIndex < chunks.length ? (
        <ActivityPage />
      ) : (
        <EndingPage />
      )}
      <Tooltip title={`Change to ${isDarkMode ? "light" : "dark"} theme`}>
        <Fab
          id="toggle-theme"
          onClick={() => setIsDarkMode((isDarkMode) => !isDarkMode)}
        >
          <span className="material-symbols-rounded">
            {isDarkMode ? "light_mode" : "dark_mode"}
          </span>
        </Fab>
      </Tooltip>
    </ThemeProvider>
  );
}

export default App;
