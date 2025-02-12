class ActivityTypes {
  static NULL = "NULL";
  static INDIVIDUAL = "INDIVIDUAL";
  static DESIGN = "DESIGN";
  static CODE_READING = "CODE_READING";
  static CODE_WRITING = "CODE_WRITING";
  static FREESTYLE = "FREESTYLE";
  static RANDOM = "RANDOM";

  static isValidActivityType(activityType) {
    return [
      ActivityTypes.INDIVIDUAL,
      ActivityTypes.DESIGN,
      ActivityTypes.CODE_READING,
      ActivityTypes.CODE_WRITING,
      ActivityTypes.FREESTYLE,
      ActivityTypes.RANDOM,
    ].includes(activityType);
  }

  static isIndividualActivity(activityType) {
    return activityType === ActivityTypes.INDIVIDUAL;
  }

  static isGroupActivity(activityType) {
    return [
      ActivityTypes.DESIGN,
      ActivityTypes.CODE_READING,
      ActivityTypes.CODE_WRITING,
      ActivityTypes.FREESTYLE,
      ActivityTypes.RANDOM,
    ].includes(activityType);
  }

  static hasDifficulties(activityType) {
    return [ActivityTypes.CODE_READING, ActivityTypes.CODE_WRITING].includes(
      activityType
    );
  }
}

export default ActivityTypes;