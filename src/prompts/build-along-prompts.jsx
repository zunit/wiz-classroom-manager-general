import React from "react";
import { getRandomElement } from "@/utils/arrayUtils";
import { joinPath } from "@/utils/pathUtils";

// Change this to your real FTC build asset location.
const ftcBuildRoot = "https://your-cdn-or-s3-path/ftc-build-along";

function getFTCBuildAsset(assetName) {
  return joinPath(ftcBuildRoot, assetName);
}

const promptsList = [
  {
    id: "fastest-attachment",
    element: (
      <>
        <h2>FTC Build Along: Fastest Attachment Build</h2>

        <img
          src={getFTCBuildAsset("fastest-attachment-preview.png")}
          className="scaled-img"
          alt="FTC fastest attachment build preview"
        />

        <p>
          Build a simple robot attachment such as a scoop, pusher, or small arm
          using a limited set of FTC parts.
        </p>
        <p>
          Your attachment must connect securely to the robot and survive a quick shake test.
        </p>
        <hr />
      </>
    ),
    answerLink: getFTCBuildAsset("fastest-attachment-answer.png"),
  },

  {
    id: "one-piece-upgrade",
    element: (
      <>
        <h2>FTC Build Along: One Piece Upgrade</h2>

        <img
          src={getFTCBuildAsset("one-piece-upgrade-preview.png")}
          className="scaled-img"
          alt="FTC one piece upgrade preview"
        />

        <p>
          Improve an existing robot by changing just one part.
        </p>
        <p>
          Your goal is to make it stronger, more stable, easier to score with, or easier to drive.
        </p>
        <hr />
      </>
    ),
    answerLink: getFTCBuildAsset("one-piece-upgrade-answer.png"),
  },

  {
    id: "stability-test",
    element: (
      <>
        <h2>FTC Build Along: Stability Test</h2>

        <video controls className="scaled-video">
          <source
            src={getFTCBuildAsset("stability-test-demo.mp4")}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        <p>
          Build the tallest structure or attachment you can that stays upright for at least 10 seconds.
        </p>
        <p>
          Bonus points if it also stays stable while mounted on a robot.
        </p>
        <hr />
      </>
    ),
    answerLink: getFTCBuildAsset("stability-test-answer.png"),
  },

  {
    id: "mini-drivetrain-repair",
    element: (
      <>
        <h2>FTC Build Along: Mini Drivetrain Repair</h2>

        <img
          src={getFTCBuildAsset("mini-drivetrain-repair-preview.png")}
          className="scaled-img"
          alt="FTC drivetrain repair preview"
        />

        <p>
          Inspect a partially broken or incorrect drivetrain build and fix it.
        </p>
        <p>
          Find what is wrong, rebuild it properly, and explain what you changed.
        </p>
        <hr />
      </>
    ),
    answerLink: getFTCBuildAsset("mini-drivetrain-repair-answer.png"),
  },

  {
    id: "copycat-build",
    element: (
      <>
        <h2>FTC Build Along: BrickLink Copycat</h2>

        <img
          src={getFTCBuildAsset("copycat-build-preview.png")}
          className="scaled-img"
          alt="FTC copycat build preview"
        />

        <p>
          Study a simple reference mechanism for 20 seconds, then recreate it as closely as possible.
        </p>
        <p>
          Focus on shape, function, and connection points.
        </p>
        <hr />
      </>
    ),
    answerLink: getFTCBuildAsset("copycat-build-answer.png"),
  },

  {
    id: "shovel-build",
    element: (
      <>
        <h2>FTC Build Along: Space Shovel Attachment</h2>

        <img
          src={getFTCBuildAsset("shovel-build-preview.png")}
          className="scaled-img"
          alt="FTC shovel attachment preview"
        />

        <p>
          Build a shovel or scoop attachment that can collect an object and bring it back to base.
        </p>
        <p>
          Try to make it wide enough to scoop easily, but sturdy enough not to bend.
        </p>
        <hr />
      </>
    ),
    answerLink: getFTCBuildAsset("shovel-build-answer.png"),
  },

  {
    id: "launcher-build",
    element: (
      <>
        <h2>FTC Build Along: Sports Launcher Build</h2>

        <video controls className="scaled-video">
          <source
            src={getFTCBuildAsset("launcher-build-demo.mp4")}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        <p>
          Build a simple launcher or bucket-style attachment that can hold and launch a game piece forward.
        </p>
        <p>
          Your design should keep the object secure before launch.
        </p>
        <hr />
      </>
    ),
    answerLink: getFTCBuildAsset("launcher-build-answer.png"),
  },

  {
    id: "grabber-build",
    element: (
      <>
        <h2>FTC Build Along: Grabber Challenge</h2>

        <img
          src={getFTCBuildAsset("grabber-build-preview.png")}
          className="scaled-img"
          alt="FTC grabber build preview"
        />

        <p>
          Build a grabber or claw that can pick up a small object and release it into a target zone.
        </p>
        <p>
          Aim for a design that is easy to align and does not drop the object while moving.
        </p>
        <hr />
      </>
    ),
    answerLink: getFTCBuildAsset("grabber-build-answer.png"),
  },

  {
    id: "virtual-4-bar",
    element: (
      <>
        <h2>FTC Build Along: Virtual 4-Bar Mechanism</h2>

        <img
          src={getFTCBuildAsset("virtual-4-bar-preview.png")}
          className="scaled-img"
          alt="FTC virtual 4 bar preview"
        />

        <p>
          Build a simple virtual 4-bar style lift that raises a grabber upward while keeping it level.
        </p>
        <p>
          Explain how your design helps lift objects to a higher point.
        </p>
        <hr />
      </>
    ),
    answerLink: getFTCBuildAsset("virtual-4-bar-answer.png"),
  },
];

export function generateFTCBuildAlongPrompt() {
  const { element } = getRandomElement(promptsList);
  return element;
}

export function generateBuildAlongPrompt() {
  return generateFTCBuildAlongPrompt();
}

export { promptsList };
