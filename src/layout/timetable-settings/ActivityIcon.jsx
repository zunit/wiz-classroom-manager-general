import ActivityTypes from "@/utils/ActivityTypes";
import { awsRootDir, joinPath } from "@/utils/pathUtils";
import "@/styles/activity-icon.css";

/**
 * Maps the icon type to its corresponding data.
 */
const iconTypeDataMap = {
  [ActivityTypes.NULL]: {
    iconPath: joinPath(awsRootDir, "activity-icons", "warning.png"),
    iconClassName: "null-icon",
  },
  [ActivityTypes.STRATEGY_AND_PROBLEM_SOLVING]: {
    iconPath: joinPath(awsRootDir, "activity-icons", "draw.png"),
    iconClassName: "strategy-and-problem-solving-icon",
  },
  [ActivityTypes.CODE_ALONG]: {
    iconPath: joinPath(awsRootDir, "activity-icons", "library.png"),
    iconClassName: "code-along-icon",
  },
  [ActivityTypes.BUILD_ALONG]: {
    iconPath: joinPath(awsRootDir, "activity-icons", "edit-code.png"),
    iconClassName: "build-along-icon",
  },
  [ActivityTypes.CHALLENGE_ROUND]: {
    iconName: "emoji_events",
    iconClassName: "challenge-round-icon",
  },
  [ActivityTypes.RANDOM]: {
    iconPath: joinPath(awsRootDir, "activity-icons", "dice.png"),
    iconClassName: "random-icon",
  },
  END: {
    iconPath: joinPath(awsRootDir, "activity-icons", "checkered-flag.png"),
    iconClassName: "end-icon",
  },
};

/**
 * The activity icons used throughout the app.
 */
function ActivityIcon(props) {
  const { activityType, size } = props;

  // Gets the icon type with error checking
  const isValidIconType = Object.keys(iconTypeDataMap).includes(activityType);
  if (!isValidIconType) {
    console.warn(
      `ActivityIcon component received invalid activity type (was given ${activityType})`
    );
  }
  const normalizedIconType = isValidIconType
    ? activityType
    : ActivityTypes.NULL;

  return (
    <div
      className={`activity-icon-container ${iconTypeDataMap[normalizedIconType].iconClassName}`}
      style={size > 0 ? { width: `${size}px`, height: `${size}px` } : undefined}
    >
      {iconTypeDataMap[normalizedIconType].iconName ? (
        <span
          className={`material-symbols-rounded activity-icon-symbol ${iconTypeDataMap[normalizedIconType].iconClassName}`}
          aria-hidden="true"
        >
          {iconTypeDataMap[normalizedIconType].iconName}
        </span>
      ) : (
        <img
          className={`activity-icon ${iconTypeDataMap[normalizedIconType].iconClassName}`}
          src={iconTypeDataMap[normalizedIconType].iconPath}
          alt="Activity Icon"
        />
      )}
    </div>
  );
}

export default ActivityIcon;
