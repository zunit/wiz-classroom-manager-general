import ActivityCustomPrompt from "@/activities/ActivityCustomPrompt";
import ActivityRandomPrompt from "@/activities/ActivityRandomPrompt";

/**
 * Contains the activity content.
 * Can be either a custom prompt, or a random prompt.
 */
function ActivityPrompt(props) {
  const {
    activityType,
    promptMode,
    randomPrompt,
    setRandomPrompt,
    customPrompt,
    handleChangePrompt,
  } = props;
  return promptMode === "random" ? (
    <ActivityRandomPrompt {...{ activityType, randomPrompt, setRandomPrompt }} />
  ) : (
    <ActivityCustomPrompt
      customPrompt={customPrompt}
      onChange={handleChangePrompt}
    />
  );
}

export default ActivityPrompt;
