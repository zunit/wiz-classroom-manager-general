import React from "react";
import { AppContext } from "@/context/AppContext";
import ActivityTypes from "@/utils/ActivityTypes";
import ActivityIcon from "../timetable-settings/ActivityIcon";
import { Button } from "@mui/material";
import "@/styles/activity-preview.css";

function ActivityPreview(props) {
  const { chunks, currentChunkIndex } = React.useContext(AppContext);
  const { isDrawerOpen } = props;

  return (
    <div
      id="activity-preview-container"
      className={isDrawerOpen ? " hide" : ""}
    >
      <h1 id="activity-preview-header">
        {currentChunkIndex < chunks.length ? "Next:" : "Almost Done!"}
      </h1>
      <h2 id="activity-preview-activity-title">
        {currentChunkIndex < chunks.length
          ? ActivityTypes.getActivityName(
              chunks[currentChunkIndex + 1].activityType
            )
          : "You are on the last activity! Keep it up!"}
      </h2>
      <div id="activity-preview-icon">
        {currentChunkIndex < chunks.length ? (
          <ActivityIcon activityType={chunks[currentChunkIndex + 1].activityType} />
        ) : (
          <></>
        )}
      </div>
      <Button id="activity-preview-start-next" variant="outlined">Start now</Button>
    </div>
  );
}

export default ActivityPreview;
