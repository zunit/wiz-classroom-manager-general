import { generateStrategyAndProblemSolvingPromptText } from "@/prompts/strategy-and-problem-solving-prompts";
import { getRandomElement } from "@/utils/arrayUtils";
import { isVowel } from "@/utils/stringUtils";

const locations = [
  "candy world",
  "desert oasis",
  "enchanted forest",
  "floating island",
  "haunted house",
  "jungle temple",
  "magic castle",
  "moon base",
  "outer space",
  "secret lab",
  "underwater city",
  "volcano",
];

export function generateChallengeRoundPrompt() {
  const strategyAndProblemSolvingPromptText = generateStrategyAndProblemSolvingPromptText();
  const randomLocation = getRandomElement(locations);

  const challengeRoundPromptText = `${strategyAndProblemSolvingPromptText} in ${
    isVowel(randomLocation.charAt(0)) ? "an" : "a"
  } ${randomLocation}`;

  return <h2>{challengeRoundPromptText}</h2>
}
