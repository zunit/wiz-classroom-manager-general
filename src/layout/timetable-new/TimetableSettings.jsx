import React from "react";
import { Button } from "@mui/material";
// import { AppContext } from "@/context/AppContext";
import { TimeChunkModel } from "@/utils/TimeChunkModel";
import ActivityTypes from "@/utils/ActivityTypes";
import ActivityCard from "./ActivityCard";
import "@/styles/timetable-settings.css";

function TimetableSettings(props) {
  const { chunksSetup, setChunksSetup, ...invalidProps } = props;
  for (let invalidProp in invalidProps) {
    console.warn(
      `"TimetableSettings component does not accept the "${invalidProp}" prop`
    );
  }

  const numOfChunks = React.useRef(chunksSetup.length);

  React.useEffect(() => {
    if (chunksSetup.length > numOfChunks.current) {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    }
    numOfChunks.current = chunksSetup.length;
  }, [chunksSetup]);

  function handleChangeChunkTime(index, newTime) {
    setChunksSetup([
      ...chunksSetup.slice(0, index),
      { ...chunksSetup[index], time: newTime },
      ...chunksSetup.slice(index + 1),
    ]);
  }

  function handleClickAddActivity() {
    let newChunk;
    if (chunksSetup.length % 2 == 0) {
      newChunk = new TimeChunkModel("10", ActivityTypes.RANDOM);
    } else {
      newChunk = new TimeChunkModel("10", ActivityTypes.INDIVIDUAL);
    }
    setChunksSetup([...chunksSetup, newChunk]);
  }

  function handleClickDeleteActivity(index) {
    setChunksSetup([
      ...chunksSetup.slice(0, index),
      ...chunksSetup.slice(index + 1),
    ]);
  }

  return (
    <div className="timetable-settings-container">
      <h2>Timetable Settings:</h2>
      <div className="timetable-cards">
        {chunksSetup.map((chunk, index) => (
          <ActivityCard
            key={index}
            index={index}
            chunk={chunk}
            onChangeChunkTime={handleChangeChunkTime}
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
