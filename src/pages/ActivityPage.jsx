import React from "react";
import TimetableDrawer from "@/layout/timetable-drawer/TimetableDrawer";
import Timer from "@/layout/timer-new/Timer";
import ActivityComponent from "@/activities/ActivityComponent";
import "@/styles/activity-page.css"

function ActivityPage() {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  return (
    <>
      <TimetableDrawer open={isDrawerOpen} setOpen={setIsDrawerOpen} />
      <div
        id="activity-page-container"
        className={isDrawerOpen ? "open" : ""}
      >
        <Timer />
        <ActivityComponent />
      </div>
    </>
  );
}

export default ActivityPage;
