import ActivityTypes from "@/utils/ActivityTypes";
import ActivityIcon from "@/layout/timetable-settings/ActivityIcon";

function ActivityHeader(props) {
  const { activityType } = props;

  return (
    <div className="activity-header">
      <ActivityIcon activityType={activityType} />
      <h1>{ActivityTypes.getActivityName(activityType)}</h1>
    </div>
  );
}

export default ActivityHeader;
