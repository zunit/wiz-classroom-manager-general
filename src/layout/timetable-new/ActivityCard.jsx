import React from "react";
import { Avatar, Fab, Menu, MenuItem, TextField, Tooltip } from "@mui/material";
import { isPositiveInteger } from "@/utils/inputValidation";
import ActivityTypes from "@/utils/ActivityTypes";
import ActivityIcon from "@/layout/timetable-new/ActivityIcon";
import "@/styles/activity-card.css";

function ActivityCard(props) {
  const {
    index,
    chunk,
    onChangeChunkActivity,
    onChangeChunkTime,
    onDelete,
    ...invalidProps
  } = props;
  for (let invalidProp in invalidProps) {
    console.warn(
      `ActivityCard component does not accept the "${invalidProp}" prop`
    );
  }

  const [isHovered, setIsHovered] = React.useState(false);
  const [menuAnchorEl, setMenuAnchorEl] = React.useState(null);

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

  function handleCloseMenu() {
    setMenuAnchorEl(null);
  }

  function handleChangeChunkActivity(newActivityType) {
    handleCloseMenu();
    onChangeChunkActivity(index, newActivityType);
  }

  return (
    <div
      className={`activity-card-container${isHovered ? " hovered" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h1 className="activity-card-header">{getCardHeader()}</h1>
      <h2 className="activity-card-subheader">
        {ActivityTypes.isGroupActivity(chunk.activityType)
          ? getCardSubheader()
          : null}
      </h2>

      <Tooltip title="Change activity">
        <div
          className={`activity-card-change-activity`}
          onClick={(event) => {
            setIsHovered(false);
            setMenuAnchorEl(event.currentTarget);
          }}
        >
          <ActivityIcon activityType={chunk.activityType} />
        </div>
      </Tooltip>

      <Menu
        anchorEl={menuAnchorEl}
        open={Boolean(menuAnchorEl)}
        onClose={handleCloseMenu}
        slotProps={{
          paper: {
            sx: {
              "& .MuiAvatar-root": {
                mr: 1.5,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: "center", vertical: "top" }}
        anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
      >
        {ActivityTypes.getValidActivityTypes().map(
          (activityType, activityIndex) => {
            return (
              <MenuItem
                key={activityIndex}
                onClick={() => handleChangeChunkActivity(activityType)}
              >
                <Avatar>
                  <ActivityIcon activityType={activityType} />
                </Avatar>
                {ActivityTypes.getActivityName(activityType)}
              </MenuItem>
            );
          }
        )}
      </Menu>

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

      <div className={`activity-card-delete${isHovered ? " hovered" : ""}`}>
        <Tooltip title="Delete activity">
          <Fab color="error" size="small" onClick={onDelete}>
            <span className="material-symbols-rounded">close</span>
          </Fab>
        </Tooltip>
      </div>
    </div>
  );
}

export default ActivityCard;
