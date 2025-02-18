import React from "react";
import ActivityWheel from "@/activities/random/ActivityWheel";
import ActivityTypes from "@/utils/ActivityTypes";
import ActivityIcon from "@/layout/timetable-settings/ActivityIcon";
import DesignActivity from "@/activities/design/DesignActivity";
import CodeReadingActivity from "@/activities/code-reading/CodeReadingActivity";
import CodeWritingActivity from "@/activities/code-writing/CodeWritingActivity";
import FreestyleActivity from "@/activities/freestyle/FreestyleActivity";
import ActivityWheelDialog from "@/activities/random/ActivityWheelDialog";

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
      <div style={{ marginBottom: "2rem" }}>
        <ActivityIcon activityType={ActivityTypes.RANDOM} />
      </div>
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
