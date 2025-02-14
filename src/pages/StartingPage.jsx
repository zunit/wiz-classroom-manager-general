import React from "react";
import { AppContext } from "@/context/AppContext";
import TimetableSettings from "@/layout/timetable-settings/TimetableSettings";
import { Difficulties, TimeChunkModel } from "@/utils/TimeChunkModel";
import ActivityTypes from "@/utils/ActivityTypes";
import { Button, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { isPositiveInteger } from "@/utils/inputValidation";
import "@/styles/starting-page.css";

function StartingPage() {
  const { chunks, setChunks, setIsClassStarted } = React.useContext(AppContext);
  const [difficulty, setDifficulty] = React.useState("EXPERIENCED");
  const [chunksSetup, setChunksSetup] = React.useState([
    new TimeChunkModel("10", ActivityTypes.RANDOM),
    new TimeChunkModel("20", ActivityTypes.INDIVIDUAL),
    new TimeChunkModel("10", ActivityTypes.RANDOM),
    new TimeChunkModel("20", ActivityTypes.INDIVIDUAL),
  ]);

  function changeDifficulty(event, newDifficulty) {
    setDifficulty(newDifficulty);
  }

  function handleClickStartClass() {
    let renormalizedChunks = [];
    for (let chunk of chunksSetup) {
      renormalizedChunks.push(
        new TimeChunkModel(
          Number.parseInt(chunk.time, 10) * 60,
          chunk.activityType,
          ActivityTypes.hasDifficulties(chunk.activityType)
            ? difficulty
            : Difficulties.NA
        )
      );
    }
    setChunks(renormalizedChunks);
    setIsClassStarted(true);
  }

  return (
    <>
      <h1>Class Setup:</h1>
      <ToggleButtonGroup
        value={difficulty}
        exclusive
        onChange={changeDifficulty}
      >
        <ToggleButton value="BEGINNER" color="success">
          Beginner
        </ToggleButton>
        <ToggleButton value="EXPERIENCED" color="info">
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
          disabled={
            chunksSetup.length === 0 ||
            chunksSetup.some((chunk) => !isPositiveInteger(chunk.time))
          }
          onClick={handleClickStartClass}
        >
          <span className="material-symbols-rounded">start</span>Start Class
        </Button>
      </footer>
    </>
  );
}

export default StartingPage;
