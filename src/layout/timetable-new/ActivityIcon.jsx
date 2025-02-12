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
  if (!ActivityTypes.isValidActivityType(activityType)) {
    console.warn(
      `ActivityIcon component received invalid activity type (was given ${activityType})`
    );
    activityTypeNormalized = ActivityTypes.NULL;
  }

  const activityToIconPath = {
    [ActivityTypes.NULL]: {
      iconPath: "/public/warning.png",
      iconClassName: "null-icon",
    },
    [ActivityTypes.INDIVIDUAL]: {
      iconPath: "/public/person.png",
      iconClassName: "individual-icon",
    },
    [ActivityTypes.DESIGN]: {
      iconPath: "/public/draw.png",
      iconClassName: "design-icon",
    },
    [ActivityTypes.CODE_READING]: {
      iconPath: "/public/library.png",
      iconClassName: "code-reading-icon",
    },
    [ActivityTypes.CODE_WRITING]: {
      iconPath: "/public/edit-code.png",
      iconClassName: "code-writing-icon",
    },
    [ActivityTypes.FREESTYLE]: {
      iconPath: "/public/freestyle.png",
      iconClassName: "freestyle-icon",
    },
    [ActivityTypes.RANDOM]: {
      iconPath: "/public/dice.png",
      iconClassName: "random-icon",
    },
  };

  return (
    <div
      className={`activity-icon-container ${activityToIconPath[activityType].iconClassName}`}
    >
      <img
        className={`activity-icon ${activityToIconPath[activityType].iconClassName}`}
        src={activityToIconPath[activityType].iconPath}
        styl
        alt="Activity Icon"
      />
    </div>
  );
}

export default ActivityIcon;
