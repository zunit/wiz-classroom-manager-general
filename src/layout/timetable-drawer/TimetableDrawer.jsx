import Timetable from "@/layout/timetable-drawer/Timetable";
import { Fab, Tooltip } from "@mui/material";
import "@/styles/timetable-drawer.css";

function TimetableDrawer(props) {
  const { open, setOpen } = props;

  function handleToggleDrawer() {
    setOpen((open) => !open);
  }

  return (
    <>
      <div id="timetable-drawer-container" className={open ? "open" : ""}>
        <Timetable />
        <div
          id="timetable-drawer-toggle-padding"
          className={open ? "open" : ""}
        >
          <Tooltip title={open ? "Hide timetable" : "Show timetable"}>
            <Fab
              id="timetable-drawer-toggle"
              className={open ? "open" : ""}
              onClick={handleToggleDrawer}
            >
              <span
                id="timetable-drawer-toggle-chevron"
                className={`material-symbols-rounded${open ? " open" : ""}`}
              >
                chevron_right
              </span>
            </Fab>
          </Tooltip>
        </div>
      </div>

      {/* For styling only */}
      <div
        id="timetable-drawer-toggle-border"
        className={open ? "open" : ""}
      ></div>
    </>
  );
}

export default TimetableDrawer;
