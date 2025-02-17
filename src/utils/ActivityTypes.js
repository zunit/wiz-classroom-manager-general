class ActivityTypes {
  static NULL = "NULL";
  static INDIVIDUAL = "INDIVIDUAL";
  static DESIGN = "DESIGN";
  static CODE_READING = "CODE_READING";
  static CODE_WRITING = "CODE_WRITING";
  static FREESTYLE = "FREESTYLE";
  static RANDOM = "RANDOM";

  static #activityNameMap = {
    [ActivityTypes.INDIVIDUAL]: "Individual Activity",
    [ActivityTypes.DESIGN]: "Design",
    [ActivityTypes.CODE_READING]: "What Does This Code Do?",
    [ActivityTypes.CODE_WRITING]: "Make This Happen!",
    [ActivityTypes.FREESTYLE]: "Freestyle!",
    [ActivityTypes.RANDOM]: "Random Group Activity",
  };

  static getValidActivityTypes() {
    return [
      ActivityTypes.INDIVIDUAL,
      ActivityTypes.DESIGN,
      ActivityTypes.CODE_READING,
      ActivityTypes.CODE_WRITING,
      ActivityTypes.FREESTYLE,
      ActivityTypes.RANDOM,
    ];
  }
  
  static getGroupActivityTypes() {
    return [
      ActivityTypes.DESIGN,
      ActivityTypes.CODE_READING,
      ActivityTypes.CODE_WRITING,
      ActivityTypes.FREESTYLE,
      ActivityTypes.RANDOM,
    ]
  }

  static isValidActivityType(activityType) {
    return ActivityTypes.getValidActivityTypes().includes(activityType);
  }

  static isIndividualActivity(activityType) {
    return activityType === ActivityTypes.INDIVIDUAL;
  }

  static isGroupActivity(activityType) {
    return ActivityTypes.getGroupActivityTypes().includes(activityType);
  }

  static hasDifficulties(activityType) {
    return [ActivityTypes.CODE_READING, ActivityTypes.CODE_WRITING].includes(
      activityType
    );
  }

  static getActivityName(activityType) {
    let activityName;
    if (ActivityTypes.isValidActivityType(activityType)) {
      activityName = ActivityTypes.#activityNameMap[activityType];
    } else {
      activityName = `Error: ${activityType}`;
    }
    return activityName;
  }
}

export default ActivityTypes;
