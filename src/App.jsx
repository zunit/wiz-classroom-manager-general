import React from "react";
import { AppContext } from "@/context/AppContext";
import StartingPage from "@/pages/StartingPage";
import ActivityPage from "@/pages/ActivityPage";
// import Timetable from "@/layout/timetable/Timetable.jsx";
// import Timer from "@/layout/timer/Timer.jsx";
// import ActivityComponent from "@/activities/ActivityComponent";
import { ThemeProvider, createTheme } from "@mui/material";
import "./App.css";

function App() {
  const { isClassStarted } = React.useContext(AppContext);
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
      {!isClassStarted ? (
        <StartingPage />
      ) : (
        // <>
        //   <Timetable />
        //   <ActivityComponent />
        //   <Timer />
        // </>
        <ActivityPage />
      )}
    </ThemeProvider>
  );
}

export default App;
