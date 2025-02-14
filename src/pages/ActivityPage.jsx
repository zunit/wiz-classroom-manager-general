import React from "react";
import { AppContext } from "@/context/AppContext";
import TimetableDrawer from "@/layout/timetable-drawer/TimetableDrawer";
import Timer from "@/layout/timer-new/Timer";
import ActivityComponent from "@/activities/ActivityComponent";
import "@/styles/activity.css"

function ActivityPage() {
  const { chunks, currentChunkIndex, setCurrentChunkIndex, setIsClassEnded } =
    React.useContext(AppContext);

  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  return (
    <>
      <TimetableDrawer open={isDrawerOpen} setOpen={setIsDrawerOpen} />
      <div
        id="activity-container"
        className={isDrawerOpen ? "open" : ""}
        // style={{
        //   marginLeft: isDrawerOpen ? "360px" : "0",
        //   transition: "margin-left 0.3s ease",
        // }}
      >
        <Timer />
        <ActivityComponent />
      </div>
    </>
  );
}

export default ActivityPage;
