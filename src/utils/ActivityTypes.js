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
   * Represents the "Strategy-and-Problem-Solving" activity.
   */
  static get STRATEGY_AND_PROBLEM_SOLVING() {
    return "STRATEGY_AND_PROBLEM_SOLVING";
  }

  /**
   * Represents the "Code-Along" activity.
   */
  static get CODE_ALONG() {
    return "CODE_ALONG";
  }

  /**
   * Represents the "Build-Along" activity.
   */
  static get BUILD_ALONG() {
    return "BUILD_ALONG";
  }

  /**
   * Represents the "Challenge-Round" activity.
   */
  static get CHALLENGE_ROUND() {
    return "CHALLENGE_ROUND";
  }

  /**
   * Represents random group activity.
   */
  static get RANDOM() {
    return "RANDOM";
  }

  static #activityNameMap = {
    [ActivityTypes.INDIVIDUAL]: "Individual Activity",
    [ActivityTypes.STRATEGY_AND_PROBLEM_SOLVING]:
      "Strategy-and-Problem-Solving",
    [ActivityTypes.CODE_ALONG]: "Code-Along",
    [ActivityTypes.BUILD_ALONG]: "Build-Along",
    [ActivityTypes.CHALLENGE_ROUND]: "Challenge-Round",
    [ActivityTypes.RANDOM]: "Random Group Activity",
  };

  /**
   * Returns all the valid activity types.
   * @returns An array containing all the valid activity types.
   */
  static getValidActivityTypes() {
    return [
      ActivityTypes.INDIVIDUAL,
      ActivityTypes.STRATEGY_AND_PROBLEM_SOLVING,
      ActivityTypes.CODE_ALONG,
      ActivityTypes.BUILD_ALONG,
      ActivityTypes.CHALLENGE_ROUND,
      ActivityTypes.RANDOM,
    ];
  }

  /**
   * Returns all the valid group activity types.
   * @returns An array containing all the valid group activity types.
   */
  static getGroupActivityTypes() {
    return [
      ActivityTypes.STRATEGY_AND_PROBLEM_SOLVING,
      ActivityTypes.CODE_ALONG,
      ActivityTypes.BUILD_ALONG,
      ActivityTypes.CHALLENGE_ROUND,
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
    return [ActivityTypes.CODE_ALONG, ActivityTypes.BUILD_ALONG].includes(
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
