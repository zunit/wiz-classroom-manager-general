import React from "react";
import TimeChunkCard from "@/components/timetable/TimeChunkCard.jsx";
import {
  ActivityTypes,
  Difficulties,
  TimeChunk,
} from "../../context/TimetableContext.js";
import "./timetable.css";

function Timetable() {
  const [chunks, setChunks] = React.useState([
    new TimeChunk(15, ActivityTypes.RANDOM),
    new TimeChunk(15, ActivityTypes.INDIVIDUAL),
    new TimeChunk(15, ActivityTypes.RANDOM),
    new TimeChunk(15, ActivityTypes.INDIVIDUAL),
  ]);

  return (
    <div id="timetable-container">
      <p id="timetable-header">Timetable</p>
      <div id="timetable-chunks-container">
        {chunks.map((chunkData) => {
          return <TimeChunkCard chunkData={chunkData} />;
        })}
      </div>
      <button id="button-add-chunk">
        <span class="material-symbols-rounded">add</span>
      </button>
    </div>
  );
}

export default Timetable;
