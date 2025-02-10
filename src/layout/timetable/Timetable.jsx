import React from "react";
import TimeChunkList from "@/layout/timetable/TimeChunkList.jsx";

import "@/styles/timetable.css";

function Timetable() {
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
