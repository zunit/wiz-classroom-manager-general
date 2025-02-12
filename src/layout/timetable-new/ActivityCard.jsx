import { Fab, TextField } from "@mui/material";
import "@/styles/activity-card.css";
import ActivityTypes from "@/utils/ActivityTypes";

function ActivityCard(props) {
  const { chunk, onDelete, ...invalidProps } = props;
  for (let invalidProp in invalidProps) {
    console.warn(
      `"ActivityCard component does not accept the "${invalidProp}" prop`
    );
  }

  const isIndividualActivity = chunk.activityType === ActivityTypes.INDIVIDUAL;
  const isGroupActivity = [
    ActivityTypes.DESIGN,
    ActivityTypes.CODE_READING,
    ActivityTypes.CODE_WRITING,
    ActivityTypes.FREESTYLE,
    ActivityTypes.RANDOM,
  ].includes(chunk.activityType);
  if (!isIndividualActivity && !isGroupActivity) {
    console.warn(
      `ActivityCard was given invalid activity type (was given ${chunk.activityType})`
    );
  }

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
    switch (chunk.activityType) {
      case ActivityTypes.DESIGN:
        cardSubheader = "Design";
        break;
      case ActivityTypes.CODE_READING:
        cardSubheader = "What Does This Code Do?";
        break;
      case ActivityTypes.CODE_WRITING:
        cardSubheader = "Make This Happen!";
        break;
      case ActivityTypes.FREESTYLE:
        cardSubheader = "Freestyle!";
        break;
      case ActivityTypes.RANDOM:
        cardSubheader = "Random";
        break;
      default:
        cardSubheader = `Error: ${chunk.activityType}`;
    }
    return cardSubheader;
  }

  return (
    <div className="activity-card-container">
      <h1 className="activity-card-header">{getCardHeader()}</h1>
      <h2 className="activity-card-subheader">
        {isGroupActivity ? getCardSubheader() : null}
      </h2>
      <p>[image]</p>

      <div className="activity-card-duration">
        <TextField
          variant="standard"
          sx={{ width: "50px", textAlign: "center" }}
        />
        <span>minutes</span>
      </div>

      <div className="activity-card-delete">
        <Fab color="error" size="small" onClick={onDelete}>
          <span className="material-symbols-rounded">close</span>
        </Fab>
      </div>
    </div>
  );
}

export default ActivityCard;
