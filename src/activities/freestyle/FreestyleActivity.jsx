import ActivityTypes from "@/utils/ActivityTypes";
import ActivityIcon from "@/layout/timetable-settings/ActivityIcon";

function FreestyleActivity() {
  return (
    <>
      <h1>Freestyle!</h1>
      <div style={{ marginBottom: "2rem" }}>
        <ActivityIcon activityType={ActivityTypes.FREESTYLE} />
      </div>
      <p>It's time to get creative!</p>
      <p>Your task is to create anything you'd like that is related to the given prompt.</p>
      <p>This can be a sprite, a backdrop, or even a whole game!</p>
    </>
  );
}

export default FreestyleActivity;
