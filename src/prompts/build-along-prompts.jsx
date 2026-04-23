import React from "react";
import { getRandomElement } from "@/utils/arrayUtils";
import { joinPath } from "@/utils/pathUtils";

// Change this to your real FTC build asset location.
const ftcBuildRoot = "https://wizroboticsintro.s3.us-east-2.amazonaws.com/Wiz-Camp/FTC-Camp/Level-5-Classroom-Manager-ftc/build-along/";

function getFTCBuildAsset(assetName) {
  return joinPath(ftcBuildRoot, assetName);
}

const promptsList = [
  {
    id: "fastest-attachment",
    element: (
      <>
        <h2>FTC Build Along: Fastest Attachment Build</h2>

        <p>
          Build a simple robot attachment such as a scoop, pusher, or small arm
          using a limited set of FTC parts.
        </p>
        <p>
          Your attachment must connect securely to the robot and survive a quick
          shake test.
        </p>
        <hr />
      </>
    ),
  },

  {
    id: "onshape-copycat-part",
    element: (
      <>
        <h2>FTC Build Along: Onshape Copycat Part</h2>

        <img
          src={getFTCBuildAsset("onshape-copycat-part-preview.png")}
          className="scaled-img"
          alt="FTC Onshape copycat part preview"
        />

        <p>
          Study the sample CAD part shown above, then recreate it in Onshape as
          closely as possible.
        </p>
        <p>
          Focus on matching the overall shape, hole placement, proportions, and
          main features of the part.
        </p>
        <hr />
      </>
    ),
    answerElement: (
      <>
        <h2>FTC Build Along Answer: Onshape Copycat Part</h2>
        <p>
          Watch the tutorial below for a guided part replication walkthrough.
        </p>
        <p>
          If the embedded video does not load, copy and paste this link into your browser:
        </p>
        <pre className="code-block">https://www.youtube.com/watch?v=Td-QwZgVN9k</pre>
        <p>
          <a
            href="https://www.youtube.com/watch?v=Td-QwZgVN9k"
            target="_blank"
            rel="noreferrer"
          >
            Open tutorial in YouTube
          </a>
        </p>
        <iframe
          className="scaled-video"
          src="https://www.youtube.com/watch?v=Td-QwZgVN9k"
          title="Onshape Copycat Part Tutorial"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
        <hr />
      </>
    ),
  },

  {
    id: "onshape-copycat-assembly",
    element: (
      <>
        <h2>FTC Build Along: Onshape Copycat Assembly</h2>

        <img
          src={getFTCBuildAsset("onshape-copycat-assembly-preview.png")}
          className="scaled-img"
          alt="FTC Onshape copycat assembly preview"
        />

        <p>
          Study the sample CAD assembly shown above, then recreate it in Onshape
          as closely as possible.
        </p>
        <p>
          Focus on how the parts connect, the spacing between pieces, and the
          overall structure of the build.
        </p>
        <hr />
      </>
    ),
    answerElement: (
      <>
        <h2>FTC Build Along Answer: Onshape Copycat Assembly</h2>
        <p>
          Watch the tutorial below for a guided assembly replication walkthrough.
        </p>
        <p>
          If the embedded video does not load, copy and paste this link into your browser:
        </p>
        <pre className="code-block">https://www.youtube.com/watch?v=k8u_Dl11xnQ</pre>
        <p>
          <a
            href="https://www.youtube.com/watch?v=k8u_Dl11xnQ"
            target="_blank"
            rel="noreferrer"
          >
            Open tutorial in YouTube
          </a>
        </p>
        <iframe
          className="scaled-video"
          src="https://www.youtube.com/watch?v=k8u_Dl11xnQ"
          title="Onshape Copycat Assembly Tutorial"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
        <hr />
      </>
    ),
  },

  {
    id: "linear-slide-build",
    element: (
      <>
        <h2>FTC Build Along: Linear Slide Lift Build</h2>

        <video controls className="scaled-video">
          <source
            src={getFTCBuildAsset("linear-slide-build-demo.mp4")}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        <p>
          Build a linear slide style lift inspired by the reference video.
        </p>
        <p>
          Your lift should raise smoothly, stay supported while extended, and
          mount cleanly to the robot chassis.
        </p>
        <hr />
      </>
    ),
  },
];

function buildAnswerElement(prompt) {
  if (!prompt?.answerElement) return null;
  return prompt.answerElement;
}

export function generateFTCBuildAlongPrompt() {
  return getRandomElement(promptsList).element;
}

export function generateBuildAlongPrompt() {
  return getRandomElement(promptsList);
}

export function getFTCBuildAlongPromptById(promptId) {
  const prompt = promptsList.find((item) => item.id === promptId);
  return prompt ? prompt.element : null;
}

export function getFTCBuildAlongAnswer(promptId) {
  const prompt = promptsList.find((item) => item.id === promptId);
  return buildAnswerElement(prompt);
}

export { promptsList };
