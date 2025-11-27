import React from "react";
import { getRandomElement } from "@/utils/arrayUtils";
import { awsRootDir, awsPythonMiniGamesRoot, joinPath } from "@/utils/pathUtils";

function getCodeWritingAsset(assetName) {
  return joinPath(awsPythonMiniGamesRoot, "secret-mission", assetName);
}

const promptsList = [
  
  {
    element: (
      <>
        <h2>Code the following as shown below:</h2>
        <video 
          key={getCodeWritingAsset("Even_or_Odd.mp4")}  
          controls className = "scaled-video"
        >
          <source
            src={getCodeWritingAsset("Even_or_Odd.mp4")}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        
        <p> Ask the user for a number, print whether the number is even or odd! </p>
        <hr />
      </>
    ),
    answerLink: getCodeWritingAsset("Even_or_Odd_Ans.png"),
  },

  {
    element: (
      <>
        <h2>Code the following as shown below:</h2>
        <video 
          key={getCodeWritingAsset("Number_Guesser.mp4")}  
          controls className = "scaled-video"
        >
          <source
            src={getCodeWritingAsset("Number_Guesser.mp4")}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        
        <p> Ask the user to guess a number between 1 and 10, print out the number of guesses it took them! </p>
        <hr />
      </>
    ),
    answerLink: getCodeWritingAsset("Number_Guesser_Ans.png"),
  },

  {
    element: (
      <>
        <h2>Code the following as shown below:</h2>
        <video 
          key={getCodeWritingAsset("Number_of_Letters.mp4")}  
          controls className = "scaled-video"
        >
          <source
            src={getCodeWritingAsset("Number_of_Letters.mp4")}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        
        <p> Ask the user for a word, print out the number of letters the word has! </p>
        <hr />
      </>
    ),
    answerLink: getCodeWritingAsset("Number_of_Letters_Ans.png"),
  },

  {
    element: (
      <>
        <h2>Code the following as shown below:</h2>
        <video 
          key={getCodeWritingAsset("Reverse_Numbers.mp4")}  
          controls className = "scaled-video"
        >
          <source
            src={getCodeWritingAsset("Reverse_Numbers.mp4")}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        
        <p> Ask the user for 5 numbers, print out the numbers in reverse order! </p>
        <hr />
      </>
    ),
    answerLink: getCodeWritingAsset("Reverse_Numbers_Ans.png"),
  },

  {
    element: (
      <>
        <h2>Code the following as shown below:</h2>
        <video 
          key={getCodeWritingAsset("Sentence_Splitter.mp4")}  
          controls className = "scaled-video"
        >
          <source
            src={getCodeWritingAsset("Sentence_Splitter.mp4")}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        
        <p> Ask the user for a sentence, print out each individual word! </p>
        <p> (Hint: Separate the words based on the spaces between them!) </p>
        <hr />
      </>
    ),
    answerLink: getCodeWritingAsset("Sentence_Splitter_Ans.png"),
  },

  {
    element: (
      <>
        <h2>Code the following as shown below:</h2>
        <video 
          key={getCodeWritingAsset("Space_Counter.mp4")}  
          controls className = "scaled-video"
        >
          <source
            src={getCodeWritingAsset("Space_Counter.mp4")}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        
        <p> Ask the user for a sentence, print out the number of spaces in the sentence! </p>
        <hr />
      </>
    ),
    answerLink: getCodeWritingAsset("Space_Counter_Ans.png"),
  },

];

export function generateSecretMissionPrompt() {
  const { element: prompt, index } = getRandomElement(promptsList);
  // console.log(prompt)
  return prompt;
}


// OLD
// import React from "react";
// import { getRandomElement } from "@/utils/arrayUtils";
// import { awsRootDir, joinPath } from "@/utils/pathUtils";
// import { Difficulties } from "@/utils/TimeChunkModel";

// function getCodeWritingAsset(assetName) {
//   return joinPath(awsRootDir, "secret-mission", assetName);
// }

// function demoVarDisclaimer(...varNames) {
//   function grammarifyVarList(index) {
//     if (index === varNames.length - 2) {
//       return ", and ";
//     }
//     if (index === varNames.length - 1) {
//       return " ";
//     }
//     return ", ";
//   }
//   return (
//     <p>
//       The {varNames.length === 1 ? "variable " : "variables "}
//       {varNames.map((varName, index) => (
//         <React.Fragment key={index}>
//           <code>{varName}</code>
//           {grammarifyVarList(index)}
//         </React.Fragment>
//       ))}
//       {varNames.length === 1 ? "is" : "are"} shown for demonstration purposes,
//       and the {varNames.length === 1 ? "variable " : "variables "} may not be
//       necessary. However, you can use {varNames.length === 1 ? "it" : "them"} to
//       help you if you wish.
//     </p>
//   );
// }

