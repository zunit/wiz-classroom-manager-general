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

  React.useEffect(() => {
    setIsActivityStarted(false);
    setIsActivityEnded(false);
  }, [currentChunkIndex]);

  /**
   * Handles the onClose event of the ActivityEndDialog component.
   * 
   * @param {Event} event Currently not used.
   * @param {String} reason The reason for closing the dialog. Used to determine what to do next.
   */
  function handleCloseActivityEndDialog(event, reason) {
    if (["escapeKeyDown", "backdropClick"].includes(reason)) {
      return;
    } else if (reason === "extendTime") {
      setIsActivityEnded(false);
      setTimerExtensionTrigger((timerExtensionTrigger) => timerExtensionTrigger + 1);
    } else if (reason === "goToNextActivity") {
      setCurrentChunkIndex((currentChunkIndex) => currentChunkIndex + 1);
    } else {
      console.warn(
        `Given unknown reason for closing the activity end dialog (was given "${reason}")`
      );
    }
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
        onClose={handleCloseActivityEndDialog}
      />
    </>
  );
}

export default ActivityPage;
