import React from "react";
import { Button } from "@mui/material";
import { AppContext } from "@/context/AppContext";
import { TimeChunkModel } from "@/utils/TimeChunkModel";
import ActivityTypes from "@/utils/ActivityTypes";
import ActivityCard from "./ActivityCard";
import "@/styles/timetable-settings.css";

function TimetableSettings() {
  const { setChunks } = React.useContext(AppContext);
  const [chunksLocal, setChunksLocal] = React.useState([
    new TimeChunkModel(600, ActivityTypes.RANDOM),
    new TimeChunkModel(600, ActivityTypes.INDIVIDUAL),
    new TimeChunkModel(600, ActivityTypes.RANDOM),
    new TimeChunkModel(600, ActivityTypes.INDIVIDUAL),
  ]);
  const numOfChunks = React.useRef(chunksLocal.length);

  React.useEffect(() => {
    if (chunksLocal.length > numOfChunks.current) {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    }
    numOfChunks.current = chunksLocal.length;
  }, [chunksLocal]);

  function handleClickAddActivity() {
    let newChunk;
    if (chunksLocal.length % 2 == 0) {
      newChunk = new TimeChunkModel(600, ActivityTypes.RANDOM);
    } else {
      newChunk = new TimeChunkModel(600, ActivityTypes.INDIVIDUAL);
    }
    setChunksLocal([...chunksLocal, newChunk]);
  }

  function handleClickDeleteActivity(index) {
    setChunksLocal([
      ...chunksLocal.slice(0, index),
      ...chunksLocal.slice(index + 1),
    ]);
  }

  return (
    <div className="timetable-settings-container">
      <h2>Timetable Settings:</h2>
      <div className="timetable-cards">
        {chunksLocal.map((chunk, index) => (
          <ActivityCard
            chunk={chunk}
            onDelete={() => handleClickDeleteActivity(index)}
          />
        ))}
      </div>
      <Button
        id="add-activity"
        variant="outlined"
        onClick={handleClickAddActivity}
      >
        <span className="material-symbols-rounded">add</span>Add Activity
      </Button>
    </div>
  );
}

export default TimetableSettings;
