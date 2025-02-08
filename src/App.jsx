import "./App.css";
import ClassStart from "./components/activities/ClassStart.jsx";
import Timer from "./components/Timer.jsx";
import Timetable from "./components/timetable/Timetable.jsx";

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
