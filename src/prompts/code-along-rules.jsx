import React from "react";

const divStyle = {
  width: "calc(500px)",
  justifySelf: "center",
  marginTop: "1rem",
  marginBottom: "1rem",
};

export function generateFTCCodeAlongRules() {
  return {
    rules: (
      <div style={divStyle}>
        <p>
          1. Before starting, students randomly roll for a coding disadvantage.
          Beginner students get easier disadvantages, while advanced students get
          harder ones.
        </p>
        <p>
          2. Each student or team completes the FTC Java coding prompt shown on
          screen.
        </p>
        <p>
          3. The first student/team to finish, test, and demonstrate the required
          robot behavior wins.
        </p>
        <p>
          4. Students may only ask the instructor for one hint unless the round
          is marked as beginner-friendly.
        </p>
        <p>
          5. Code must compile and the robot must actually perform the task to
          count as complete.
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
          <li>Cannot use your mouse after the OpMode is created</li>
          <li>Maximum 6 minutes to complete the mission</li>
          <li>All telemetry messages must be funny robot-themed messages</li>
        </ol>
      </div>
    ),
    advanced: (
      <div style={divStyle}>
        <p>Advanced:</p>
        <ol>
          <li>Cannot use your mouse or arrow keys</li>
          <li>Cannot use a for-loop</li>
          <li>Cannot run the code until you think it is done</li>
          <li>You only get 8 lines inside runOpMode() for the main task logic</li>
          <li>All variable names must be gibberish except hardware names</li>
          <li>You must add one useful telemetry line that helps debug the program</li>
        </ol>
      </div>
    ),
  };
}

export function generateCodeAlongRules() {
  return generateFTCCodeAlongRules();
}
