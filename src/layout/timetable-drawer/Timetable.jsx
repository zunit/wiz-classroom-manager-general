import { AppContext } from "@/context/AppContext";
import React from "react";
import ActivityCard from "./ActivityCard";
import "@/styles/timetable-new.css"

function Timetable() {
  const { chunks, currentChunkIndex } = React.useContext(AppContext);
  console.log(chunks);

  function getProgressOfChunk(index) {
    if (index < currentChunkIndex) {
      return "finished";
    } else if (index > currentChunkIndex) {
      return "upcoming";
    } else {
      return "current";
    }
  }

  return (
    <div id="timetable">
      <h1>Timetable</h1>
      {chunks.map((chunk, index) => {
        return <ActivityCard chunk={chunk} progress={getProgressOfChunk(index)} />;
      })}
    </div>
  );
}

export default Timetable;
