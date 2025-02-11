import React from "react";
import TimeChunkList from "@/layout/timetable/TimeChunkList.jsx";
import Fab from "@mui/material/Fab"

import "@/styles/timetable.css";

function Timetable() {
  return (
    <div id="timetable-container">
      <p id="timetable-header">Timetable</p>
      <TimeChunkList />
      <Fab id="button-add-chunk"><span className="material-symbols-rounded">add</span></Fab>
      {/* <button id="button-add-chunk" title="Add new chunk">
        <span className="material-symbols-rounded">add</span>
      </button> */}
    </div>
  );
}

export default Timetable;
