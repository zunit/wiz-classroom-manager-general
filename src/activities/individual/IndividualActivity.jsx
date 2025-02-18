import ActivityIcon from "@/layout/timetable-settings/ActivityIcon";
import ActivityTypes from "@/utils/ActivityTypes";

function IndividualActivity() {
  return (
    <>
      <h1>Individual Activity</h1>
      <div style={{ marginBottom: "2rem" }}>
        <ActivityIcon activityType={ActivityTypes.INDIVIDUAL} />
      </div>
      <p>Time to work on your personal Scratch games!</p>
    </>
  );
}

export default IndividualActivity;
