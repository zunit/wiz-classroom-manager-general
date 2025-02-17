import React from "react";
import ActivityWheel from "./ActivityWheel";
import DesignActivity from "./DesignActivity";
import ActivityTypes from "@/utils/ActivityTypes";
import CodeReadingActivity from "./CodeReadingActivity";
import CodeWritingActivity from "./CodeWritingActivity";
import FreestyleActivity from "./FreestyleActivity";
import ActivityWheelDialog from "./ActivityWheelDialog";

function RandomActivity() {
  const [activity, setActivity] = React.useState(ActivityTypes.NULL);
  const [isWheelMode, setIsWheelMode] = React.useState(true);
  const [isWheelDialogOpen, setIsWheelDialogOpen] = React.useState(false);

  function handleSpinResult(activityType) {
    setActivity(activityType);
  }

  React.useEffect(() => {
    if (activity === ActivityTypes.NULL) {
      return;
    }
    setIsWheelDialogOpen(true);
  }, [activity]);

  function handleCloseWheelDialog() {
    setIsWheelDialogOpen(false);

    setTimeout(() => {
      setActivity(ActivityTypes.NULL);
    }, 1000);
  }

  function goToActivity() {
    setIsWheelDialogOpen(false);
    setIsWheelMode(false);
  }

  function getActivity() {
    switch (activity) {
      case ActivityTypes.DESIGN:
        return <DesignActivity />;
      case ActivityTypes.CODE_READING:
        return <CodeReadingActivity />;
      case ActivityTypes.CODE_WRITING:
        return <CodeWritingActivity />;
      case ActivityTypes.FREESTYLE:
        return <FreestyleActivity />;
      default:
        console.warn(
          `Activity type in random group activity was set to "${activity}"`
        );
        return <></>;
    }
  }

  return isWheelMode ? (
    <>
      <h1>Random Group Activity</h1>
      <p>Spin the wheel to determine which activity we will be doing!</p>
      <ActivityWheel onSpinFinish={handleSpinResult} />
      <ActivityWheelDialog
        open={isWheelDialogOpen}
        activity={activity}
        onClose={handleCloseWheelDialog}
        onConfirm={goToActivity}
      />
    </>
  ) : (
    getActivity()
  );
}

export default RandomActivity;
