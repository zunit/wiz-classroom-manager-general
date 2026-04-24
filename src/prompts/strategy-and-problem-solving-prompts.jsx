import React from "react";
import { getRandomElement } from "@/utils/arrayUtils";
import { joinPath } from "@/utils/pathUtils";

// Change this to your real FTC strategy asset location.
const ftcStrategyRoot = "https://wizroboticsintro.s3.us-east-2.amazonaws.com/Wiz-Camp/FTC-Camp/Level-5-Classroom-Manager-ftc/strategy-and-problem-solving";

function getFTCStrategyAsset(assetName) {
  return joinPath(ftcStrategyRoot, assetName);
}

const promptsList = [
  {
    id: "what-does-this-code-do",
    element: (
      <>
        <h2>FTC Strategy & Problem Solving: What Does This Code Do?</h2>

        <p>
          Read each FTC Java snippet and predict exactly what the robot or mechanism
          will do.
        </p>

        <p><strong>Example 1</strong></p>
        <pre>{`leftMotor.setPower(0.5);
rightMotor.setPower(0.5);
sleep(1000);
leftMotor.setPower(0.0);
rightMotor.setPower(0.0);`}</pre>

        <p><strong>Example 2</strong></p>
        <pre>{`leftMotor.setPower(0.4);
rightMotor.setPower(-0.4);
sleep(700);
leftMotor.setPower(0.0);
rightMotor.setPower(0.0);`}</pre>

        <p><strong>Example 3</strong></p>
        <pre>{`if (gamepad1.a) {
    clawServo.setPosition(1.0);
} else if (gamepad1.b) {
    clawServo.setPosition(0.0);
}`}</pre>

        <p><strong>Example 4</strong></p>
        <pre>{`if (distanceSensor.getDistance(DistanceUnit.CM) < 10) {
    leftMotor.setPower(0.0);
    rightMotor.setPower(0.0);
} else {
    leftMotor.setPower(0.3);
    rightMotor.setPower(0.3);
}`}</pre>

        <p>Explain what happens in each case and why.</p>
        <hr />
      </>
    ),
    answerElement: (
      <>
        <h2>FTC Strategy & Problem Solving Answer: What Does This Code Do?</h2>

        <p><strong>Example 1 Answer:</strong></p>
        <p>
          Both drive motors run forward at half power for 1 second, so the robot
          drives straight forward for a short time and then stops.
        </p>

        <p><strong>Example 2 Answer:</strong></p>
        <p>
          The left motor goes forward while the right motor goes backward, so the
          robot turns in place for about 700 milliseconds and then stops.
        </p>

        <p><strong>Example 3 Answer:</strong></p>
        <p>
          Pressing A moves the claw servo to position 1.0, and pressing B moves it
          to position 0.0. In most setups, that means one button opens the claw and
          the other closes it.
        </p>

        <p><strong>Example 4 Answer:</strong></p>
        <p>
          If the distance sensor sees an object closer than 10 cm, the robot stops.
          Otherwise, it drives forward slowly at 0.3 power on both motors.
        </p>
        <hr />
      </>
    ),
  },

  {
    id: "best-route-wins",
    element: (
      <>
        <h2>FTC Strategy & Problem Solving: Best Route Wins</h2>

        <p>
          You are given a mock FTC field and a scoring objective decided by your
          camp counsellor.
        </p>
        <p>
          Plan the best autonomous route to score the most points or finish the
          fastest.
        </p>
        <p>
          Defend your route using speed, simplicity, consistency, and lower risk.
        </p>
        <hr />
      </>
    ),
    answerLink: getFTCStrategyAsset("best-route-wins-answer.png"),
  },

  {
    id: "design-research-debate",
    element: (
      <>
        <h2>FTC Strategy & Problem Solving: Design Research Debate</h2>

        <p>
          Pair up and research 2 different robot designs that teams could use for
          the current FTC season’s game.
        </p>
        <p>Compare the two designs and decide which one is better.</p>
        <p>
          Defend each design using scoring ability, speed, stability, simplicity,
          consistency, and how hard it would be to build and drive well.
        </p>
        <p>
          Be ready to argue why your final choice is the best overall design for
          the game.
        </p>
        <hr />
      </>
    ),
    answerLink: getFTCStrategyAsset("design-research-debate-answer.png"),
  },

  {
    id: "edge-case-challenge",
    element: (
      <>
        <h2>FTC Strategy & Problem Solving: Edge Case Challenge</h2>

        <p>Explain the best response to each of these 4 FTC edge cases:</p>
        <ol>
          <li>The robot starts slightly crooked before autonomous begins.</li>
          <li>The claw misses the game piece on the first attempt.</li>
          <li>The distance sensor does not give the expected reading.</li>
          <li>The robot overshoots the parking zone at the end of the match.</li>
        </ol>
        <p>
          For each one, explain what could go wrong and what the smartest fix or
          backup strategy would be.
        </p>
        <hr />
      </>
    ),
    answerLink: getFTCStrategyAsset("edge-case-challenge-answer.png"),
  },
  {
  id: "mechanism-matchup",
  element: (
    <>
      <h2>FTC Strategy & Problem Solving: Mechanism Matchup</h2>

      <video controls className="scaled-video">
        <source
          src={getFTCStrategyAsset("mechanism-matchup-preview.mp4")}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <p>
        A team needs to pick up a game piece reliably, move quickly, and score
        with good control.
      </p>
      <p>
        Which mechanism is the best choice: a claw, a scoop, or a pusher?
      </p>
      <p>
        Choose one and explain why it is the best balance of speed, simplicity,
        consistency, and driver control.
      </p>
      <p>
        Also explain one weakness of your choice and one reason another team
        might choose a different design.
      </p>
      <hr />
    </>
  ),
  answerElement: (
    <>
      <h2>FTC Strategy & Problem Solving Answer: Mechanism Matchup</h2>

      <p>
        <strong>Sample answer:</strong> A claw is often the best choice when the
        team needs reliable pickup and controlled scoring. It usually holds a
        game piece more securely than a scoop or pusher, which helps with
        consistency. A scoop may be faster for collecting objects from the floor,
        but it can be less precise when the robot has to place or carry
        something carefully. A pusher is the simplest design, but it is only a
        strong option if the game mainly rewards pushing rather than controlled
        pickup. The weakness of a claw is that it can be slower and more complex
        to build. Another team might choose a scoop if speed matters more than
        precise holding.
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

export function generateFTCStrategyPrompt() {
  const { element } = getRandomElement(promptsList);
  return element;
}

export function generateStrategyAndProblemSolvingPrompt() {
  return generateFTCStrategyPrompt();
}

export function getFTCStrategyPromptById(promptId) {
  const prompt = promptsList.find((item) => item.id === promptId);
  return prompt ? prompt.element : null;
}

export function getFTCStrategyAnswer(promptId) {
  const prompt = promptsList.find((item) => item.id === promptId);
  return buildAnswerElement(prompt);
}

export { promptsList };