import React from "react";
import TimetableSettings from "@/layout/timetable-new/TimetableSettings";
import { Button, ToggleButton, ToggleButtonGroup } from "@mui/material";
import "@/styles/starting-page.css";

function StartingPage() {
  const [difficulty, setDifficulty] = React.useState("experienced");

  function changeDifficulty(event, newDifficulty) {
    setDifficulty(newDifficulty);
  }

  return (
    <>
      <h1>Class Setup:</h1>
      <ToggleButtonGroup
        value={difficulty}
        exclusive
        onChange={changeDifficulty}
      >
        <ToggleButton value="beginner" color="success">Beginner</ToggleButton>
        <ToggleButton value="experienced" color="info">Experienced</ToggleButton>
      </ToggleButtonGroup>
      <TimetableSettings />
      <footer id="starting-page-footer">
        <hr id="starting-page-footer-hr"/>
        <Button id="start-class-button" variant="contained" size="large">
          <span class="material-symbols-rounded">start</span>Start Class
        </Button>
      </footer>
    </>
  );
}

export default StartingPage;
