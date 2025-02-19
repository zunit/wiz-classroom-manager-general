import ActivityTypes from "@/utils/ActivityTypes";

export const Difficulties = {
  NA: "NA",
  BEGINNER: "BEGINNER",
  EXPERIENCED: "EXPERIENCED",
};

export class TimeChunkModel {
  static #idCounter = 0;

  #id;
  #domId;

  constructor(time, activityType, difficulty) {
    this.#id = TimeChunkModel.#idCounter++;
    this.#domId = `activity-card-${this.#id}`;

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
      if (difficulty && difficulty !== Difficulties.NA) {
        console.warn(
          `Given activity type ("${activityType}") does not accept a difficulty`
        );
      }
      this.difficulty = Difficulties.NA;
    }
  }

  get id() {
    return this.#id;
  }

  get domId() {
    return this.#domId;
  }
}
