import "./App.css";
import ClassStart from "@/activities/ClassStart.jsx";
import Timer from "@/layout/timer/Timer.jsx";
import Timetable from "@/layout/timetable/Timetable.jsx";

function App() {
  return (
    <>
      <Timetable />
      <div className="content-container">
        <Timer />
        <div className="activity-container-wrapper">
          <div className="activity-container">
            <ClassStart />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
