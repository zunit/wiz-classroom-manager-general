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
   * Represents the "CODE_RANDOMIZER" activity.
   */
  static get CODE_RANDOMIZER() {
    return "CODE_RANDOMIZER";
  }

  /**
   * Represents the "What Does This Code Do?" activity.
   */
  static get CODE_RELAY() {
    return "CODE_RELAY";
  }

  /**
   * Represents the "Make This Happen!" activity.
   */
  static get SECRET_MISSION() {
    return "SECRET_MISSION";
  }

  /**
   * Represents the "Jeopardy!" activity.
   */
  static get JEOPARDY() {
    return "JEOPARDY";
  }

  /**
   * Represents random group activity.
   */
  static get RANDOM() {
    return "RANDOM";
  }

  static #activityNameMap = {
    [ActivityTypes.INDIVIDUAL]: "Individual Activity",
    [ActivityTypes.CODE_RANDOMIZER]: "Code Randomizer",
    [ActivityTypes.CODE_RELAY]: "Code Relay",
    [ActivityTypes.SECRET_MISSION]: "Secret Mission",
    [ActivityTypes.JEOPARDY]: "Jeopardy!",
    [ActivityTypes.RANDOM]: "Random Group Activity",
  };

  /**
   * Returns all the valid activity types.
   * @returns An array containing all the valid activity types.
   */
  static getValidActivityTypes() {
    return [
      ActivityTypes.INDIVIDUAL,
      ActivityTypes.CODE_RANDOMIZER,
      ActivityTypes.CODE_RELAY,
      ActivityTypes.SECRET_MISSION,
      ActivityTypes.JEOPARDY,
      ActivityTypes.RANDOM,
    ];
  }

  /**
   * Returns all the valid group activity types.
   * @returns An array containing all the valid group activity types.
   */
  static getGroupActivityTypes() {
    return [
      ActivityTypes.CODE_RANDOMIZER,
      ActivityTypes.CODE_RELAY,
      ActivityTypes.SECRET_MISSION,
      ActivityTypes.JEOPARDY,
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
    return [ActivityTypes.CODE_RELAY, ActivityTypes.SECRET_MISSION].includes(
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
