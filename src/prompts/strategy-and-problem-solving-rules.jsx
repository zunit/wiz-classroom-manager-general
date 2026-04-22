import React from "react";

const divStyle = {
  width: "calc(500px)",
  justifySelf: "center",
  marginTop: "1rem",
  marginBottom: "1rem",
};

export function generateFLLStrategyAndProblemSolvingRules() {
  return {
    rules: (
      <div style={divStyle}>
        <p>
          1. Strategy and Problem Solving is an FLL activity where students think
          through robot missions, coding choices, field setup, and match strategy.
        </p>

        <p>
          2. The instructor generates one random strategy or problem-solving prompt
          for the class.
        </p>

        <p>
          3. Students may work individually or in teams depending on the challenge.
        </p>

        <p>
          4. The goal is to give the strongest answer, plan, explanation, or fix
          for the situation shown on screen.
        </p>

        <p>
          5. Answers must be explained clearly before points are awarded.
        </p>

        <p>
          6. Some rounds may include a random twist or disadvantage.
        </p>
      </div>
    ),
    beginner: (
      <div style={divStyle}>
        <p>Beginner Challenge Twists:</p>
        <ol>
          <li>You may only ask for one hint</li>
          <li>You must explain your answer before testing</li>
          <li>Your team must choose one speaker and one note-taker</li>
          <li>You only get 3 minutes to plan</li>
          <li>You must draw your idea before sharing it</li>
          <li>You must predict what the robot will do before hearing other answers</li>
        </ol>
      </div>
    ),
    advanced: (
      <div style={divStyle}>
        <p>Advanced Challenge Twists:</p>
        <ol>
          <li>You only get one final answer</li>
          <li>You must solve it using fewer coding steps or fewer changes</li>
          <li>You must give both a main plan and a backup plan</li>
          <li>You must improve the strategy beyond the minimum requirement</li>
          <li>You must explain why your idea is better than another option</li>
          <li>You must finish under a stricter time limit</li>
        </ol>
      </div>
    ),
  };
}

export function generateStrategyAndProblemSolvingRules() {
  return generateFLLStrategyAndProblemSolvingRules();
}
