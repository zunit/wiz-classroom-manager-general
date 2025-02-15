import React from "react";
import { AppContext } from "@/context/AppContext";
import TimetableDrawer from "@/layout/timetable-drawer/TimetableDrawer";
import Timer from "@/layout/timer/Timer";
import ActivityComponent from "@/activities/ActivityComponent";
import ActivityPreview from "@/layout/activity-preview/ActivityPreview";
import ActivityPreviewDialog from "@/layout/activity-preview/ActivityPreviewDialog";
import ActivityEndDialog from "@/layout/activity-page/ActivityEndDialog";
import Confetti from "@/components/confetti/Confetti";
import "@/styles/activity-page.css";

function ActivityPage() {
  const { currentChunkIndex, setCurrentChunkIndex } =
    React.useContext(AppContext);

  const [isActivityStarted, setIsActivityStarted] = React.useState(false);
  const [isActivityEnded, setIsActivityEnded] = React.useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const [isPreviewDialogOpen, setIsPreviewDialogOpen] = React.useState(false);

  /*
   * The actual value of this state doesn't mean anything.
   * This is purely here so that the ActivityEndDialog can extend the timer
   * and trigger a re-render in the Timer component.
   */
  const [timerExtensionTrigger, setTimerExtensionTrigger] = React.useState(0);

  /*
   * ==========================================================================
   * RELATED TO THE TIMER
   * ==========================================================================
   */

  // Resets some states when moving to a different activity
  React.useEffect(() => {
    setIsActivityStarted(false);
    setIsActivityEnded(false);
  }, [currentChunkIndex]);

  /**
   * Starts the next activity. Triggered by the ActivityEndDialog component.
   */
  function handleStartNextActivity() {
    setCurrentChunkIndex((currentChunkIndex) => currentChunkIndex + 1);
  }

  /**
   * Called when the timer first starts for each activity.
   */
  function handleTimerStart() {
    setIsActivityStarted(true);
  }

  /**
   * Called when the timer reaches zero while running for each activity.
   */
  function handleTimerEnd() {
    setIsActivityEnded(true);
    setIsPreviewDialogOpen(false);
  }

  /**
   * Extends the timer of the current activity by an extra minute.
   * Triggered by the ActivityEndDialog component.
   */
  function handleTimerExtension() {
    setIsActivityEnded(false);
    setTimerExtensionTrigger(
      (timerExtensionTrigger) => timerExtensionTrigger + 1
    );
  }

  /*
   * ==========================================================================
   * RELATED TO THE ACTIVITY PREVIEW
   * ==========================================================================
   */

  /**
   * Opens the dialog to end the current activity.
   */
  function handleOpenPreviewDialog() {
    setIsPreviewDialogOpen(true);
  }

  /**
   * Closes the dialog to end the current activity (and does nothing else).
   */
  function handleClosePreviewDialog() {
    setIsPreviewDialogOpen(false);
  }

  /**
   * Ends the current activity and starts the next one
   * (or finishes the class if the current activity is the last one).
   */
  function handleStartNextActivityEarly() {
    handleClosePreviewDialog();
    setCurrentChunkIndex((currentChunkIndex) => currentChunkIndex + 1);
  }

  return (
    <>
      <TimetableDrawer open={isDrawerOpen} setOpen={setIsDrawerOpen} />

      <div id="activity-page-container" className={isDrawerOpen ? "open" : ""}>
        <Timer
          onTimerStart={handleTimerStart}
          onTimerEnd={handleTimerEnd}
          {...{
            isActivityStarted,
            isActivityEnded,
            timerExtensionTrigger,
          }}
        />
        <ActivityComponent />
      </div>

      <ActivityPreview
        isDrawerOpen={isDrawerOpen}
        onButtonClick={handleOpenPreviewDialog}
      />
      <ActivityPreviewDialog
        open={isPreviewDialogOpen && !isActivityEnded}
        onClose={handleClosePreviewDialog}
        onConfirm={handleStartNextActivityEarly}
      />
      <ActivityEndDialog
        open={isActivityEnded}
        onConfirm={handleStartNextActivity}
        onExtendTimer={handleTimerExtension}
      />
      {isActivityEnded ? <Confetti particleCount={100} runs={1} /> : null}
    </>
  );
}

export default ActivityPage;
