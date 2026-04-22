import React from "react";
import { getRandomElement } from "@/utils/arrayUtils";
import { joinPath } from "@/utils/pathUtils";

const fllStrategyRoot =
  "https://your-cdn-or-s3-path/fll-strategy-and-problem-solving";

function getFLLStrategyAsset(assetName) {
  return joinPath(fllStrategyRoot, assetName);
}

const promptsList = [
  {
    element: (
      <>
        <h2>FLL Strategy & Problem Solving: Cruise Control</h2>
        <img
          src={getFLLStrategyAsset("mission-cruise-control.png")}
          className="scaled-img"
          alt="Mission cruise control"
        />
        <p>
          Use your distance sensor to make the car follow an object in front of it.
        </p>
        <p>
          The robot should adjust its speed based on how far away the object is.
        </p>
        <p>
          Explain what the robot should do when the object is far away, close by,
          or suddenly stops.
        </p>
        <p>Best strategy explanation wins.</p>
        <hr />
      </>
    ),
  },

  {
    element: (
      <>
        <h2>FLL Strategy & Problem Solving: Stop Sign Detection</h2>
        <img
          src={getFLLStrategyAsset("mission-stop-sign-detection.png")}
          className="scaled-img"
          alt="Mission stop sign detection"
        />
        <p>
          If the color sensor detects red on the road, the car enters stop sign
          mode.
        </p>
        <p>
          It must stop, wait 3 seconds, then continue driving.
        </p>
        <p>
          Explain how you would make this reliable and what could go wrong if the
          robot detects the color too early, too late, or by accident.
        </p>
        <p>Best strategy explanation wins.</p>
        <hr />
      </>
    ),
  },

  {
    element: (
      <>
        <h2>FLL Strategy & Problem Solving: One Run or Two?</h2>
        <img
          src={getFLLStrategyAsset("one-run-or-two.png")}
          className="scaled-img"
          alt="One run or two strategy"
        />
        <p>Your team can choose between two strategies:</p>
        <ol>
          <li>Complete 2 tasks in one long run</li>
          <li>Split them into 2 shorter and safer runs</li>
        </ol>
        <p>
          Which strategy is better, and why?
        </p>
        <p>
          Think about time, consistency, attachments, accuracy, and the risk of
          the whole run failing.
        </p>
        <p>Best strategy explanation wins.</p>
        <hr />
      </>
    ),
  },

  {
    element: (
      <>
        <h2>FLL Strategy & Problem Solving: Judge’s Design Choice</h2>
        <img
          src={getFLLStrategyAsset("judges-design-choice-reference.png")}
          className="scaled-img"
          alt="Judge's design choice reference attachment"
        />
        <p>Study the attachment design shown above.</p>
        <p>
          What job do you think this design is best suited for: guiding an
          object, scooping, lifting, or pressing a mission model?
        </p>
        <p>
          Explain one strength, one weakness, and one improvement you would make
          for an FLL mission.
        </p>
        <p>Best design explanation wins.</p>
        <hr />
      </>
    ),
  },
];

export function generateFLLStrategyAndProblemSolvingPrompt() {
  const { element } = getRandomElement(promptsList);
  return element;
}

export function generateStrategyAndProblemSolvingPrompt() {
  return generateFLLStrategyAndProblemSolvingPrompt();
}