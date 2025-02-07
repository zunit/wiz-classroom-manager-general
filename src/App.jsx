import "./App.css";
import ClassStart from "./components/activities/ClassStart.jsx";
import TimeControls from "./components/TimeControls.jsx";
import Timetable from "./components/Timetable.jsx";

function App() {
  return (
    <>
      <TimeControls />
      <Timetable />
      <ClassStart />
    </>
  );
}

export default App;
