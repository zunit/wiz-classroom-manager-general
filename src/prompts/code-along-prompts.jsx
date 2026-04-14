import React from "react";
import { getRandomElement } from "@/utils/arrayUtils";
import { joinPath } from "@/utils/pathUtils";

const fllCodeAlongRoot = "https://your-cdn-or-s3-path/fll-code-along";

function getFLLCodeAlongAsset(assetName) {
  return joinPath(fllCodeAlongRoot, assetName);
}

const beginnerPrompts = [
  {
    element: (
      <>
        <h2>FLL Code Along: Drive Forward and Stop</h2>
        <video controls className="scaled-video">
          <source
            src={getFLLCodeAlongAsset("drive-forward-stop.mp4")}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <p>
          Code the robot to drive forward for a short distance, then stop exactly inside the taped box.
        </p>
        <p>
          Win condition: the robot fully stops inside the box without crossing the far edge.
        </p>
        <hr />
      </>
    ),
  },

  {
    element: (
      <>
        <h2>FLL Code Along: Turn 90 Degrees</h2>
        <img
          src={getFLLCodeAlongAsset("turn-90-degrees.png")}
          className="scaled-img"
          alt="FLL turn 90 degrees"
        />
        <p>
          Code the robot to drive forward, then turn exactly 90 degrees to the right.
        </p>
        <p>
          Win condition: after the turn, the robot is facing the new path correctly.
        </p>
        <hr />
      </>
    ),
  },

  {
    element: (
      <>
        <h2>FLL Code Along: Push the Block</h2>
        <video controls className="scaled-video">
          <source
            src={getFLLCodeAlongAsset("push-the-block.mp4")}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <p>
          Code the robot to drive forward and push one block into the target zone.
        </p>
        <p>
          Win condition: the block must end fully inside the marked area.
        </p>
        <hr />
      </>
    ),
  },

  {
    element: (
      <>
        <h2>FLL Code Along: Out and Back</h2>
        <img
          src={getFLLCodeAlongAsset("out-and-back.png")}
          className="scaled-img"
          alt="FLL out and back"
        />
        <p>
          Code the robot to leave base, drive to a line on the mat, then reverse back into base.
        </p>
        <p>
          Win condition: the robot returns fully to base after reaching the line.
        </p>
        <hr />
      </>
    ),
  },

  {
    element: (
      <>
        <h2>FLL Code Along: Move an Arm Motor</h2>
        <img
          src={getFLLCodeAlongAsset("move-arm-motor.png")}
          className="scaled-img"
          alt="FLL move arm motor"
        />
        <p>
          Code one attachment motor to lift an arm up, pause, then lower it back down.
        </p>
        <p>
          Win condition: the arm clearly raises and returns to the starting position.
        </p>
        <hr />
      </>
    ),
  },

  {
    element: (
      <>
        <h2>FLL Code Along: Touch Sensor Stop</h2>
        <video controls className="scaled-video">
          <source
            src={getFLLCodeAlongAsset("touch-sensor-stop.mp4")}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <p>
          Code the robot to drive forward until the touch sensor is pressed, then stop immediately.
        </p>
        <p>
          Win condition: the robot only stops when the sensor is triggered.
        </p>
        <hr />
      </>
    ),
  },
];

const advancedPrompts = [
  {
    element: (
      <>
        <h2>FLL Code Along: Follow the Line</h2>
        <video controls className="scaled-video">
          <source
            src={getFLLCodeAlongAsset("follow-the-line.mp4")}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <p>
          Code the robot to follow a black line on the mat using a color sensor.
        </p>
        <p>
          Win condition: the robot stays on the path until it reaches the finish marker.
        </p>
        <hr />
      </>
    ),
  },

  {
    element: (
      <>
        <h2>FLL Code Along: Color Sensor Mission</h2>
        <img
          src={getFLLCodeAlongAsset("color-sensor-mission.png")}
          className="scaled-img"
          alt="FLL color sensor mission"
        />
        <p>
          Code the robot to drive forward until it detects a black line, then stop and play a sound.
        </p>
        <p>
          Win condition: the robot reacts only when the correct color is detected.
        </p>
        <hr />
      </>
    ),
  },

  {
    element: (
      <>
        <h2>FLL Code Along: Two-Step Mission</h2>
        <img
          src={getFLLCodeAlongAsset("two-step-mission.png")}
          className="scaled-img"
          alt="FLL two step mission"
        />
        <p>
          Code the robot to leave base, push a mission model lever, then return back to base.
        </p>
        <p>
          Win condition: both actions must happen in one run with no manual reset.
        </p>
        <hr />
      </>
    ),
  },

  {
    element: (
      <>
        <h2>FLL Code Along: Attachment + Drive Combo</h2>
        <video controls className="scaled-video">
          <source
            src={getFLLCodeAlongAsset("attachment-drive-combo.mp4")}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <p>
          Code the robot to drive to a mission model, activate an attachment motor, then back away.
        </p>
        <p>
          Win condition: the mission model is triggered and the robot retreats cleanly.
        </p>
        <hr />
      </>
    ),
  },

  {
    element: (
      <>
        <h2>FLL Code Along: Square Path Challenge</h2>
        <img
          src={getFLLCodeAlongAsset("square-path-challenge.png")}
          className="scaled-img"
          alt="FLL square path challenge"
        />
        <p>
          Code the robot to drive in a square and end close to where it started.
        </p>
        <p>
          Win condition: the robot completes all 4 sides and finishes near the starting point.
        </p>
        <hr />
      </>
    ),
  },

  {
    element: (
      <>
        <h2>FLL Code Along: Precision Parking</h2>
        <img
          src={getFLLCodeAlongAsset("precision-parking.png")}
          className="scaled-img"
          alt="FLL precision parking"
        />
        <p>
          Code the robot to drive through a path and park exactly inside a small taped parking zone.
        </p>
        <p>
          Win condition: the robot must be fully inside the zone at the end of the run.
        </p>
        <hr />
      </>
    ),
  },

  {
    element: (
      <>
        <h2>FLL Code Along: My Block / My Function Challenge</h2>
        <img
          src={getFLLCodeAlongAsset("my-block-function-challenge.png")}
          className="scaled-img"
          alt="FLL my block function challenge"
        />
        <p>
          Create your own block or function called <strong>goToMission</strong> that makes the robot
          drive forward, turn, and stop at the target.
        </p>
        <p>
          Win condition: the custom block works and can be reused more than once.
        </p>
        <hr />
      </>
    ),
  },

  {
    element: (
      <>
        <h2>FLL Code Along: Gyro Straight Drive</h2>
        <video controls className="scaled-video">
          <source
            src={getFLLCodeAlongAsset("gyro-straight-drive.mp4")}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <p>
          Code the robot to drive straight across the mat using the gyro sensor to stay aligned.
        </p>
        <p>
          Win condition: the robot reaches the target with less drifting than a normal timed drive.
        </p>
        <hr />
      </>
    ),
  },
];

export function generateCodeAlongPrompt(difficulty) {
  const promptList =
    difficulty === "Beginner" ? beginnerPrompts : advancedPrompts;

  const { element } = getRandomElement(promptList);
  return element;
}