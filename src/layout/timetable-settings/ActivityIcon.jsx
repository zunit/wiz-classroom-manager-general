import ActivityTypes from "@/utils/ActivityTypes";
import "@/styles/activity-icon.css";

function ActivityIcon(props) {
  const { activityType, size, ...invalidProps } = props;
  for (let invalidProp in invalidProps) {
    console.warn(
      `ActivityIcon component does not accept the "${invalidProp}" prop`
    );
  }

  let activityTypeNormalized;
  if (
    !ActivityTypes.isValidActivityType(activityType) &&
    activityType !== "END"
  ) {
    console.warn(
      `ActivityIcon component received invalid activity type (was given ${activityType})`
    );
    activityTypeNormalized = ActivityTypes.NULL;
  }

  const activityToIconData = {
    [ActivityTypes.NULL]: {
      iconPath:
        "https://wizroboticsintro.s3.us-east-2.amazonaws.com/Curriculum/WizSTEMInstitute/TeacherTraining/Scratch/Unit4/ScratchJackbox/activity-icons/warning.png",
      iconClassName: "null-icon",
    },
    [ActivityTypes.INDIVIDUAL]: {
      iconPath:
        "https://wizroboticsintro.s3.us-east-2.amazonaws.com/Curriculum/WizSTEMInstitute/TeacherTraining/Scratch/Unit4/ScratchJackbox/activity-icons/person.png",
      iconClassName: "individual-icon",
    },
    [ActivityTypes.DESIGN]: {
      iconPath:
        "https://wizroboticsintro.s3.us-east-2.amazonaws.com/Curriculum/WizSTEMInstitute/TeacherTraining/Scratch/Unit4/ScratchJackbox/activity-icons/draw.png",
      iconClassName: "design-icon",
    },
    [ActivityTypes.CODE_READING]: {
      iconPath:
        "https://wizroboticsintro.s3.us-east-2.amazonaws.com/Curriculum/WizSTEMInstitute/TeacherTraining/Scratch/Unit4/ScratchJackbox/activity-icons/library.png",
      iconClassName: "code-reading-icon",
    },
    [ActivityTypes.CODE_WRITING]: {
      iconPath:
        "https://wizroboticsintro.s3.us-east-2.amazonaws.com/Curriculum/WizSTEMInstitute/TeacherTraining/Scratch/Unit4/ScratchJackbox/activity-icons/edit-code.png",
      iconClassName: "code-writing-icon",
    },
    [ActivityTypes.FREESTYLE]: {
      iconPath:
        "https://wizroboticsintro.s3.us-east-2.amazonaws.com/Curriculum/WizSTEMInstitute/TeacherTraining/Scratch/Unit4/ScratchJackbox/activity-icons/freestyle.png",
      iconClassName: "freestyle-icon",
    },
    [ActivityTypes.RANDOM]: {
      iconPath:
        "https://wizroboticsintro.s3.us-east-2.amazonaws.com/Curriculum/WizSTEMInstitute/TeacherTraining/Scratch/Unit4/ScratchJackbox/activity-icons/dice.png",
      iconClassName: "random-icon",
    },
    END: {
      iconPath:
        "https://wizroboticsintro.s3.us-east-2.amazonaws.com/Curriculum/WizSTEMInstitute/TeacherTraining/Scratch/Unit4/ScratchJackbox/activity-icons/checkered-flag.png",
      iconClassName: "end-icon",
    },
  };

  return (
    <div
      className={`activity-icon-container ${activityToIconData[activityType].iconClassName}`}
      style={size > 0 ? { width: `${size}px`, height: `${size}px` } : undefined}
    >
      <img
        className={`activity-icon ${activityToIconData[activityType].iconClassName}`}
        src={activityToIconData[activityType].iconPath}
        alt="Activity Icon"
      />
    </div>
  );
}

export default ActivityIcon;
