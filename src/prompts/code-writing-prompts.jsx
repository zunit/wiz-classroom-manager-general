import { getRandomElement } from "@/utils/arrayUtils";

const beginnerPrompts = [
  <>
    <h2>Make a player sprite that you can move by pressing arrow keys.</h2>
    <p>
      Optional bonus challenge: see if you can make a script that will also let
      the player dash forward when pressing the D key.
    </p>
  </>,
  <>
    <h2>Make a player sprite that jumps up when the space bar is pressed.</h2>
    <p>
      Note: You will also need to make the player fall down when the space bar
      is NOT pressed.
    </p>
  </>,
];

const experiencedPrompts = [
  <>
    <h2>Make a whack-a-mole game.</h2>
    <p>Spawn moles (or whatever sprite you like) in random locations.</p>
    <p>
      Create a score system that will count the number of moles you clicked.
    </p>
  </>,
  <>
    <h2>Make a sprite bounce around like a DVD screensaver.</h2>
    <p>The sprite should be moving diagonally and bounce off of walls.</p>
  </>,
  <>
    <h2>
      Create a script that will let a sprite be dragged and dropped WITHOUT
      using the "set drag mode" block.
    </h2>
    <p>
      Make sure you click the "Full Screen Control" button on the top right when
      testing your code.
    </p>
  </>,
];

export function generateCodeWritingBeginnerPrompt() {
  return getRandomElement(beginnerPrompts);
}

export function generateCodeWritingExperiencedPrompt() {
  return getRandomElement(experiencedPrompts);
}