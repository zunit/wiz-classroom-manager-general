import React from "react";
import { ThemeProvider, createTheme } from "@mui/material";
import { AppContext } from "@/context/AppContext";
import StartingPage from "@/pages/StartingPage";
import ActivityPage from "@/pages/ActivityPage";
import EndingPage from "@/pages/EndingPage";
import "./App.css";

function App() {
  const { chunks, currentChunkIndex, isClassStarted } = React.useContext(AppContext);
  const [isDarkMode, setIsDarkMode] = React.useState(true);
  const theme = createTheme({
    cssVariables: true,
    palette: {
      mode: isDarkMode ? "dark" : "light",
      primary: {
        main: isDarkMode ? "#b19afa" : "#6f4ff9",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      {!isClassStarted ? <StartingPage /> : (currentChunkIndex < chunks.length) ? <ActivityPage /> : <EndingPage />}
    </ThemeProvider>
  );
}

export default App;
