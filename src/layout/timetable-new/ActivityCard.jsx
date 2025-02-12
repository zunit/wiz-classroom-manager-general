import { Fab, TextField } from "@mui/material";
import { isPositiveInteger } from "@/utils/inputValidation";
import ActivityTypes from "@/utils/ActivityTypes";
import "@/styles/activity-card.css";

function ActivityCard(props) {
  const { index, chunk, onChangeChunkTime, onDelete, ...invalidProps } = props;
  for (let invalidProp in invalidProps) {
    console.warn(
      `ActivityCard component does not accept the "${invalidProp}" prop`
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
        {ActivityTypes.isGroupActivity(chunk.activityType)
          ? getCardSubheader()
          : null}
      </h2>
      <p>[image]</p>

      <div className="activity-card-duration">
        <span>Duration:</span>
        <TextField
          value={chunk.time}
          variant="standard"
          size="small"
          sx={{ width: "50px" }}
          slotProps={{
            htmlInput: {
              sx: { textAlign: "center" },
            },
          }}
          error={!isPositiveInteger(chunk.time)}
          onChange={(event) => onChangeChunkTime(index, event.target.value)}
        />
        <span>minute{chunk.time === "1" ? "" : "s"}</span>
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
