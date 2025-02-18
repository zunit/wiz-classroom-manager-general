import React from "react";
import { AppContext } from "@/context/AppContext";
import ActivityCard from "@/layout/timetable-drawer/ActivityCard";
import "@/styles/timetable.css";

function Timetable() {
  const { chunks, currentChunkIndex } = React.useContext(AppContext);

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
    <div id="timetable-drawer-content-container">
      <h2 id="timetable-drawer-header">Timetable</h2>

      <div id="timetable-drawer-card-list-container">
        {chunks.map((chunk, index) => {
          return (
            <ActivityCard
              key={index}
              chunk={chunk}
              progress={getProgressOfChunk(index)}
            />
          );
        })}
      </div>

      {/* For styling only */}
      <div id="timetable-drawer-bottom-spacer"></div>
    </div>
  );
}

export default Timetable;
