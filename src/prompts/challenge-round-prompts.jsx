import React from "react";
import { getRandomElement } from "@/utils/arrayUtils";
import { joinPath } from "@/utils/pathUtils";

const fllChallengeRoundRoot =
  "https://wizroboticsintro.s3.us-east-2.amazonaws.com/Wiz-Camp/FLL-Camp/Summer-Camp/Level-5-Classroom-Manager/challenge-round";

function getFLLChallengeRoundAsset(assetName) {
  return joinPath(fllChallengeRoundRoot, assetName);
}

const promptsList = [
  {
    element: (
      <>
        <h2>FLL Challenge Round: One-Minute Arm Build</h2>
        <img
          src={getFLLChallengeRoundAsset("one-minute-arm.png")}
          className="scaled-img"
          alt="One-minute arm build challenge"
        />
        <p>Your team has 1 minute to build a simple arm attachment for the robot.</p>
        <p>
          Then the robot must use the arm to do one task, like pushing an object,
          lifting something small, or moving an item into a target area.
        </p>
        <p>The fastest working design wins.</p>
        <hr />
      </>
    ),
  },

  {
    element: (
      <>
        <h2>FLL Challenge Round: SPIKE Hub Count Up</h2>
        <img
          src={getFLLChallengeRoundAsset("spike-hub-count-up.png")}
          className="scaled-img"
          alt="SPIKE hub count up challenge"
        />
        <p>Code the SPIKE hub to count from 1 to 10 on the hub display.</p>
        <p>Bonus: after reaching 10, make it count back down from 10 to 1.</p>
        <p>The first team to make it work correctly wins.</p>
        <hr />
      </>
    ),
  },

  {
    element: (
      <>
        <h2>FLL Challenge Round: Build and Do</h2>
        <video controls className="scaled-video">
          <source
            src={getFLLChallengeRoundAsset("build-and-do.mp4")}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <p>Build one quick robot attachment that can complete a simple action.</p>
        <p>
          Example actions: push a block, pull an object closer, flip a lever, or
          guide something into a zone.
        </p>
        <p>Best working attachment and clearest explanation win.</p>
        <hr />
      </>
    ),
  },

  {
    element: (
      <>
        <h2>FLL Challenge Round: Quick Code Fix</h2>
        <video controls className="scaled-video">
          <source
            src={getFLLChallengeRoundAsset("quick-code-fix-spike.mp4")}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <p>
          The robot code is almost correct, but one small problem is stopping it
          from doing the task.
        </p>
        <p>
          Your team must find the bug and fix it so the robot can move, turn, or
          complete the challenge properly.
        </p>
        <p>First team to explain the problem and fix the code wins.</p>
        <hr />
      </>
    ),
  },
];

export function generateFLLChallengeRoundPrompt() {
  const { element } = getRandomElement(promptsList);
  return element;
}

export function generateChallengeRoundPrompt() {
  return generateFLLChallengeRoundPrompt();
}