import React from "react";
import TimetableSettings from "@/layout/timetable-new/TimetableSettings";
import { Button, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { TimeChunkModel } from "@/utils/TimeChunkModel";
import ActivityTypes from "@/utils/ActivityTypes";
import { isPositiveInteger } from "@/utils/inputValidation";
import "@/styles/starting-page.css";

function StartingPage() {
  const [difficulty, setDifficulty] = React.useState("experienced");
  const [chunksSetup, setChunksSetup] = React.useState([
    new TimeChunkModel("10", ActivityTypes.RANDOM),
    new TimeChunkModel("10", ActivityTypes.INDIVIDUAL),
    new TimeChunkModel("10", ActivityTypes.RANDOM),
    new TimeChunkModel("10", ActivityTypes.INDIVIDUAL),
  ]);

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
        <ToggleButton value="beginner" color="success">
          Beginner
        </ToggleButton>
        <ToggleButton value="experienced" color="info">
          Experienced
        </ToggleButton>
      </ToggleButtonGroup>
      <TimetableSettings
        chunksSetup={chunksSetup}
        setChunksSetup={setChunksSetup}
      />
      <footer id="starting-page-footer">
        <hr id="starting-page-footer-hr" />
        <Button
          id="start-class-button"
          variant="contained"
          size="large"
          disabled={chunksSetup.some((chunk) => !isPositiveInteger(chunk.time))}
        >
          <span className="material-symbols-rounded">start</span>Start Class
        </Button>
      </footer>
    </>
  );
}

export default StartingPage;