// const beginnerPrompts = [
//   <>
//     <h2>Animate the "Unicorn Running" sprite as shown below:</h2>
//     <video src={getCodeWritingAsset("unicorn-running.mov")} controls></video>
//     <p>
//       <b>Note:</b>
//     </p>
//     <p>
//       If you cannot find the "Unicorn Running" sprite, find another sprite that
//       has walking or running costumes.
//     </p>
//     <hr />
//     <p>
//       <b>Bonus challenge: </b>
//     </p>
//     <p>Make the unicorn face towards and follow the mouse pointer.</p>
//     <video src={getCodeWritingAsset("unicorn-following.mov")} controls></video>
//   </>,
//   <>
//     <h2>Make a sprite bounce around like a DVD screensaver.</h2>
//     <p>The sprite should be moving diagonally and bounce off of walls.</p>
//     <video src={getCodeWritingAsset("dvd-screensaver.mov")} controls></video>
//   </>,
//   <>
//     <h2>Code the "Dot" sprite to be moved around using arrow keys.</h2>
//     <video src={getCodeWritingAsset("arrow-movement.mov")} controls></video>
//     {demoVarDisclaimer(
//       "up pressed",
//       "down pressed",
//       "left pressed",
//       "right pressed"
//     )}
//     <hr />
//     <p>
//       <b>Bonus challenge: </b>
//     </p>
//     <p>
//       Animate Dot to walk when it is moving, and make Dot face left and right
//       when moving in those directions.
//     </p>
//     <video src={getCodeWritingAsset("arrow-movement-animated.mov")} controls></video>
//   </>,
//   <>
//     <h2>Make a player sprite that jumps up when the space bar is pressed.</h2>
//     <video src={getCodeWritingAsset("space-to-fly.mov")} controls></video>
//     {demoVarDisclaimer("space pressed")}
//     <hr />
//     <p>
//       <b>Bonus challenge: </b>
//     </p>
//     <p>
//       If you hold the jump button, your sprite will likely continuously fly
//       upwards as shown in the video above. Find a way to set a maximum jump
//       height so that if the button is held for too long, the sprite no longer
//       flies up.
//     </p>
//     <video src={getCodeWritingAsset("space-to-fly-max-hold.mov")} controls></video>
//   </>,
//   <>
//     <h2>
//       Make a player sprite that fires a laser in the direction of the mouse when
//       the left mouse button is pressed.
//     </h2>
//     <video src={getCodeWritingAsset("laser-shooting-auto.mov")} controls></video>
//     {demoVarDisclaimer("mouse pressed")}
//     <hr />
//     <p>
//       <b>Bonus challenge: </b>
//     </p>
//     <p>
//       See if you can make the laser fire only <b>once per click</b>.
//     </p>
//     <video src={getCodeWritingAsset("laser-shooting.mov")} controls></video>
//   </>,
// ];

// const experiencedPrompts = [
//   <>
//     <h2>Make a balloon popping game as shown below.</h2>
//     <video src={getCodeWritingAsset("balloon-popping.mov")} controls></video>
//     <p>Spawn balloons at random locations.</p>
//     <p>When clicked, the balloon should disappear and add to the score.</p>
//     {demoVarDisclaimer("mouse pressed")}
//     <hr />
//     <p>
//       <b>Bonus challenge: </b>
//     </p>
//     <p>Let's try to make the game more fun!</p>
//     <video src={getCodeWritingAsset("balloon-popping-2.mov")} controls></video>
//     <p>Randomize the time it takes for the next balloon to spawn.</p>
//     <p>
//       Make the balloons turn different colours over time, and score a different
//       number of points depending on the colour of the balloon when clicked.
//     </p>
//   </>,
//   <>
//     <h2>Implement a sprint feature.</h2>
//     <p>
//       Create a script that allows a sprite to sprint in the direction they are
//       moving when pressing the space key.
//     </p>
//     <video src={getCodeWritingAsset("sprint.mov")} controls></video>
//     <p>
//       Note: You will need to create the code for making the player sprite move
//       with arrow keys first.
//     </p>
//     {demoVarDisclaimer(
//       "up pressed",
//       "down pressed",
//       "left pressed",
//       "right pressed",
//       "space pressed"
//     )}
//     <hr />
//     <p>
//       <b>Bonus challenge: </b>
//     </p>
//     <p>Instead than sprinting, let's make a dash feature!</p>
//     <video src={getCodeWritingAsset("dash.mov")} controls></video>
//     <p>
//       For sprinting, as long as the space bar is pressed, the player will move
//       faster. However, for dashing, no matter how long the spacebar is held, the
//       player will sprint forward for the same amount of time.
//     </p>
//     <p>
//       Also, see if you can set a cooldown for the sprint so that spamming
//       spacebar does not work.
//     </p>
//   </>,
//   <>
//     <h2>
//       Create a script that will let a sprite be dragged and dropped WITHOUT
//       using the "set drag mode" block.
//     </h2>
//     <video src={getCodeWritingAsset("manual-dnd.mov")} controls></video>
//     <p>
//       Make sure you click the "Full Screen Control" button on the top right to
//       test if your code works.
//     </p>
//     {demoVarDisclaimer("mouse pressed")}
//   </>,
//   <>
//     <h2>Use code blocks to create a watermelon that can be sliced.</h2>
//     <video src={getCodeWritingAsset("slice-watermelon.mov")} controls></video>
//     <p>
//       When the watermelon is clicked on directly, the watermelon should NOT be
//       sliced.
//     </p>
//     <p>
//       Make sure you click the "Full Screen Control" button on the top right to
//       test if your code works.
//     </p>
//     {demoVarDisclaimer("mouse pressed")}
//   </>,
// ];

// export function generateCodeWritingPrompt(difficulty) {
//   if (difficulty === Difficulties.BEGINNER) {
//     return getRandomElement(beginnerPrompts);
//   }
//   return getRandomElement(experiencedPrompts);
// }
