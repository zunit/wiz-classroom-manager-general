import { AppProvider } from "@/context/AppContext";
import Timetable from "@/layout/timetable/Timetable.jsx";
import Timer from "@/layout/timer/Timer.jsx";
import ActivityComponent from "@/activities/ActivityComponent";
import { ThemeProvider, createTheme } from "@mui/material";

import "./App.css";
import React from "react";

function App() {
  const [isDarkMode, setIsDarkMode] = React.useState(true);
  const theme = createTheme({
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
        <Timetable />
        <div className="content-container">
          <Timer />
          <div className="activity-container-wrapper">
            <div className="activity-container">
              <ActivityComponent />
            </div>
          </div>
        </div>
      </AppProvider>
    </ThemeProvider>
  );
}

export default App;
