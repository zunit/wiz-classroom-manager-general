import ActivityTypes from "@/utils/ActivityTypes";
import "@/styles/activity-icon.css";

function ActivityIcon(props) {
  const { activityType, ...invalidProps } = props;
  for (let invalidProp in invalidProps) {
    console.warn(
      `ActivityIcon component does not accept the "${invalidProp}" prop`
    );
  }

  let activityTypeNormalized;
  if (!ActivityTypes.isValidActivityType(activityType) && activityType !== "END") {
    console.warn(
      `ActivityIcon component received invalid activity type (was given ${activityType})`
    );
    activityTypeNormalized = ActivityTypes.NULL;
  }

  const activityToIconPath = {
    [ActivityTypes.NULL]: {
      iconPath: "/warning.png",
      iconClassName: "null-icon",
    },
    [ActivityTypes.INDIVIDUAL]: {
      iconPath: "/person.png",
      iconClassName: "individual-icon",
    },
    [ActivityTypes.DESIGN]: {
      iconPath: "/draw.png",
      iconClassName: "design-icon",
    },
    [ActivityTypes.CODE_READING]: {
      iconPath: "/library.png",
      iconClassName: "code-reading-icon",
    },
    [ActivityTypes.CODE_WRITING]: {
      iconPath: "/edit-code.png",
      iconClassName: "code-writing-icon",
    },
    [ActivityTypes.FREESTYLE]: {
      iconPath: "/freestyle.png",
      iconClassName: "freestyle-icon",
    },
    [ActivityTypes.RANDOM]: {
      iconPath: "/dice.png",
      iconClassName: "random-icon",
    },
    "END": {
      iconPath: "/checkered-flag.png",
      iconClassName: "end-icon",
    },
  };

  return (
    <div
      className={`activity-icon-container ${activityToIconPath[activityType].iconClassName}`}
    >
      <img
        className={`activity-icon ${activityToIconPath[activityType].iconClassName}`}
        src={activityToIconPath[activityType].iconPath}
        alt="Activity Icon"
      />
    </div>
  );
}

export default ActivityIcon;
