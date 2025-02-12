import { AppContext, AppProvider } from "@/context/AppContext";
import Timetable from "@/layout/timetable/Timetable.jsx";
import Timer from "@/layout/timer/Timer.jsx";
import ActivityComponent from "@/activities/ActivityComponent";
import { ThemeProvider, createTheme } from "@mui/material";

import "./App.css";
import React from "react";
import StartingPage from "@/pages/StartingPage";

function App() {
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
      <AppProvider>
        <StartingPage />
      </AppProvider>
    </ThemeProvider>
  );
}

export default App;
