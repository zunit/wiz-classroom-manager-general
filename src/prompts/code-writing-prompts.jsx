import { getRandomElement } from "@/utils/arrayUtils";

const beginnerPrompts = [
  <>
    <h2>Make a player sprite that you can move by pressing arrow keys.</h2>
    <p>
      Optional bonus challenge: See if you can teleport the player sprite to the
      other side of the screen if you go too close to the edge.
    </p>
  </>,
  <>
    <h2>Make a player sprite that jumps up when the space bar is pressed.</h2>
    <p>
      Note: You will also need to make the player fall down when the space bar
      is NOT pressed.
    </p>
    <p>
      Optional bonus challenge: Notice that if you hold the jump button, your
      sprite will likely flies upwards. See if you can set a maximum jump height
      so that if the button is held for too long, they no longer go up.
    </p>
  </>,
  <>
    <h2>
      Make a player sprite that fires a laser in the direction of the mouse when
      the left mouse button is pressed.
    </h2>
    <p>
      Optional bonus challenge: See if you can make the laser only fire{" "}
      <b>once per click</b>.
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
    <h2>Implement a dash feature.</h2>
    <p>
      Create a script that allows the player sprite to dash forward in the
      direction they are moving/facing when pressing the D key.
    </p>
    <p>
      Note: You will need to create the code for making the player sprite move
      with arrow keys first.
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
