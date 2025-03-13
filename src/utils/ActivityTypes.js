/**
 * A class that provides enum-like values and helper methods
 * associated with the activity types.
 */
class ActivityTypes {
  /**
   * Represents an invalid activity type in case something goes wrong.
   */
  static get NULL() {
    return "NULL";
  }

  /**
   * Represents individual activity.
   */
  static get INDIVIDUAL() {
    return "INDIVIDUAL";
  }

  /**
   * Represents the "Design" activity.
   */
  static get DESIGN() {
    return "DESIGN";
  }

  /**
   * Represents the "What Does This Code Do?" activity.
   */
  static get CODE_READING() {
    return "CODE_READING";
  }

  /**
   * Represents the "Make This Happen!" activity.
   */
  static get CODE_WRITING() {
    return "CODE_WRITING";
  }

  /**
   * Represents the "Freestyle!" activity.
   */
  static get FREESTYLE() {
    return "FREESTYLE";
  }

  /**
   * Represents random group activity.
   */
  static get RANDOM() {
    return "RANDOM";
  }

  static #activityNameMap = {
    [ActivityTypes.INDIVIDUAL]: "Individual Activity",
    [ActivityTypes.DESIGN]: "Design",
    [ActivityTypes.CODE_READING]: "What Does This Code Do?",
    [ActivityTypes.CODE_WRITING]: "Make This Happen!",
    [ActivityTypes.FREESTYLE]: "Freestyle!",
    [ActivityTypes.RANDOM]: "Random Group Activity",
  };

  /**
   * Returns all the valid activity types.
   * @returns An array containing all the valid activity types.
   */
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

  /**
   * Returns all the valid group activity types.
   * @returns An array containing all the valid group activity types.
   */
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
