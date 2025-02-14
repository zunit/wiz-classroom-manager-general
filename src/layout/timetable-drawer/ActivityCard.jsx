import ActivityTypes from "@/utils/ActivityTypes";
import ActivityIcon from "@/layout/timetable-new/ActivityIcon";
import "@/styles/activity-card.css";

function ActivityCard(props) {
  const { chunk, progress } = props;

  function getCardHeader() {
    let cardHeader;
    if (ActivityTypes.isIndividualActivity(chunk.activityType)) {
      cardHeader = "Individual Activity";
    } else if (ActivityTypes.isGroupActivity(chunk.activityType)) {
      cardHeader = "Group Activity";
    } else {
      cardHeader = `Error: ${chunk.activityType}`;
    }
    return cardHeader;
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
        <h2 className="activity-card-subheader">{getCardSubheader()}</h2>
      ) : null}
      <ActivityIcon activityType={chunk.activityType} />
      Duration: {Number(chunk.time) / 60} minutes
    </div>
  );
}

export default ActivityCard;
