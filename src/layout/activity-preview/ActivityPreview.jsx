import React from "react";
import { AppContext } from "@/context/AppContext";
import ActivityTypes from "@/utils/ActivityTypes";
import ActivityIcon from "../timetable-settings/ActivityIcon";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import "@/styles/activity-preview.css";

function ActivityPreview(props) {
  const { chunks, currentChunkIndex, setCurrentChunkIndex } =
    React.useContext(AppContext);
  const { isDrawerOpen } = props;

  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  /**
   * Opens the dialog to end the current activity.
   */
  function handleOpenDialog() {
    setIsDialogOpen(true);
  }

  /**
   * Closes the dialog to end the current activity (and does nothing else).
   */
  function handleCloseDialog() {
    setIsDialogOpen(false);
  }

  /**
   * Ends the current activity and starts the next one
   * (or finishes the class if the current activity is the last one).
   */
  function handleStartNextActivityEarly() {
    handleCloseDialog();
    setCurrentChunkIndex((currentChunkIndex) => currentChunkIndex + 1);
  }

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
        <ActivityIcon activityType={previewContent.activityIcon} />
      </div>
      <Button
        id="activity-preview-start-next"
        variant="outlined"
        onClick={handleOpenDialog}
      >
        <span className="material-symbols-rounded">
          {previewContent.buttonIcon}
        </span>
        {previewContent.buttonText}
      </Button>

      <Dialog
        open={isDialogOpen}
        onClose={handleCloseDialog}
        fullWidth
        maxWidth="xs"
      >
        <DialogTitle>Are you sure?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {currentChunkIndex < chunks.length - 1
              ? "Do you want to end the current activity and move to the next one?"
              : "Do you want to end the class now?"}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleStartNextActivityEarly}>
            <span className="material-symbols-rounded">check</span>Yes
          </Button>
          <Button variant="outlined" onClick={handleCloseDialog}>
            <span className="material-symbols-rounded">close</span>No
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ActivityPreview;
