import ActivityTypes from "@/utils/ActivityTypes";
import ActivityIcon from "@/layout/timetable-settings/ActivityIcon";

function CodeReadingActivity() {
  return (
    <>
      <h1>What Does This Code Do?</h1>
      <div style={{ marginBottom: "2rem" }}>
        <ActivityIcon activityType={ActivityTypes.CODE_READING} />
      </div>
    </>
  );
}

export default CodeReadingActivity;