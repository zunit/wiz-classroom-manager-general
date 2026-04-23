import React from "react";
import { getRandomElement } from "@/utils/arrayUtils";
import { joinPath } from "@/utils/pathUtils";

const ftcChallengeRoot = "https://wizroboticsintro.s3.us-east-2.amazonaws.com/Wiz-Camp/FTC-Camp/Level-5-Classroom-Manager-ftc/challenge-round";

function getFTCChallengeAsset(assetName) {
  return joinPath(ftcChallengeRoot, assetName);
}

const textOnlyPromptStyle = {
  maxWidth: "650px",
  margin: "0 auto",
};

const textOnlyTitleStyle = {
  fontSize: "2rem",
  lineHeight: 1.2,
};

const textOnlyBodyStyle = {
  fontSize: "1.2rem",
  lineHeight: 1.6,
};

const textOnlyListStyle = {
  ...textOnlyBodyStyle,
  textAlign: "left",
  display: "inline-block",
  margin: "0 auto 1rem",
};

const promptsList = [
  {
    id: "ftc-jeopardy-parts-and-sensors",
    element: (
      <div style={textOnlyPromptStyle}>
        <h2 style={textOnlyTitleStyle}>FTC Challenge Round: FTC Jeopardy</h2>

        <p style={textOnlyBodyStyle}>Answer these 5 FTC questions as fast as you can:</p>
        <ol style={textOnlyListStyle}>
          <li>What does a servo do that a normal motor does not?</li>
          <li>Which sensor can tell how far away a wall is?</li>
          <li>What is TeleOp used for?</li>
          <li>What does an encoder help measure?</li>
          <li>Why is neat wiring important on an FTC robot?</li>
        </ol>
        <p style={textOnlyBodyStyle}>The team with the most correct answers wins.</p>
        <hr />
      </div>
    ),
  },

  {
    id: "code-relay-slow-mode",
    element: (
      <div style={textOnlyPromptStyle}>
        <h2 style={textOnlyTitleStyle}>FTC Challenge Round: Code Relay</h2>

        <p style={textOnlyBodyStyle}>Your team must build one TeleOp program together.</p>
        <p style={textOnlyBodyStyle}>
          Student 1 adds the motor declarations. Student 2 adds the hardwareMap
          code. Student 3 adds drive control. Student 4 adds a slow mode button
          on the right bumper.
        </p>
        <p style={textOnlyBodyStyle}>
          First group to make the robot drive and switch into slow mode wins.
        </p>
        <hr />
      </div>
    ),
  },

  {
    id: "minute-to-win-it-push-block",
    element: (
      <>
        <h2>FTC Challenge Round: Minute to Win It</h2>

        <video controls className="scaled-video">
          <source
            src={getFTCChallengeAsset("minute-to-win-it-push-block.gif")}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        <p>
          You have 1 minute to drive your robot and push one foam block fully
          into the taped scoring zone. *Determine the scoring zone with tape on the floor.*
        </p>
        <p>
          You may only touch the controller after the timer starts.
        </p>
        <p>Fastest successful run wins.</p>
        <hr />
      </>
    ),
  },

  {
    id: "teacher-boss-battle-auto-square",
    element: (
      <>
        <h2>FTC Challenge Round: Teacher Boss Battle</h2>

        <img
          src={getFTCChallengeAsset("teacher-boss-battle-auto-square.png")}
          className="scaled-img"
          alt="Teacher boss battle autonomous square"
        />

        <p>The teacher challenges the whole class:</p>
        <p>
          Make one robot drive in a square autonomously using only timed
          movement commands.
        </p>
        <p>
          The class must agree on the timing values before testing.
        </p>
        <p>
          If the robot finishes close to its starting point, the class beats the
          boss.
        </p>
        <hr />
      </>
    ),
  },
];

export function generateFTCChallengeRoundPrompt() {
  const { element } = getRandomElement(promptsList);
  return element;
}

export function generateChallengeRoundPrompt() {
  return generateFTCChallengeRoundPrompt();
}

export { promptsList };
