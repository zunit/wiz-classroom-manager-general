import React from "react";
import { getRandomElement } from "@/utils/arrayUtils";
import { joinPath } from "@/utils/pathUtils";

const ftcChallengeRoot = "https://your-cdn-or-s3-path/ftc-challenge-round";

function getFTCChallengeAsset(assetName) {
  return joinPath(ftcChallengeRoot, assetName);
}

const promptsList = [
  {
    id: "ftc-jeopardy-parts-and-sensors",
    element: (
      <>
        <h2>FTC Challenge Round: FTC Jeopardy</h2>

        <img
          src={getFTCChallengeAsset("ftc-jeopardy-parts-and-sensors.png")}
          className="scaled-img"
          alt="FTC Jeopardy parts and sensors"
        />

        <p>
          Answer these 5 FTC questions as fast as you can:
        </p>
        <ol>
          <li>What does a servo do that a normal motor does not?</li>
          <li>Which sensor can tell how far away a wall is?</li>
          <li>What is TeleOp used for?</li>
          <li>What does an encoder help measure?</li>
          <li>Why is neat wiring important on an FTC robot?</li>
        </ol>
        <p>
          The team with the most correct answers wins.
        </p>
        <hr />
      </>
    ),
    answerLink: getFTCChallengeAsset("ftc-jeopardy-parts-and-sensors-answer.png"),
  },

  {
    id: "code-relay-slow-mode",
    element: (
      <>
        <h2>FTC Challenge Round: Code Relay</h2>

        <video controls className="scaled-video">
          <source
            src={getFTCChallengeAsset("code-relay-slow-mode.mp4")}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        <p>
          Your class must build one TeleOp program together.
        </p>
        <p>
          Student 1 adds the motor declarations. Student 2 adds hardwareMap code.
          Student 3 adds drive control. Student 4 adds a slow mode button on right bumper.
        </p>
        <p>
          First group to make the robot drive and switch into slow mode wins.
        </p>
        <hr />
      </>
    ),
    answerLink: getFTCChallengeAsset("code-relay-slow-mode-answer.png"),
  },

  {
    id: "minute-to-win-it-push-block",
    element: (
      <>
        <h2>FTC Challenge Round: Minute to Win It</h2>

        <video controls className="scaled-video">
          <source
            src={getFTCChallengeAsset("minute-to-win-it-push-block.mp4")}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        <p>
          You have 1 minute to drive your robot and push one foam block fully into the taped scoring zone.
        </p>
        <p>
          You may only touch the controller after the timer starts.
        </p>
        <p>
          Fastest successful run wins.
        </p>
        <hr />
      </>
    ),
    answerLink: getFTCChallengeAsset("minute-to-win-it-push-block-answer.png"),
  },

  {
    id: "mystery-theme-build-space-bot",
    element: (
      <>
        <h2>FTC Challenge Round: Mystery Theme Build</h2>

        <img
          src={getFTCChallengeAsset("mystery-theme-build-space-bot.png")}
          className="scaled-img"
          alt="Mystery theme build space bot"
        />

        <p>
          Theme: <strong>Space Bot</strong>
        </p>
        <p>
          In 7 minutes, build or sketch a robot attachment that could collect a moon rock
          and bring it back to base.
        </p>
        <p>
          Best design explanation and most believable mechanism wins.
        </p>
        <hr />
      </>
    ),
    answerLink: getFTCChallengeAsset("mystery-theme-build-space-bot-answer.png"),
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

        <p>
          The teacher challenges the whole class:
        </p>
        <p>
          Make one robot drive in a square autonomously using only timed movement commands.
        </p>
        <p>
          The class must agree on the timing values before testing.
        </p>
        <p>
          If the robot finishes close to its starting point, the class beats the boss.
        </p>
        <hr />
      </>
    ),
    answerLink: getFTCChallengeAsset("teacher-boss-battle-auto-square-answer.png"),
  },

  {
    id: "debug-race-reversed-motor",
    element: (
      <>
        <h2>FTC Challenge Round: Debug Race</h2>

        <img
          src={getFTCChallengeAsset("debug-race-reversed-motor.png")}
          className="scaled-img"
          alt="Debug race reversed motor"
        />

        <p>
          Problem: when the driver pushes forward on the joystick, the robot spins instead of driving straight.
        </p>
        <p>
          Your team must figure out what is wrong and fix it.
        </p>
        <p>
          Hint: one drivetrain motor is reversed incorrectly.
        </p>
        <p>
          First team to explain the bug and correct the code wins.
        </p>
        <hr />
      </>
    ),
    answerLink: getFTCChallengeAsset("debug-race-reversed-motor-answer.png"),
  },

  {
    id: "best-route-wins-launcher-field",
    element: (
      <>
        <h2>FTC Challenge Round: Best Route Wins</h2>

        <img
          src={getFTCChallengeAsset("best-route-wins-launcher-field.png")}
          className="scaled-img"
          alt="Best route wins launcher field"
        />

        <p>
          A robot starts in the corner of the field. It must:
        </p>
        <ol>
          <li>Drive to the launch line</li>
          <li>Fire one game piece</li>
          <li>Park in the taped zone</li>
        </ol>
        <p>
          Draw the fastest route and explain why your route is better than the others.
        </p>
        <p>
          Best route and explanation win.
        </p>
        <hr />
      </>
    ),
    answerLink: getFTCChallengeAsset("best-route-wins-launcher-field-answer.png"),
  },

  {
    id: "what-does-this-code-do-servo",
    element: (
      <>
        <h2>FTC Challenge Round: What Does This Code Do?</h2>

        <img
          src={getFTCChallengeAsset("what-does-this-code-do-servo.png")}
          className="scaled-img"
          alt="What does this code do servo"
        />

        <p>
          Predict exactly what this code will do:
        </p>
        <pre>{`if (gamepad1.a) {
  claw.setPosition(1.0);
} else if (gamepad1.b) {
  claw.setPosition(0.0);
}`}</pre>
        <p>
          What happens when A is pressed? What happens when B is pressed?
        </p>
        <p>
          Closest correct explanation wins.
        </p>
        <hr />
      </>
    ),
    answerLink: getFTCChallengeAsset("what-does-this-code-do-servo-answer.png"),
  },

  {
    id: "edge-case-challenge-crooked-start",
    element: (
      <>
        <h2>FTC Challenge Round: Edge Case Challenge</h2>

        <img
          src={getFTCChallengeAsset("edge-case-challenge-crooked-start.png")}
          className="scaled-img"
          alt="Edge case challenge crooked start"
        />

        <p>
          Your autonomous code was tested perfectly, but in the real match the robot starts slightly crooked.
        </p>
        <p>
          What could go wrong?
        </p>
        <p>
          Give the best fix: change timing, add a sensor check, slow the robot down,
          or redesign the route.
        </p>
        <p>
          Best backup plan wins.
        </p>
        <hr />
      </>
    ),
    answerLink: getFTCChallengeAsset("edge-case-challenge-crooked-start-answer.png"),
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