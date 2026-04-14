import React from "react";
import { getRandomElement } from "@/utils/arrayUtils";
import { joinPath } from "@/utils/pathUtils";

const fllStrategyRoot = "https://your-cdn-or-s3-path/fll-strategy-and-problem-solving";

function getFLLStrategyAsset(assetName) {
  return joinPath(fllStrategyRoot, assetName);
}

const promptsList = [
  {
    element: (
      <>
        <h2>FLL Strategy & Problem Solving: What Does This Code Do?</h2>
        <img
          src={getFLLStrategyAsset("what-does-this-code-do-drive-turn.png")}
          className="scaled-img"
          alt="What does this code do drive turn"
        />
        <p>Predict exactly what this program will do:</p>
        <pre>{`Drive forward 30 cm
Turn right 90 degrees
Drive forward 20 cm
Stop`}</pre>
        <p>Where will the robot end up, and what direction will it be facing?</p>
        <p>Closest correct explanation wins.</p>
        <hr />
      </>
    ),
  },

  {
    element: (
      <>
        <h2>FLL Strategy & Problem Solving: Best Route Wins</h2>
        <img
          src={getFLLStrategyAsset("best-route-wins-two-missions.png")}
          className="scaled-img"
          alt="Best route wins two missions"
        />
        <p>A robot starts in base and must do these 2 tasks:</p>
        <ol>
          <li>Push one mission model</li>
          <li>Park in the finish area</li>
        </ol>
        <p>Draw the best route and explain why it is faster or safer than the others.</p>
        <p>Best route and explanation win.</p>
        <hr />
      </>
    ),
  },

  {
    element: (
      <>
        <h2>FLL Strategy & Problem Solving: Debug Race</h2>
        <img
          src={getFLLStrategyAsset("debug-race-turning-wrong-way.png")}
          className="scaled-img"
          alt="Debug race turning wrong way"
        />
        <p>
          Problem: the robot is supposed to turn right, but it keeps turning left during the mission.
        </p>
        <p>Your team must figure out what went wrong and explain how to fix it.</p>
        <p>Hint: check the turn block settings, wheel setup, or motor direction.</p>
        <p>First team to explain the bug and the fix wins.</p>
        <hr />
      </>
    ),
  },

  {
    element: (
      <>
        <h2>FLL Strategy & Problem Solving: Judge’s Design Choice</h2>
        <img
          src={getFLLStrategyAsset("judges-design-choice-scoop-vs-pusher.png")}
          className="scaled-img"
          alt="Judge's design choice scoop vs pusher"
        />
        <p>
          You need to move one loose object back to base.
        </p>
        <p>
          Which attachment is better: a scoop or a flat pusher?
        </p>
        <p>
          Explain which design is better and why.
        </p>
        <p>Best explanation wins.</p>
        <hr />
      </>
    ),
  },

  {
    element: (
      <>
        <h2>FLL Strategy & Problem Solving: Edge Case Challenge</h2>
        <img
          src={getFLLStrategyAsset("edge-case-challenge-bad-start-alignment.png")}
          className="scaled-img"
          alt="Edge case challenge bad start alignment"
        />
        <p>
          Your robot worked perfectly in practice, but in the real round it starts a little crooked in base.
        </p>
        <p>What could go wrong?</p>
        <p>
          Give the best fix: straighten the launch setup, slow the robot down,
          change the turn, or use a wall alignment guide.
        </p>
        <p>Best backup plan wins.</p>
        <hr />
      </>
    ),
  },

  {
    element: (
      <>
        <h2>FLL Strategy & Problem Solving: Which Sensor Should You Use?</h2>
        <img
          src={getFLLStrategyAsset("which-sensor-should-you-use.png")}
          className="scaled-img"
          alt="Which sensor should you use"
        />
        <p>
          You want the robot to stop exactly when it reaches a black line on the mat.
        </p>
        <p>
          Which sensor should you use: color sensor, touch sensor, or gyro sensor?
        </p>
        <p>
          Explain why your choice is the best one.
        </p>
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
          alt="One run or two"
        />
        <p>
          Your team can either:
        </p>
        <ol>
          <li>Try to complete 2 missions in one long run</li>
          <li>Split them into 2 shorter and safer runs</li>
        </ol>
        <p>
          Which strategy is better, and why?
        </p>
        <p>
          Think about speed, consistency, attachments, and risk.
        </p>
        <hr />
      </>
    ),
  },

  {
    element: (
      <>
        <h2>FLL Strategy & Problem Solving: Best Attachment Choice</h2>
        <img
          src={getFLLStrategyAsset("best-attachment-choice.png")}
          className="scaled-img"
          alt="Best attachment choice"
        />
        <p>
          You need an attachment for a mission model that must be pushed down from above.
        </p>
        <p>
          Which design is better: a long vertical arm, a short strong arm, or a front wedge?
        </p>
        <p>
          Explain which one you would choose and why.
        </p>
        <hr />
      </>
    ),
  },

  {
    element: (
      <>
        <h2>FLL Strategy & Problem Solving: Why Did the Robot Miss?</h2>
        <img
          src={getFLLStrategyAsset("why-did-the-robot-miss.png")}
          className="scaled-img"
          alt="Why did the robot miss"
        />
        <p>
          The robot was supposed to drive straight into a mission model, but it stopped a few centimeters short.
        </p>
        <p>
          What is the most likely cause?
        </p>
        <p>
          Choose the best answer: wheel slip, wrong distance value, bad starting position, or loose attachment.
        </p>
        <p>
          Explain your reasoning.
        </p>
        <hr />
      </>
    ),
  },

  {
    element: (
      <>
        <h2>FLL Strategy & Problem Solving: Mission Order Challenge</h2>
        <img
          src={getFLLStrategyAsset("mission-order-challenge.png")}
          className="scaled-img"
          alt="Mission order challenge"
        />
        <p>
          Your team has 3 missions available:
        </p>
        <ol>
          <li>A close easy mission worth a few points</li>
          <li>A medium mission that needs a special attachment</li>
          <li>A difficult far mission worth the most points</li>
        </ol>
        <p>
          Which mission should you do first, and why?
        </p>
        <p>
          Best strategy explanation wins.
        </p>
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