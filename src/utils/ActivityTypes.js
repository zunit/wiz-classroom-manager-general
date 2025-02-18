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
    ];
  }

  /**
   * Returns whether an object represents a valid activity type.
   * @param {any} activityType The object.
   * @returns {boolean} Whether the given object represents a valid activity type.
   */
  static isValidActivityType(activityType) {
    return ActivityTypes.getValidActivityTypes().includes(activityType);
  }

  /**
   * Returns whether a given activity type represents an individual activity.
   * @param {any} activityType The activity type.
   * @returns {boolean} Whether the activity type represents an individual activity.
   */
  static isIndividualActivity(activityType) {
    return activityType === ActivityTypes.INDIVIDUAL;
  }

  /**
   * Returns whether a given activity type represents a group activity.
   * @param {any} activityType The activity type.
   * @returns {boolean} Whether the activity type represents a group activity.
   */
  static isGroupActivity(activityType) {
    return ActivityTypes.getGroupActivityTypes().includes(activityType);
  }

  /**
   * Returns whether a given activity type has a difficulty associated with it.
   * @param {any} activityType The activity type.
   * @returns {boolean} Whether the activity type has a difficulty associated with it.
   */
  static hasDifficulties(activityType) {
    return [ActivityTypes.CODE_READING, ActivityTypes.CODE_WRITING].includes(
      activityType
    );
  }

  /**
   * Returns the name of a given activity type.
   * @param {any} activityType The activity type.
   * @returns {string} The name of the activity type.
   */
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
