import React from "react";
import { getRandomElement } from "@/utils/arrayUtils";
import { joinPath } from "@/utils/pathUtils";

// Change this to wherever your FTC assets will live.
const ftcRoot = "https://your-cdn-or-s3-path/ftc-code-along";

function getFTCCodeAlongAsset(assetName) {
  return joinPath(ftcRoot, assetName);
}

const promptsList = [
  {
    id: "basic-teleop",
    element: (
      <>
        <h2>FTC Code Along: Basic TeleOp Drive</h2>

        <video controls className="scaled-video">
          <source
            src={getFTCCodeAlongAsset("basic-teleop-demo.mp4")}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        <p>
          Create a TeleOp OpMode that drives a 2-motor robot using the left stick
          Y-axis for forward/backward and the right stick X-axis for turning.
        </p>
        <p>
          Also show motor power on telemetry.
        </p>
        <hr />
      </>
    ),
    answerLink: getFTCCodeAlongAsset("basic-teleop-answer.png"),
    referenceLink: "https://ftc-docs.firstinspires.org/en/latest/programming_resources/tutorial_specific/onbot_java/creating_op_modes/Creating-and-Running-an-Op-Mode-(OnBot-Java).html",
  },

  {
    id: "slow-mode",
    element: (
      <>
        <h2>FTC Code Along: Driver Control Upgrade</h2>

        <img
          src={getFTCCodeAlongAsset("slow-mode-preview.png")}
          className="scaled-img"
          alt="FTC slow mode prompt preview"
        />

        <p>
          Add a slow mode to TeleOp. When the driver holds the right bumper, all
          drive power should be cut in half for precision driving.
        </p>
        <p>
          Display on telemetry whether slow mode is ON or OFF.
        </p>
        <hr />
      </>
    ),
    answerLink: getFTCCodeAlongAsset("slow-mode-answer.png"),
    referenceLink: "https://ftc-docs.firstinspires.org/",
  },

  {
    id: "square-auto",
    element: (
      <>
        <h2>FTC Code Along: Autonomous Path Challenge</h2>

        <video controls className="scaled-video">
          <source
            src={getFTCCodeAlongAsset("square-auto-demo.mp4")}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        <p>
          Write an Autonomous OpMode that makes the robot drive in a square:
          forward, turn, forward, turn, forward, turn, forward, turn.
        </p>
        <p>
          End with a telemetry message that says the path is complete.
        </p>
        <hr />
      </>
    ),
    answerLink: getFTCCodeAlongAsset("square-auto-answer.png"),
    referenceLink: "https://github.com/FIRST-Tech-Challenge/FtcRobotController",
  },

  {
    id: "encoder-drive",
    element: (
      <>
        <h2>FTC Code Along: Encoder Drive</h2>

        <img
          src={getFTCCodeAlongAsset("encoder-drive-preview.png")}
          className="scaled-img"
          alt="FTC encoder drive prompt preview"
        />

        <p>
          Program the robot to drive forward to a target encoder count, stop, then
          drive backward to the starting point.
        </p>
        <p>
          Show current encoder values in telemetry while the robot is moving.
        </p>
        <hr />
      </>
    ),
    answerLink: getFTCCodeAlongAsset("encoder-drive-answer.png"),
    referenceLink: "https://github.com/FIRST-Tech-Challenge/FtcRobotController",
  },

  {
    id: "servo-toggle",
    element: (
      <>
        <h2>FTC Code Along: Servo Toggle</h2>

        <video controls className="scaled-video">
          <source
            src={getFTCCodeAlongAsset("servo-toggle-demo.mp4")}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        <p>
          Use gamepad buttons to open and close a claw servo.
        </p>
        <p>
          Press Y to open the claw and A to close it. Show the servo position on telemetry.
        </p>
        <hr />
      </>
    ),
    answerLink: getFTCCodeAlongAsset("servo-toggle-answer.png"),
    referenceLink: "https://ftc-docs.firstinspires.org/en/latest/programming_resources/tutorial_specific/blocks/controlling_a_servo/Controlling-a-Servo-(Blocks).html",
  },

  {
    id: "color-sensor",
    element: (
      <>
        <h2>FTC Code Along: Sensor Detective</h2>

        <img
          src={getFTCCodeAlongAsset("color-sensor-preview.png")}
          className="scaled-img"
          alt="FTC color sensor prompt preview"
        />

        <p>
          Write code that reads a color sensor and reacts differently depending on
          whether red or blue is stronger.
        </p>
        <p>
          Example: red = drive forward, blue = stop and report detection on telemetry.
        </p>
        <hr />
      </>
    ),
    answerLink: getFTCCodeAlongAsset("color-sensor-answer.png"),
    referenceLink: "https://github.com/FIRST-Tech-Challenge/FtcRobotController",
  },

  {
    id: "distance-sensor",
    element: (
      <>
        <h2>FTC Code Along: Distance Sensor Safety Stop</h2>

        <video controls className="scaled-video">
          <source
            src={getFTCCodeAlongAsset("distance-sensor-demo.mp4")}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        <p>
          Drive forward slowly until a distance sensor detects an object closer than
          10 cm, then stop immediately.
        </p>
        <p>
          Show the live distance reading in telemetry.
        </p>
        <hr />
      </>
    ),
    answerLink: getFTCCodeAlongAsset("distance-sensor-answer.png"),
    referenceLink: "https://github.com/FIRST-Tech-Challenge/FtcRobotController",
  },

  {
    id: "imu-turn",
    element: (
      <>
        <h2>FTC Code Along: IMU Turn Challenge</h2>

        <img
          src={getFTCCodeAlongAsset("imu-turn-preview.png")}
          className="scaled-img"
          alt="FTC IMU turn prompt preview"
        />

        <p>
          Use the IMU heading to turn the robot to about 90 degrees, then stop.
        </p>
        <p>
          Display heading data on telemetry while turning.
        </p>
        <hr />
      </>
    ),
    answerLink: getFTCCodeAlongAsset("imu-turn-answer.png"),
    referenceLink: "https://ftc-docs.firstinspires.org/programming_resources/imu/imu.html",
  },
];

export function generateFTCCodeAlongPrompt() {
  const { element } = getRandomElement(promptsList);
  return element;
}

export function generateCodeAlongPrompt() {
  return generateFTCCodeAlongPrompt();
}

export { promptsList };
