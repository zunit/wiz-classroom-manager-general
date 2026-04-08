import { getRandomElement } from "@/utils/arrayUtils";
import { capitalize } from "@/utils/stringUtils";

const adjectives = [
  "angry",
  "brave",
  "curious",
  "excited",
  "flying",
  "magical",
  "scared",
  "sleepy",
  "sneaky",
]

const characters = [
  "alien",
  "bat",
  "cat",
  "dog",
  "dinosaur",
  "dragon",
  "ghost",
  "jellyfish",
  "magician",
  "monster",
  "pirate",
  "spy",
  "robot",
  "tank",
  "warrior",
  "wizard",
]

export function generateStrategyAndProblemSolvingPromptText() {
  const randomAdjective = getRandomElement(adjectives);
  const randomCharacter = getRandomElement(characters);

  return `${capitalize(randomAdjective)} ${randomCharacter}`
}

export function generateStrategyAndProblemSolvingPrompt() {
  return <h1>{generateStrategyAndProblemSolvingPromptText()}</h1>
}
