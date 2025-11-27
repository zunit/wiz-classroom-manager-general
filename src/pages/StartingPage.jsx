import React from "react";
import { AppContext } from "@/context/AppContext";
import TimetableSettings from "@/layout/timetable-settings/TimetableSettings";
import { Difficulties, TimeChunkModel } from "@/utils/TimeChunkModel";
import ActivityTypes from "@/utils/ActivityTypes";
import { Button, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { isPositiveInteger } from "@/utils/inputValidation";
import "@/styles/starting-page.css";

/**
 * Renders the page that loads when the app is first opened.
 */
function StartingPage(props) {
  const { setChunks, setIsClassStarted } = React.useContext(AppContext);

  const { chunksSetup, setChunksSetup, difficulty, setDifficulty } = props;

  function changeDifficulty(event, newDifficulty) {
    setDifficulty(newDifficulty);
  }

  /**
   * Button click event handler for the START CLASS button at the bottom of the page.
   */
  function handleClickStartClass() {
    // Renormalizes the chunks, as any changes to the timetable setup
    // will have converted the TimeChunkModel objects to regular objects
    // See TimetableSettings component for more details
    let renormalizedChunks = chunksSetup.map(
      (chunk) =>
        new TimeChunkModel(
          Number.parseInt(chunk.time, 10) * 60,
          chunk.activityType,
          ActivityTypes.hasDifficulties(chunk.activityType)
            ? difficulty
            : Difficulties.NA
        )
    );
    setChunks(renormalizedChunks);
    setIsClassStarted(true);
  }

  return (
    <>
      <h1>Class Setup</h1>

      <div id="difficulty-select-container">
        <h2 id="difficulty-select-header">Difficulty: </h2>
        <ToggleButtonGroup
          value={difficulty}
          exclusive
          onChange={changeDifficulty}
        >
          <ToggleButton value={Difficulties.BEGINNER} color="success">
            Beginner
          </ToggleButton>
          {/* <ToggleButton value={Difficulties.EXPERIENCED} color="info">
            Experienced
          </ToggleButton> */}
        </ToggleButtonGroup>
      </div>

      <TimetableSettings
        chunksSetup={chunksSetup}
        setChunksSetup={setChunksSetup}
      />

      <footer id="starting-page-footer">
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
          <span className="material-symbols-rounded">login</span>Start Class
        </Button>
      </footer>
    </>
  );
}

export default StartingPage;
