import { getRandomElement } from "@/utils/arrayUtils";
import { awsRootDir, awsPythonMiniGamesRoot, joinPath } from "@/utils/pathUtils";

function getCodeWritingAsset(assetName) {
  return joinPath(awsPythonMiniGamesRoot, "jeopardy", assetName);
}

const MCList = [
  //CHANGE THIS
  {
    question: "What is the answer to the image below?",
    optionsList: ["2", "3", "4", "5"],
    correctAns: "4",
    img: getCodeWritingAsset("Add_2_Numbers_Ans.png")
  },

  {
    question: "Question 2",
    optionsList: ["Python", "C++", "Java", "HTML"],
    correctAns: "Python",
    img: getCodeWritingAsset("Add_2_Numbers_Ans.png")
  },

];

// export a function that just returns a data object
export function generateJeopardy() {
  return {
    element: getRandomElement(MCList)
  };
}
