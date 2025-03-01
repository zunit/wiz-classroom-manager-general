import ActivityTypes from "@/utils/ActivityTypes";
import { awsRootDir, joinPath } from "@/utils/pathUtils";
import "@/styles/activity-icon.css";

// Maps the icon type to its corresponding data
const iconTypeDataMap = {
  [ActivityTypes.NULL]: {
    iconPath: joinPath(awsRootDir, "activity-icons", "warning.png"),
    iconClassName: "null-icon",
  },
  [ActivityTypes.INDIVIDUAL]: {
    iconPath: joinPath(awsRootDir, "activity-icons", "person.png"),
    iconClassName: "individual-icon",
  },
  [ActivityTypes.DESIGN]: {
    iconPath: joinPath(awsRootDir, "activity-icons", "draw.png"),
    iconClassName: "design-icon",
  },
  [ActivityTypes.CODE_READING]: {
    iconPath: joinPath(awsRootDir, "activity-icons", "library.png"),
    iconClassName: "code-reading-icon",
  },
  [ActivityTypes.CODE_WRITING]: {
    iconPath: joinPath(awsRootDir, "activity-icons", "edit-code.png"),
    iconClassName: "code-writing-icon",
  },
  [ActivityTypes.FREESTYLE]: {
    iconPath: joinPath(awsRootDir, "activity-icons", "freestyle.png"),
    iconClassName: "freestyle-icon",
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
      <img
        className={`activity-icon ${iconTypeDataMap[normalizedIconType].iconClassName}`}
        src={iconTypeDataMap[normalizedIconType].iconPath}
        alt="Activity Icon"
      />
    </div>
  );
}

export default ActivityIcon;
