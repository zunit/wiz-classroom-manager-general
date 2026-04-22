import React from "react";
import { getRandomElement } from "@/utils/arrayUtils";
import { joinPath } from "@/utils/pathUtils";

const fllCodeAlongRoot = "s3://wizroboticsintro/Wiz-Camp/FLL-Camp/Summer-Camp/Level-5-Classroom-Manager/";

function getFLLCodeAlongAsset(assetName) {
  return joinPath(fllCodeAlongRoot, assetName);
}

const promptsList = [
  {
    element: (
      <>
        <h2>FLL Code Along: Figure-8 with Lights</h2>
        <video controls className="scaled-video">
          <source
            src={getFLLCodeAlongAsset("figure-8-with-lights.mp4")}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <p>
          Code the robot to drive in a figure 8 path while the hub lights show
          the direction the robot is turning or moving.
        </p>
        <p>
          Win condition: the robot clearly completes the figure 8 and the lights
          change correctly with the direction changes.
        </p>
        <hr />
      </>
    ),
  },

  {
    element: (
      <>
        <h2>FLL Code Along: Forward, Spin, and Play Notes</h2>
        <img
          src={getFLLCodeAlongAsset("forward-spin-play-notes.png")}
          className="scaled-img"
          alt="FLL forward spin and play notes"
        />
        <p>
          Code the robot to drive forward, do one full rotation, and play 3
          different music notes during the program.
        </p>
        <p>
          Win condition: the robot completes the forward movement, makes one full
          spin, and clearly plays 3 different notes.
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
          Code one attachment motor to lift an arm up, pause, then lower it back
          down.
        </p>
        <p>
          Win condition: the arm clearly raises and returns to the starting
          position.
        </p>
        <hr />
      </>
    ),
  },

  {
    element: (
      <>
        <h2>FLL Code Along: 3-Point Turn with Signals</h2>
        <video controls className="scaled-video">
          <source
            src={getFLLCodeAlongAsset("three-point-turn-signals.mp4")}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <p>
          Code the robot to complete a 3-point turn while the hub lights act like
          turn signals to show which direction the robot is turning.
        </p>
        <p>
          Win condition: the robot clearly completes the 3-point turn and the
          signals match each turning direction during the movement.
        </p>
        <hr />
      </>
    ),
  },
];

export function generateCodeAlongPrompt(difficulty) {
  const { element } = getRandomElement(promptsList);
  return element;
}