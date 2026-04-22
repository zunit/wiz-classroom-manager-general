import React from "react";

const divStyle = {
  width: "calc(500px)",
  justifySelf: "center",
  marginTop: "1rem",
  marginBottom: "1rem",
};

export function generateFLLCodeAlongRules() {
  return {
    rules: (
      <div style={divStyle}>
        <p>
          1. Before starting, students randomly roll for a coding disadvantage.
          Beginner students get easier disadvantages, while advanced students get
          harder ones.
        </p>

        <p>
          2. Each student or team completes the FLL coding prompt shown on screen.
        </p>

        <p>
          3. The first student or team to finish, test, and demonstrate the required
          robot behavior wins.
        </p>

        <p>
          4. Students may only ask the instructor for one hint unless the round is
          marked as beginner-friendly.
        </p>

        <p>
          5. The code must run successfully, and the robot must actually complete
          the task for it to count.
        </p>

        <p>
          6. Use a random number generator to select one of the following
          disadvantages.
        </p>
      </div>
    ),
    beginner: (
      <div style={divStyle}>
        <p>Beginner:</p>
        <ol>
          <li>No using the backspace key</li>
          <li>Must narrate what you are typing out loud</li>
          <li>Must type with one hand</li>
          <li>Cannot use your mouse after the program is created</li>
          <li>Maximum 6 minutes to complete the mission</li>
          <li>All comments or labels must be funny robot-themed messages</li>
        </ol>
      </div>
    ),
    advanced: (
      <div style={divStyle}>
        <p>Advanced:</p>
        <ol>
          <li>Cannot use your mouse or arrow keys</li>
          <li>Cannot use a loop block or loop statement</li>
          <li>Cannot run the code until you think it is finished</li>
          <li>You may only use 8 main coding steps for the mission logic</li>
          <li>All variable names must be gibberish except hardware names</li>
          <li>You must add one useful debugging message, sound, or display output</li>
        </ol>
      </div>
    ),
  };
}

export function generateCodeAlongRules() {
  return generateFLLCodeAlongRules();
}
