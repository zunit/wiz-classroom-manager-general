import React from "react";
import { getRandomElement } from "@/utils/arrayUtils";
import { joinPath } from "@/utils/pathUtils";

const fllBuildAlongRoot = "https://wizroboticsintro.s3.us-east-2.amazonaws.com/Wiz-Camp/FLL-Camp/Summer-Camp/Level-5-Classroom-Manager/build-along";

function getFLLBuildAlongAsset(assetName) {
  return joinPath(fllBuildAlongRoot, assetName);
}

const imageStyle = {
  width: "220px",
  height: "auto",
  display: "block",
  margin: "0 auto 12px",
};

const buildAlongPrompts = [
  {
    element: (
      <>
        <h2>FLL Build Along: Front Pusher Attachment</h2>
        <img
          src={getFLLBuildAlongAsset("front-pusher.jpeg")}
          style={imageStyle}
          alt="FLL front pusher attachment"
        />
        <p>
          Build a simple front pusher that helps the robot move blocks, mission
          models, or small objects straight forward.
        </p>
        <p>
          Focus on making it sturdy, easy to attach, and wide enough to line up
          cleanly with the target.
        </p>
        <hr />
      </>
    ),
  },

  {
    element: (
      <>
        <h2>FLL Build Along: Scoop Collector</h2>
        <img
          src={getFLLBuildAlongAsset("scoop-collector.jpeg")}
          style={imageStyle}
          alt="FLL scoop collector attachment"
        />
        <p>
          Build a scoop-style attachment that can slide under a loose object and
          help guide it into the robot’s control.
        </p>
        <p>
          Think about the scoop angle, side walls, and how the shape helps keep
          the object from slipping out.
        </p>
        <hr />
      </>
    ),
  },

  {
    element: (
      <>
        <h2>FLL Build Along: Lift Arm</h2>
        <img
          src={getFLLBuildAlongAsset("lift-arm.jpeg")}
          style={imageStyle}
          alt="FLL lift arm attachment"
        />
        <p>
          Build a simple lift arm that can raise, tap, or move a mission model
          using one clean motion.
        </p>
        <p>
          Pay attention to the arm length, pivot point, and how the arm stays
          balanced while moving.
        </p>
        <hr />
      </>
    ),
  },

  {
    element: (
      <>
        <h2>FLL Build Along: Grabber Claw</h2>
        <img
          src={getFLLBuildAlongAsset("grabber-claw.jpeg")}
          style={imageStyle}
          alt="FLL grabber claw attachment"
        />
        <p>
          Build a grabber claw that can close around an object and help the
          robot pick it up or move it to a new area.
        </p>
        <p>
          Focus on the claw shape, how it opens and closes, and how securely it
          holds the object during movement.
        </p>
        <hr />
      </>
    ),
  },
  {
  element: (
    <>
      <h2>FLL Build Along: Side Hook Attachment</h2>
      <img
        src={getFLLBuildAlongAsset("side-attatchment.png")}
        style={imageStyle}
        alt="FLL side hook attachment"
      />
      <p>
        Build a side-mounted attachment that can swing out and help the robot
        hook, guide, or move a mission model from the side.
      </p>
      <p>
        Focus on how the attachment is supported, how far it reaches away from
        the robot, and how smoothly it can rotate without wobbling.
      </p>
      <p>
        Think about gear placement, attachment strength, and how the hook shape
        helps the robot control an object during the motion.
      </p>
      <hr />
    </>
  ),
},
];

export function generateBuildAlongPrompt() {
  const { element } = getRandomElement(buildAlongPrompts);
  return element;
}