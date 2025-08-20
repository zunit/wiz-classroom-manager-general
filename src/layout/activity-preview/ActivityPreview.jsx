import React from "react";
import { AppContext } from "@/context/AppContext";
import ActivityTypes from "@/utils/ActivityTypes";
import ActivityIcon from "@/layout/timetable-settings/ActivityIcon";
import { Button } from "@mui/material";
import "@/styles/activity-preview.css";

/**
 * Renders the activity preview in the activity page.
 */
function ActivityPreview(props) {
  const { chunks, currentChunkIndex } = React.useContext(AppContext);
  const { isDrawerOpen, onButtonClick } = props;

  /**
   * Returns an object containing the content to display in the preview,
   * given that the current activity is NOT the last one.
   *
   * @returns An object containing the content to display in the preview
   */
  function getNextActivityContent() {
    return {
      header: "Next:",
      activityTitle: ActivityTypes.getActivityName(
        chunks[currentChunkIndex + 1].activityType
      ),
      activityIcon: chunks[currentChunkIndex + 1].activityType,
      buttonIcon: "start",
      buttonText: "Start now",
    };
  }

  /**
   * Returns an object containing the content to display in the preview,
   * given that the current activity is the last one.
   *
   * @returns An object containing the content to display in the preview
   */
  function getIsLastActivityContent() {
    return {
      header: "Almost There!",
      activityTitle: "You're on the last activity! Keep it up!",
      activityIcon: "END",
      buttonIcon: "logout",
      buttonText: "End class now",
    };
  }

  // Get the correct content to display in the preview
  const previewContent =
    currentChunkIndex < chunks.length - 1
      ? getNextActivityContent()
      : getIsLastActivityContent();

  return (
    <div
      id="activity-preview-container"
      className={isDrawerOpen ? " hide" : ""}
    >
      <h1 id="activity-preview-header">{previewContent.header}</h1>
      <h2 id="activity-preview-activity-title">
        {previewContent.activityTitle}
      </h2>
      <div id="activity-preview-icon">
        <ActivityIcon activityType={previewContent.activityIcon} size={60} />
      </div>
      <Button
        id="activity-preview-start-next"
        variant="outlined"
        onClick={onButtonClick}
      >
        <span className="material-symbols-rounded">
          {previewContent.buttonIcon}
        </span>
        {previewContent.buttonText}
      </Button>
    </div>
  );
}

export default ActivityPreview;
