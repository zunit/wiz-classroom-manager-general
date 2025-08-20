import ActivityTypes from "@/utils/ActivityTypes";
import ActivityIcon from "@/layout/timetable-settings/ActivityIcon";

/**
 * Renders the activity header, given the activity type.
 */
function ActivityHeader(props) {
  const { activityType } = props;

  return (
    <div className="activity-header">
      <ActivityIcon activityType={activityType} size={70} />
      <h1>{ActivityTypes.getActivityName(activityType)}</h1>
    </div>
  );
}

export default ActivityHeader;
