import TimeChunkCard from "@/components/timetable/TimeChunkCard.jsx";
import TimeChunkList from "@/components/timetable/TimeChunkList.jsx";
import "@/components/timetable/timetable.css";
import {
  ActivityTypes,
  Difficulties,
  TimeChunk,
} from "@/context/TimetableContext.js";
import React from "react";

function Timetable() {
  // const [chunks, setChunks] = React.useState([
  //   new TimeChunk(15, ActivityTypes.RANDOM),
  //   new TimeChunk(15, ActivityTypes.INDIVIDUAL),
  //   new TimeChunk(15, ActivityTypes.RANDOM),
  //   new TimeChunk(15, ActivityTypes.INDIVIDUAL),
  // ]);

  return (
    <div id="timetable-container">
      <p id="timetable-header">Timetable</p>
      <TimeChunkList />
      <button id="button-add-chunk" title="Add new chunk">
        <span class="material-symbols-rounded">add</span>
      </button>
    </div>
  );
}

export default Timetable;
