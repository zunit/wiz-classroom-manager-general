import React from "react";
import { getRandomElement } from "@/utils/arrayUtils";
import { joinPath } from "@/utils/pathUtils";

// Change this to your real FTC strategy asset location.
const ftcStrategyRoot = "https://your-cdn-or-s3-path/ftc-strategy";

function getFTCStrategyAsset(assetName) {
  return joinPath(ftcStrategyRoot, assetName);
}

const promptsList = [
  {
    id: "what-does-this-code-do",
    element: (
      <>
        <h2>FTC Strategy & Problem Solving: What Does This Code Do?</h2>

        <img
          src={getFTCStrategyAsset("what-does-this-code-do-preview.png")}
          className="scaled-img"
          alt="FTC code prediction preview"
        />

        <p>
          Look at a short FTC Java snippet and predict exactly how the robot will move or behave.
        </p>
        <p>
          Explain your reasoning using the code structure, motor powers, timing, or sensor logic.
        </p>
        <hr />
      </>
    ),
    answerLink: getFTCStrategyAsset("what-does-this-code-do-answer.png"),
  },

  {
    id: "best-route-wins",
    element: (
      <>
        <h2>FTC Strategy & Problem Solving: Best Route Wins</h2>

        <img
          src={getFTCStrategyAsset("best-route-wins-preview.png")}
          className="scaled-img"
          alt="FTC route planning preview"
        />

        <p>
          You are given a mock FTC field and a scoring objective.
        </p>
        <p>
          Plan the best autonomous route to score the most points or finish the fastest.
        </p>
        <hr />
      </>
    ),
    answerLink: getFTCStrategyAsset("best-route-wins-answer.png"),
  },

  {
    id: "debug-race",
    element: (
      <>
        <h2>FTC Strategy & Problem Solving: Debug Race</h2>

        <img
          src={getFTCStrategyAsset("debug-race-preview.png")}
          className="scaled-img"
          alt="FTC debug race preview"
        />

        <p>
          A robot has a specific issue such as drifting, a reversed motor, bad wheel mapping,
          or a sensor that is not reacting correctly.
        </p>
        <p>
          Identify the most likely cause and explain how you would fix it.
        </p>
        <hr />
      </>
    ),
    answerLink: getFTCStrategyAsset("debug-race-answer.png"),
  },

  {
    id: "judges-design-choice",
    element: (
      <>
        <h2>FTC Strategy & Problem Solving: Judge’s Design Choice</h2>

        <img
          src={getFTCStrategyAsset("judges-design-choice-preview.png")}
          className="scaled-img"
          alt="FTC design comparison preview"
        />

        <p>
          Compare two robot designs and decide which one is better for a given game task.
        </p>
        <p>
          Defend your answer using strength, stability, speed, simplicity, or scoring consistency.
        </p>
        <hr />
      </>
    ),
    answerLink: getFTCStrategyAsset("judges-design-choice-answer.png"),
  },

  {
    id: "edge-case-challenge",
    element: (
      <>
        <h2>FTC Strategy & Problem Solving: Edge Case Challenge</h2>

        <img
          src={getFTCStrategyAsset("edge-case-challenge-preview.png")}
          className="scaled-img"
          alt="FTC edge case challenge preview"
        />

        <p>
          Solve a tricky FTC situation such as:
          the robot starts crooked,
          the claw misses the object,
          the sensor fails,
          or the robot overshoots the parking zone.
        </p>
        <p>
          Explain the best fix or backup strategy.
        </p>
        <hr />
      </>
    ),
    answerLink: getFTCStrategyAsset("edge-case-challenge-answer.png"),
  },

  {
    id: "sensor-choice",
    element: (
      <>
        <h2>FTC Strategy & Problem Solving: Choose the Best Sensor</h2>

        <img
          src={getFTCStrategyAsset("sensor-choice-preview.png")}
          className="scaled-img"
          alt="FTC sensor choice preview"
        />

        <p>
          You must solve a robot task using one sensor.
        </p>
        <p>
          Choose between a color sensor, distance sensor, touch sensor, or IMU and explain which is best and why.
        </p>
        <hr />
      </>
    ),
    answerLink: getFTCStrategyAsset("sensor-choice-answer.png"),
  },

  {
    id: "autonomous-or-teleop",
    element: (
      <>
        <h2>FTC Strategy & Problem Solving: Autonomous or TeleOp?</h2>

        <img
          src={getFTCStrategyAsset("autonomous-or-teleop-preview.png")}
          className="scaled-img"
          alt="FTC autonomous or teleop preview"
        />

        <p>
          A game task is shown on screen.
        </p>
        <p>
          Decide whether the task is better solved in autonomous, in teleop, or with a combination of both.
        </p>
        <hr />
      </>
    ),
    answerLink: getFTCStrategyAsset("autonomous-or-teleop-answer.png"),
  },

  {
    id: "mechanism-matchup",
    element: (
      <>
        <h2>FTC Strategy & Problem Solving: Mechanism Matchup</h2>

        <img
          src={getFTCStrategyAsset("mechanism-matchup-preview.png")}
          className="scaled-img"
          alt="FTC mechanism matchup preview"
        />

        <p>
          Pick the best mechanism for the task: scoop, claw, launcher, pusher, or lift.
        </p>
        <p>
          Explain which design fits the challenge best and what tradeoffs come with that choice.
        </p>
        <hr />
      </>
    ),
    answerLink: getFTCStrategyAsset("mechanism-matchup-answer.png"),
  },

  {
    id: "driver-strategy",
    element: (
      <>
        <h2>FTC Strategy & Problem Solving: Driver Strategy Call</h2>

        <img
          src={getFTCStrategyAsset("driver-strategy-preview.png")}
          className="scaled-img"
          alt="FTC driver strategy preview"
        />

        <p>
          Imagine your team is in the final 30 seconds of a match.
        </p>
        <p>
          Choose the safest and smartest driver strategy based on score, robot condition, and time remaining.
        </p>
        <hr />
      </>
    ),
    answerLink: getFTCStrategyAsset("driver-strategy-answer.png"),
  },
];

export function generateFTCStrategyPrompt() {
  const { element } = getRandomElement(promptsList);
  return element;
}

export function generateStrategyAndProblemSolvingPrompt() {
  return generateFTCStrategyPrompt();
}

export { promptsList };
