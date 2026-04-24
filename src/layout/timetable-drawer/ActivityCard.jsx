import ActivityTypes from "@/utils/ActivityTypes";
import ActivityIcon from "@/layout/timetable-settings/ActivityIcon";
import "@/styles/activity-card.css";

/**
 * The activity card seen in the timetable drawer in the activity page.
 */
function ActivityCard(props) {
  const { chunk, progress } = props;

  const chunkTime = Number(chunk.time) / 60;

  function getCardHeader() {
    return ActivityTypes.isGroupActivity(chunk.activityType)
      ? "Group Activity"
      : `Error: ${chunk.activityType}`;
  }

  function getCardSubheader() {
    let cardSubheader;
    if (chunk.activityType === ActivityTypes.RANDOM) {
      cardSubheader = "Random";
    } else if (ActivityTypes.isGroupActivity(chunk.activityType)) {
      cardSubheader = ActivityTypes.getActivityName(chunk.activityType);
    } else {
      cardSubheader = `Error: ${chunk.activityType}`;
    }
    return cardSubheader;
  }

  return (
    <div className={`activity-card-container ${progress}`}>
      <h1 className="activity-card-header">{getCardHeader()}</h1>
      {ActivityTypes.isGroupActivity(chunk.activityType) ? (
        <h2
          className={`activity-card-subheader activity-title ${ActivityTypes.getActivityClassName(chunk.activityType)}`}
        >
          {getCardSubheader()}
        </h2>
      ) : null}
      <ActivityIcon activityType={chunk.activityType} size={80} />
      <div>
        Duration: {chunkTime} {chunkTime === 1 ? "minute" : "minutes"}
      </div>
    </div>
  );
}

export default ActivityCard;
