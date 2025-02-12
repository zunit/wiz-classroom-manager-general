import ActivityTypes from "@/utils/ActivityTypes";

export const Difficulties = {
  NA: "NA",
  BEGINNER: "BEGINNER",
  EXPERIENCED: "EXPERIENCED",
};

export class TimeChunkModel {
  static #idCounter = 0;

  constructor(time, activityType, difficulty) {
    this.id = TimeChunkModel.#idCounter++;
    this.time = time;

    // Set time chunk activity type
    if (ActivityTypes.isValidActivityType(activityType)) {
      this.activityType = activityType;
    } else {
      console.warn(
        `Given activity type is invalid (was given "${activityType}")`
      );
      this.activityType = ActivityTypes.NULL;
    }

    // Set time chunk activity difficulty
    if (ActivityTypes.hasDifficulties(activityType)) {
      if (difficulty in Difficulties) {
        this.difficulty = difficulty;
      } else {
        this.difficulty = Difficulties.EXPERIENCED;
        console.warn(
          `Given activity difficulty is invalid (was given "${difficulty}")`
        );
      }
    } else {
      if (difficulty !== Difficulties.NA) {
        console.warn(
          `Given activity type ("${activityType}") does not accept a difficulty`
        );
      }
      this.difficulty = Difficulties.NA;
    }
  }
}
