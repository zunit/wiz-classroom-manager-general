import { AppProvider } from "@/context/AppContext";
import Timer from "@/layout/timer/Timer.jsx";
import Timetable from "@/layout/timetable/Timetable.jsx";
import ActivityComponent from "./activities/ActivityComponent";

import "./App.css";

function App() {
  return (
    <AppProvider>
      <Timetable />
      <div className="content-container">
        <Timer />
        <div className="activity-container-wrapper">
          <div className="activity-container">
            <ActivityComponent />
          </div>
        </div>
      </div>
    </AppProvider>
  );
}

export default App;
