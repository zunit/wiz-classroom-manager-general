import React from "react";
import { getRandomElement } from "@/utils/arrayUtils";
import { joinPath } from "@/utils/pathUtils";

const fllBuildAlongRoot = "https://your-cdn-or-s3-path/fll-build-along";

function getFLLBuildAlongAsset(assetName) {
  return joinPath(fllBuildAlongRoot, assetName);
}

const beginnerPrompts = [
  {
    element: (
      <>
        <h2>FLL Build Along: Simple Pusher Attachment</h2>
        <img
          src={getFLLBuildAlongAsset("simple-pusher-attachment.png")}
          className="scaled-img"
          alt="FLL simple pusher attachment"
        />
        <p>
          Build a front attachment that can push one mission model or block straight forward.
        </p>
        <p>
          Win condition: the attachment stays attached and pushes the object without falling off.
        </p>
        <hr />
      </>
    ),
  },

  {
    element: (
      <>
        <h2>FLL Build Along: Wall Alignment Guide</h2>
        <img
          src={getFLLBuildAlongAsset("wall-alignment-guide.png")}
          className="scaled-img"
          alt="FLL wall alignment guide"
        />
        <p>
          Build a side guide that helps the robot line up cleanly against a wall or field edge.
        </p>
        <p>
          Win condition: the guide helps the robot start straighter and more consistently.
        </p>
        <hr />
      </>
    ),
  },

  {
    element: (
      <>
        <h2>FLL Build Along: Block Collector Scoop</h2>
        <video controls className="scaled-video">
          <source
            src={getFLLBuildAlongAsset("block-collector-scoop.mp4")}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <p>
          Build a scoop that can collect one loose block or mission piece from the mat.
        </p>
        <p>
          Win condition: the scoop can hold the object while the robot drives slowly.
        </p>
        <hr />
      </>
    ),
  },

  {
    element: (
      <>
        <h2>FLL Build Along: Attachment That Fits in Base</h2>
        <img
          src={getFLLBuildAlongAsset("attachment-that-fits-in-base.png")}
          className="scaled-img"
          alt="FLL attachment that fits in base"
        />
        <p>
          Build an attachment that helps with a mission but is still small enough to stay inside base at the start.
        </p>
        <p>
          Win condition: it fits the size limit and still does one useful job.
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
          src={getFLLBuildAlongAsset("lift-arm.png")}
          className="scaled-img"
          alt="FLL lift arm"
        />
        <p>
          Build a simple arm that can be raised by one motor to lift or tap a mission model.
        </p>
        <p>
          Win condition: the arm moves up and down clearly without wobbling too much.
        </p>
        <hr />
      </>
    ),
  },

  {
    element: (
      <>
        <h2>FLL Build Along: Rubber Band Return Attachment</h2>
        <img
          src={getFLLBuildAlongAsset("rubber-band-return-attachment.png")}
          className="scaled-img"
          alt="FLL rubber band return attachment"
        />
        <p>
          Build an attachment that moves forward and then springs back using a rubber band.
        </p>
        <p>
          Win condition: it returns to its starting position after being pushed or activated.
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
        <h2>FLL Build Along: Two-Position Attachment</h2>
        <img
          src={getFLLBuildAlongAsset("two-position-attachment.png")}
          className="scaled-img"
          alt="FLL two position attachment"
        />
        <p>
          Build one attachment that can do two different jobs depending on its position.
        </p>
        <p>
          Example: one side pushes a lever and the other side collects a block.
        </p>
        <p>
          Win condition: both positions are usable and easy to switch between.
        </p>
        <hr />
      </>
    ),
  },

  {
    element: (
      <>
        <h2>FLL Build Along: Precision Grabber</h2>
        <video controls className="scaled-video">
          <source
            src={getFLLBuildAlongAsset("precision-grabber.mp4")}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <p>
          Build a grabber that can pick up one small object and release it in a target area.
        </p>
        <p>
          Win condition: the object is held securely and released on purpose, not by accident.
        </p>
        <hr />
      </>
    ),
  },

  {
    element: (
      <>
        <h2>FLL Build Along: Mission Lever Trigger</h2>
        <img
          src={getFLLBuildAlongAsset("mission-lever-trigger.png")}
          className="scaled-img"
          alt="FLL mission lever trigger"
        />
        <p>
          Build an attachment designed specifically to press or pull a mission lever.
        </p>
        <p>
          Win condition: the shape reaches the lever cleanly without hitting extra field elements.
        </p>
        <hr />
      </>
    ),
  },

  {
    element: (
      <>
        <h2>FLL Build Along: Removable Attachment System</h2>
        <img
          src={getFLLBuildAlongAsset("removable-attachment-system.png")}
          className="scaled-img"
          alt="FLL removable attachment system"
        />
        <p>
          Build a quick-swap system so one attachment can be removed and replaced with another.
        </p>
        <p>
          Win condition: the swap is fast, secure, and repeatable.
        </p>
        <hr />
      </>
    ),
  },

  {
    element: (
      <>
        <h2>FLL Build Along: Sorter Attachment</h2>
        <img
          src={getFLLBuildAlongAsset("sorter-attachment.png")}
          className="scaled-img"
          alt="FLL sorter attachment"
        />
        <p>
          Build an attachment that guides one type of object left and another type right.
        </p>
        <p>
          Win condition: the design clearly separates two objects using shape or path.
        </p>
        <hr />
      </>
    ),
  },

  {
    element: (
      <>
        <h2>FLL Build Along: Trap and Carry Attachment</h2>
        <video controls className="scaled-video">
          <source
            src={getFLLBuildAlongAsset("trap-and-carry-attachment.mp4")}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <p>
          Build an attachment that traps an object so the robot can carry it back to base.
        </p>
        <p>
          Win condition: the object stays captured while the robot drives.
        </p>
        <hr />
      </>
    ),
  },

  {
    element: (
      <>
        <h2>FLL Build Along: Low Profile Attachment</h2>
        <img
          src={getFLLBuildAlongAsset("low-profile-attachment.png")}
          className="scaled-img"
          alt="FLL low profile attachment"
        />
        <p>
          Build an attachment that stays low and compact but can still complete a useful mission action.
        </p>
        <p>
          Win condition: it does not block wheels or sensors and still works effectively.
        </p>
        <hr />
      </>
    ),
  },

  {
    element: (
      <>
        <h2>FLL Build Along: Attachment for a Specific Mission Model</h2>
        <img
          src={getFLLBuildAlongAsset("specific-mission-model-attachment.png")}
          className="scaled-img"
          alt="FLL specific mission model attachment"
        />
        <p>
          Design an attachment for one exact mission model on the table.
        </p>
        <p>
          Example: flip a bar, drag an object, lift a gate, or press a target.
        </p>
        <p>
          Win condition: your design clearly matches the mission instead of being a generic tool.
        </p>
        <hr />
      </>
    ),
  },
];

export function generateBuildAlongPrompt(difficulty) {
  const promptList =
    difficulty === "Beginner" ? beginnerPrompts : advancedPrompts;

  const { element } = getRandomElement(promptList);
  return element;
}