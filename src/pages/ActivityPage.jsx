import React from "react";
import { AppContext } from "@/context/AppContext";
import TimetableDrawer from "@/layout/timetable-drawer/TimetableDrawer";
import Timer from "@/layout/timer/Timer";
import ActivityComponent from "@/activities/ActivityComponent";
import ActivityPreview from "@/layout/activity-preview/ActivityPreview";
import ActivityEndDialog from "@/layout/activity-page/ActivityEndDialog";
import "@/styles/activity-page.css";

function ActivityPage() {
  const { currentChunkIndex, setCurrentChunkIndex } =
    React.useContext(AppContext);

  const [isActivityStarted, setIsActivityStarted] = React.useState(false);
  const [isActivityEnded, setIsActivityEnded] = React.useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  /*
   * The actual value of this state doesn't mean anything.
   * This is purely here so that the ActivityEndDialog can extend the timer
   * and trigger a re-render in the Timer component.
   */
  const [timerExtensionTrigger, setTimerExtensionTrigger] = React.useState(0);

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
   * Extends the timer of the current activity by an extra minute.
   * Triggered by the ActivityEndDialog component.
   */
  function handleTimerExtension() {
    setIsActivityEnded(false);
    setTimerExtensionTrigger(
      (timerExtensionTrigger) => timerExtensionTrigger + 1
    );
  }

  return (
    <>
      <TimetableDrawer open={isDrawerOpen} setOpen={setIsDrawerOpen} />

      <div id="activity-page-container" className={isDrawerOpen ? "open" : ""}>
        <Timer
          {...{
            isActivityStarted,
            setIsActivityStarted,
            isActivityEnded,
            setIsActivityEnded,
            timerExtensionTrigger,
          }}
        />
        <ActivityComponent />
      </div>

      <ActivityPreview isDrawerOpen={isDrawerOpen} />
      <ActivityEndDialog
        open={isActivityEnded}
        onConfirm={handleStartNextActivity}
        onExtendTimer={handleTimerExtension}
      />
    </>
  );
}

export default ActivityPage;
