import React from "react";
import { getRandomElement } from "@/utils/arrayUtils";
import { joinPath } from "@/utils/pathUtils";

const fllChallengeRoundRoot = "https://your-cdn-or-s3-path/fll-challenge-round";

function getFLLChallengeRoundAsset(assetName) {
  return joinPath(fllChallengeRoundRoot, assetName);
}

const promptsList = [
  {
    element: (
      <>
        <h2>FLL Challenge Round: FLL Jeopardy</h2>
        <img
          src={getFLLChallengeRoundAsset("fll-jeopardy-basics.png")}
          className="scaled-img"
          alt="FLL Jeopardy basics"
        />
        <p>Answer these 5 FLL questions as fast as you can:</p>
        <ol>
          <li>What is the difference between an attachment and the base robot?</li>
          <li>What does a color sensor do?</li>
          <li>Why do teams use a gyro sensor?</li>
          <li>Why is it important for the robot to start in the same place every time?</li>
          <li>What is one reason a mission run might fail even if the code is correct?</li>
        </ol>
        <p>The team with the most correct answers wins.</p>
        <hr />
      </>
    ),
  },

  {
    element: (
      <>
        <h2>FLL Challenge Round: Code Relay</h2>
        <video controls className="scaled-video">
          <source
            src={getFLLChallengeRoundAsset("code-relay-drive-turn-stop.mp4")}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <p>Your team must build one short FLL program together.</p>
        <p>
          Student 1 adds a drive forward block. Student 2 adds a turn block.
          Student 3 adds a second drive block. Student 4 adds the stop block.
        </p>
        <p>First team to make the robot complete the path correctly wins.</p>
        <hr />
      </>
    ),
  },

  {
    element: (
      <>
        <h2>FLL Challenge Round: Minute to Win It</h2>
        <video controls className="scaled-video">
          <source
            src={getFLLChallengeRoundAsset("minute-to-win-it-push-model.mp4")}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <p>
          You have 1 minute to drive your robot out of base and push one mission model into the target area.
        </p>
        <p>The robot must start fully in base before the timer begins.</p>
        <p>Fastest successful run wins.</p>
        <hr />
      </>
    ),
  },

  {
    element: (
      <>
        <h2>FLL Challenge Round: Mystery Theme Build</h2>
        <img
          src={getFLLChallengeRoundAsset("mystery-theme-build-rescue-bot.png")}
          className="scaled-img"
          alt="Mystery theme build rescue bot"
        />
        <p><strong>Theme: Rescue Bot</strong></p>
        <p>
          In 7 minutes, build or sketch an attachment that could rescue an object and bring it back to base.
        </p>
        <p>Best design explanation and most believable idea wins.</p>
        <hr />
      </>
    ),
  },

  {
    element: (
      <>
        <h2>FLL Challenge Round: Teacher Boss Battle</h2>
        <img
          src={getFLLChallengeRoundAsset("teacher-boss-battle-out-and-back.png")}
          className="scaled-img"
          alt="Teacher boss battle out and back"
        />
        <p>The teacher challenges the whole class:</p>
        <p>
          Make one robot leave base, touch the target line, and return fully back to base in a single run.
        </p>
        <p>The class must agree on the final code before testing.</p>
        <p>If the robot completes all 3 steps, the class beats the boss.</p>
        <hr />
      </>
    ),
  },

  {
    element: (
      <>
        <h2>FLL Challenge Round: Debug Race</h2>
        <img
          src={getFLLChallengeRoundAsset("debug-race-turning-wrong-way.png")}
          className="scaled-img"
          alt="Debug race turning wrong way"
        />
        <p>
          Problem: the robot is supposed to turn right, but it keeps turning left during the mission.
        </p>
        <p>Your team must figure out what went wrong and explain how to fix it.</p>
        <p>Hint: check the motor direction or the turn block settings.</p>
        <p>First team to explain the bug and correct the program wins.</p>
        <hr />
      </>
    ),
  },

  {
    element: (
      <>
        <h2>FLL Challenge Round: Best Route Wins</h2>
        <img
          src={getFLLChallengeRoundAsset("best-route-wins-two-missions.png")}
          className="scaled-img"
          alt="Best route wins two missions"
        />
        <p>A robot starts in base and must do these 2 tasks:</p>
        <ol>
          <li>Push one mission model</li>
          <li>Park in the finish area</li>
        </ol>
        <p>Draw the best route and explain why it is faster or safer than the others.</p>
        <p>Best route and explanation win.</p>
        <hr />
      </>
    ),
  },

  {
    element: (
      <>
        <h2>FLL Challenge Round: What Does This Code Do?</h2>
        <img
          src={getFLLChallengeRoundAsset("what-does-this-code-do-drive-turn.png")}
          className="scaled-img"
          alt="What does this code do drive turn"
        />
        <p>Predict exactly what this program will do:</p>
        <pre>{`Drive forward 30 cm
Turn right 90 degrees
Drive forward 20 cm
Stop`}</pre>
        <p>Where will the robot end up? What direction will it be facing?</p>
        <p>Closest correct explanation wins.</p>
        <hr />
      </>
    ),
  },

  {
    element: (
      <>
        <h2>FLL Challenge Round: Edge Case Challenge</h2>
        <img
          src={getFLLChallengeRoundAsset("edge-case-challenge-bad-start-alignment.png")}
          className="scaled-img"
          alt="Edge case challenge bad start alignment"
        />
        <p>
          Your robot worked perfectly in practice, but in the real round it starts a little crooked in base.
        </p>
        <p>What could go wrong?</p>
        <p>
          Give the best fix: straighten the launch setup, add slower speed, adjust the turn,
          or use a wall alignment guide.
        </p>
        <p>Best backup plan wins.</p>
        <hr />
      </>
    ),
  },
];

export function generateFLLChallengeRoundPrompt() {
  const { element } = getRandomElement(promptsList);
  return element;
}

export function generateChallengeRoundPrompt() {
  return generateFLLChallengeRoundPrompt();
}