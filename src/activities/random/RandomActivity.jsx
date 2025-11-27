import React from "react";
import ActivityWheel from "@/activities/random/ActivityWheel";
import ActivityWheelDialog from "@/activities/random/ActivityWheelDialog";

/**
 * The container for the content in the random activity inside the activity page.
 */
function RandomActivity(props) {
  const [generatedActivity, setGeneratedActivity] = React.useState(null);
  const [isWheelDialogOpen, setIsWheelDialogOpen] = React.useState(false);

  const { setCurrentActivity } = props;

  function handleSpinResult(activityType) {
    setGeneratedActivity(activityType);
  }

  // Open wheel dialog automatically when the wheel stops spinning
  React.useEffect(() => {
    if (generatedActivity === null) {
      return;
    }
    setIsWheelDialogOpen(true);
  }, [generatedActivity]);

  function handleCloseWheelDialog() {
    setIsWheelDialogOpen(false);

    setTimeout(() => {
      setGeneratedActivity(null);
    }, 1000);
  }

  function handleWheelConfirm() {
    setIsWheelDialogOpen(false);
    setCurrentActivity(generatedActivity);
  }

  return (
    <>
      <p>Spin the wheel to determine which activity we will be doing!</p>
      <ActivityWheel onSpinFinish={handleSpinResult} />
      <ActivityWheelDialog
        open={isWheelDialogOpen}
        activity={generatedActivity}
        onClose={handleCloseWheelDialog}
        onConfirm={handleWheelConfirm}
      />
    </>
  );
}

export default RandomActivity;
