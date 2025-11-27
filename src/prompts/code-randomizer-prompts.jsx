import React from "react";
import { getRandomElement } from "@/utils/arrayUtils";
import { awsRootDir, awsPythonMiniGamesRoot, joinPath } from "@/utils/pathUtils";

function getCodeWritingAsset(assetName) {
  return joinPath(awsPythonMiniGamesRoot, "code-randomizer", assetName);
}

const promptsList = [

  {
    element: (
      <>
        <h2>Code the following as shown below:</h2>
        <video 
          key={getCodeWritingAsset("Add_2_Numbers.mp4")}  
          controls className = "scaled-video"
        >
          <source
            src={getCodeWritingAsset("Add_2_Numbers.mp4")}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        
        <p> Add 2 numbers from the user's input! </p>
        <hr />
      </>
    ),
    answerLink: getCodeWritingAsset("Add_2_Numbers_Ans.png"),
  },

  {
    element: (
      <>
        <h2>Code the following as shown below:</h2>
        <video 
          key={getCodeWritingAsset("Append_Numbers.mp4")}  
          controls className = "scaled-video"
        >
          <source
            src={getCodeWritingAsset("Append_Numbers.mp4")}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        
        <p> Make a list of numbers. Ask the user for a number and index they would like to append the new number!  </p>
        <hr />
      </>
    ),
    answerLink: getCodeWritingAsset("Append_Numbers_Ans.png"),
  },

  {
    element: (
      <>
        <h2>Code the following as shown below:</h2>
        <video 
          key={getCodeWritingAsset("Area_of_Rectangle.mp4")}  
          controls className = "scaled-video"
        >
          <source
            src={getCodeWritingAsset("Area_of_Rectangle.mp4")}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        
        <p> Ask the user for the width and length of a rectangle. Print out the area!  </p>
        <hr />
      </>
    ),
    answerLink: getCodeWritingAsset("Area_of_Rectangle_Ans.png"),
  },

  {
    element: (
      <>
        <h2>Code the following as shown below:</h2>
        <video 
          key={getCodeWritingAsset("Conveyor_Belt.mp4")}  
          controls className = "scaled-video"
        >
          <source
            src={getCodeWritingAsset("Conveyor_Belt.mp4")}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        
        <p> Ask the user for a list of items they want to put on the 'conveyor'. Stop asking the user once they type 'quit.' </p>
        <p> Rotate the 'conveyor belt!' </p>
        <hr />
      </>
    ),
    answerLink: getCodeWritingAsset("Conveyor_Belt_Ans.png"),
  },

  {
    element: (
      <>
        <h2>Code the following as shown below:</h2>
        <video 
          key={getCodeWritingAsset("Count_Numbers.mp4")}  
          controls className = "scaled-video"
        >
          <source
            src={getCodeWritingAsset("Count_Numbers.mp4")}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        
        <p> Make a list of numbers. Ask the user what number they want to count from the list! </p>
        <hr />
      </>
    ),
    answerLink: getCodeWritingAsset("Count_Numbers_Ans.png"),
  },

  {
    element: (
      <>
        <h2>Code the following as shown below:</h2>
        <video 
          key={getCodeWritingAsset("Echo_Word.mp4")}  
          controls className = "scaled-video"
        >
          <source
            src={getCodeWritingAsset("Echo_Word.mp4")}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        
        <p> Ask the user for a word and how many times they want to echo this word. Print out the word! </p>
        <hr />
      </>
    ),
    answerLink: getCodeWritingAsset("Echo_Word_Ans.png"),
  },

  {
    element: (
      <>
        <h2>Code the following as shown below:</h2>
        <video 
          key={getCodeWritingAsset("Number_Between_Name.mp4")}  
          controls className = "scaled-video"
        >
          <source
            src={getCodeWritingAsset("Number_Between_Name.mp4")}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        
        <p> Ask the user for their name. Print a number (starting from 1, then 2, then 3...) after each letter in their name! </p>
        <hr />
      </>
    ),
    answerLink: getCodeWritingAsset("Number_Between_Name_Ans.png"),
  },

  {
    element: (
      <>
        <h2>Code the following as shown below:</h2>
        <video 
          key={getCodeWritingAsset("Times_Table.mp4")}  
          controls className = "scaled-video"
        >
          <source
            src={getCodeWritingAsset("Times_Table.mp4")}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        
        <p> Ask the user for a number, print the times table for that number from 1 to 10! </p>
        <hr />
      </>
    ),
    answerLink: getCodeWritingAsset("Times_Table_Ans.png"),
  },

  {
    element: (
      <>
        <h2>Code the following as shown below:</h2>
        <video 
          key={getCodeWritingAsset("Turn_Uppercase.mp4")}  
          controls className = "scaled-video"
        >
          <source
            src={getCodeWritingAsset("Turn_Uppercase.mp4")}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        
        <p> Ask the user for a letter, print the uppercase version of that letter! </p>
        <p> (Try doing this without using the built-in function for a challenge!) </p>
        <hr />
      </>
    ),
    answerLink: getCodeWritingAsset("Turn_Uppercase_Ans.png"),
  },

];

export function generateCodeRandomizerPrompt() {
  const { element: prompt, index } = getRandomElement(promptsList);
  // console.log(prompt)
  return prompt;
}


// OLD
// import { getRandomElement } from "@/utils/arrayUtils";
// import { capitalize } from "@/utils/stringUtils";

// const adjectives = [
//   "angry",
//   "brave",
//   "curious",
//   "excited",
//   "flying",
//   "magical",
//   "scared",
//   "sleepy",
//   "sneaky",
// ]

// const characters = [
//   "alien",
//   "bat",
//   "cat",
//   "dog",
//   "dinosaur",
//   "dragon",
//   "ghost",
//   "jellyfish",
//   "magician",
//   "monster",
//   "pirate",
//   "spy",
//   "robot",
//   "tank",
//   "warrior",
//   "wizard",
// ]

// export function generateDesignPromptText() {
//   const randomAdjective = getRandomElement(adjectives);
//   const randomCharacter = getRandomElement(characters);

//   return `${capitalize(randomAdjective)} ${randomCharacter}`
// }

// export function generateDesignPrompt() {
//   return <h2>{generateDesignPromptText()}</h2>
// }
