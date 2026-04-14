import React from "react";

const divStyle = {
  width: "calc(500px)",
  justifySelf: "center",
  marginTop: "1rem",
  marginBottom: "1rem",
};

export function generateFTCChallengeRoundRules() {
  return (
    <div style={divStyle}>
      <p>
        1. Challenge Round is a fast-paced FTC activity where students compete
        in short coding, strategy, driving, or robot mini-games.
      </p>
      <p>2. The instructor generates one random challenge prompt for the class.</p>
      <p>
        3. Students may compete individually or in teams depending on the
        challenge.
      </p>
      <p>
        4. The winner is the first person/team to complete the objective
        correctly, or the team with the highest score when time runs out.
      </p>
      <p>
        5. Every challenge must be demonstrated, explained, or judged before
        points are awarded.
      </p>
      <p>6. Some rounds may include a random twist or disadvantage.</p>

      <p>Beginner Challenge Twists:</p>
      <ol>
        <li>You may only ask for one hint</li>
        <li>You must explain your answer before testing</li>
        <li>Your team must choose one speaker and one builder/coder</li>
        <li>You only get 3 minutes to plan</li>
        <li>You must include one telemetry message or design label</li>
        <li>You must predict the result before you run it</li>
      </ol>

      <p>Advanced Challenge Twists:</p>
      <ol>
        <li>You only get one test attempt</li>
        <li>You must solve it using fewer parts or fewer lines of code</li>
        <li>You cannot touch the robot during the final run</li>
        <li>You must add one improvement beyond the minimum requirement</li>
        <li>You must explain why your strategy is better than another option</li>
        <li>You must complete the challenge under a stricter time limit</li>
      </ol>
    </div>
  );
}

export function generateChallengeRoundRules() {
  return generateFTCChallengeRoundRules();
}
