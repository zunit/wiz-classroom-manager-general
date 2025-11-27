import React from "react";
import { getRandomElement } from "@/utils/arrayUtils";
import { awsRootDir, awsPythonMiniGamesRoot, joinPath } from "@/utils/pathUtils";
// import { Difficulties } from "@/utils/TimeChunkModel";

function getCodeWritingAsset(assetName) {
  return joinPath(awsPythonMiniGamesRoot, "code-relay", assetName);
}

const promptsList = [

  {
    element: (
      <>
        <h2>Code the following as shown below:</h2>
        <video 
          key={getCodeWritingAsset("Track_Even_Odd.mp4")}  
          controls className = "scaled-video"
        >
          <source
            src={getCodeWritingAsset("Track_Even_Odd.mp4")}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        
        <p>1. Get the user input for 10 numbers</p>
        <p>2. Check if the number is even</p>
        <p>3. Check if the number is odd</p>
        <p>4. Print the total number of odd and even numbers</p>
        <hr />
      </>
    ),
    answerLink: getCodeWritingAsset("Track_Even_Odd_Ans.png"),
  },

  {
    element: (
      <>
        <h2>Code the following as shown below:</h2>
        <video 
          key={getCodeWritingAsset("Tip_Calculator.mp4")}
          controls className = "scaled-video"
        >
          <source
            src={getCodeWritingAsset("Tip_Calculator.mp4")}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        
        <p>1. Get the user for the cost of the meal</p>
        <p>2. Get the user input for the tip percent amount</p>
        <p>3. Print the tip amount and total amount</p>
        <hr />
      </>
    ),
    answerLink: getCodeWritingAsset("Tip_Calculator_Ans.png"),
  },

  {
    element: (
      <>
        <h2>Code the following as shown below:</h2>
        <img src={getCodeWritingAsset("Temperature_Converter.png")} className="scaled-video" />
        <p>1. Make a function to convert Celsius to Fahrenheit</p>
        <p>2. Make a function to convert Celsius to Kelvin</p>
        <p>3. Make a list of temperatures to convert</p>
        <p>4. Make a loop to convert all temperatures to Fahrenheit and Kelvin</p>
        <hr />
      </>
    ),
    answerLink: getCodeWritingAsset("Temperature_Converter_Ans.png"),
  },

  {
    element: (
      <>
        <h2>Code the following as shown below:</h2>
        <video 
          key={getCodeWritingAsset("Pyramid_Builder.mp4")}
          controls className = "scaled-video"
        >
          <source
            src={getCodeWritingAsset("Pyramid_Builder.mp4")}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        
        <p>1. Get the user input for the height and make a variable for the emoji</p>
        <p>2. Make a loop that builds the pyramid</p>
        <hr />
      </>
    ),
    answerLink: getCodeWritingAsset("Pyramid_Builder_Ans.png"),
  },

  {
    element: (
      <>
        <h2>Code the following as shown below:</h2>
        <video 
          key={getCodeWritingAsset("Initials.mp4")}
          controls className = "scaled-video"
        >
          <source
            src={getCodeWritingAsset("Initials.mp4")}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        
        <p>1. Get the user input for their first and last name</p>
        <p>2. Print out their initials</p>
        <hr />
      </>
    ),
    answerLink: getCodeWritingAsset("Initials_Ans.png"),
  },

  {
    element: (
      <>
        <h2>Code the following as shown below:</h2>
        <video 
          key={getCodeWritingAsset("Counting_Letter.mp4")}
          controls className = "scaled-video"
        >
          <source
            src={getCodeWritingAsset("Counting_Letter.mp4")}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        
        <p>1. Get the user input for the word and letter they want to count</p>
        <p>2. Count how many letters are in the word</p>
        <p>3. Print out the total number of letters in the word</p>
        <hr />
      </>
    ),
    answerLink: getCodeWritingAsset("Counting_Letter_Ans.png"),
  },

  {
    element: (
      <>
        <h2>Code the following as shown below:</h2>
        <video 
          key={getCodeWritingAsset("Countdown.mp4")}
          controls className = "scaled-video"
        >
          <source
            src={getCodeWritingAsset("Countdown.mp4")}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        
        <p>1. Get the user input for the starting number</p>
        <p>2. Print out the countdown numbers</p>
        <p>3. Print 'Lift off!'</p>
        <hr />
      </>
    ),
    answerLink: getCodeWritingAsset("Countdown_Ans.png"),
  },

   {
    element: (
      <>
        <h2>Code the following as shown below:</h2>
        <video 
          key={getCodeWritingAsset("Calculator.mp4")}
          controls className = "scaled-video"
        >
          <source
            src={getCodeWritingAsset("Calculator.mp4")}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        
        <p>1. Get the user input for 2 numbers</p>
        <p>2. Get the user input for the operation</p>
        <p>3. Print out the answer</p>
        <hr />
      </>
    ),
    answerLink: getCodeWritingAsset("Calculator_Ans.png"),
  },
];

export function generateCodeRelayPrompt() {
  const { element: prompt, index } = getRandomElement(promptsList);
  // console.log(prompt)
  return prompt;
}

