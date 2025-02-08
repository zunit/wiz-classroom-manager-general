import { createContext } from "react";

export const ActivityTypes = {
  NULL: "NULL",
  INDIVIDUAL: "INDIVIDUAL",
  CODE_READING: "CODE_READING",
  CODE_WRITING: "CODE_WRITING",
  DESIGN: "DESGIN",
  FREESTYLE: "FREESTYLE",
  RANDOM: "RANDOM",
};

export const Difficulties = {
  NA: "NA",
  EASY: "EASY",
  HARD: "HARD",
};

export class TimeChunk {
  constructor(time, activityType, difficulty) {
    this.time = time;

    if (activityType in ActivityTypes) {
      this.activityType = activityType;
    } else {
      this.activityType = ActivityTypes.NULL;
      console.warn(`Given activity type is invalid (was given "${activityType}")`);
    }

    if (this.activityType in [ActivityTypes.CODE_READING, ActivityTypes.CODE_WRITING]) {
      if (difficulty in Difficulties) {
        this.difficulty = difficulty;
      } else {
        this.difficulty = Difficulties.EASY;
        console.warn(`Given activity difficulty is invalid (was given "${activityType}")`);
      }
    } else {
      if (difficulty) {
        console.warn(`Given activity type ("${activityType}") does not accept a difficulty`);
      }
      this.difficulty = Difficulties.NA;
    }
  }
}

const ChunksContext = createContext([
  new TimeChunk(15, ActivityTypes.RANDOM, Difficulties.EASY),
  new TimeChunk(15, ActivityTypes.INDIVIDUAL, Difficulties.EASY),
  new TimeChunk(15, ActivityTypes.RANDOM, Difficulties.EASY),
  new TimeChunk(15, ActivityTypes.INDIVIDUAL, Difficulties.EASY),
]);

export default ChunksContext;
