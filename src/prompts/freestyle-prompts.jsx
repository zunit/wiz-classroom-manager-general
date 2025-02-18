import { generateDesignPromptText } from "@/prompts/design-prompts";
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

export function generateFreestylePrompt() {
  const designPromptText = generateDesignPromptText();
  const randomLocation = getRandomElement(locations);

  const freestylePromptText = `${designPromptText} in ${
    isVowel(randomLocation.charAt(0)) ? "an" : "a"
  } ${randomLocation}`;

  return <h2>{freestylePromptText}</h2>
}
