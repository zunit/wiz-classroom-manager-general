import React from "react";

const divStyle = {
  width: "calc(500px)",
  justifySelf: "center",
  marginTop: "1rem",
  marginBottom: "1rem",
};

export function generateFTCStrategyRules() {
  return {
    rules: (
      <div style={divStyle}>
        <p>
          1. Strategy &amp; Problem Solving is about thinking like an FTC
          engineer, driver, and strategist.
        </p>
        <p>
          2. Students will be given a robot scenario, code snippet, field setup,
          or design comparison.
        </p>
        <p>
          3. Their goal is to explain the best choice, predict the result, or
          solve the problem as clearly as possible.
        </p>
        <p>
          4. Students earn points for correct reasoning, strong explanations, and
          realistic FTC solutions.
        </p>
        <p>
          5. Some prompts may be completed individually, while others may be done
          in teams.
        </p>
        <p>
          6. Instructors should reward both the final answer and the quality of
          the thinking process.
        </p>
      </div>
    ),
    beginner: (
      <div style={divStyle}>
        <p>Beginner Strategy Twists:</p>
        <ol>
          <li>You must give your answer in one sentence first, then explain it</li>
          <li>You may draw a diagram before answering</li>
          <li>You only get one minute to plan</li>
          <li>You must include one reason why another option is worse</li>
          <li>You must predict the robot&apos;s result before hearing other teams</li>
          <li>You may only use 3 key FTC words in your explanation</li>
        </ol>
      </div>
    ),
    advanced: (
      <div style={divStyle}>
        <p>Advanced Strategy Twists:</p>
        <ol>
          <li>You must give both a best-case and worst-case outcome</li>
          <li>You must suggest one backup plan if the first strategy fails</li>
          <li>You must defend your answer against another team&apos;s argument</li>
          <li>You must identify one hidden risk in the scenario</li>
          <li>You must improve the strategy without changing the robot hardware</li>
          <li>You must explain how driver skill changes the final answer</li>
        </ol>
      </div>
    ),
  };
}

export function generateStrategyAndProblemSolvingRules() {
  return generateFTCStrategyRules();
}
