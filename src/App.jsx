import Timer from "@/layout/timer/Timer.jsx";
import Timetable from "@/layout/timetable/Timetable.jsx";
import ClassStart from "@/activities/ClassStart.jsx";
import { AppProvider } from "@/context/TimetableContext";

import "./App.css";

function App() {
  return (
    <AppProvider>
      <Timetable />
      <div className="content-container">
        <Timer />
        <div className="activity-container-wrapper">
          <div className="activity-container">
            <ClassStart />
          </div>
        </div>
      </div>
    </AppProvider>
  );
}

export default App;
