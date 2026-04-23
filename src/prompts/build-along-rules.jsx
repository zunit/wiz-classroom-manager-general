import React from "react";

const divStyle = {
  width: "calc(500px)",
  justifySelf: "center",
  marginTop: "1rem",
  marginBottom: "1rem",
};

export function generateFTCBuildAlongRules() {
  return {
    rules: (
      <div style={divStyle}>
        <p>
          1. Before starting, students randomly roll for a build disadvantage.
          Beginner students get easier disadvantages, while advanced students get
          harder ones.
        </p>
        <p>
          2. Each student or team completes the FTC build prompt shown on screen.
        </p>
        <p>
          3. The goal is to build the mechanism, attachment, or prototype as
          accurately and quickly as possible.
        </p>
        <p>
          4. A build only counts if it can be demonstrated or explained
          successfully.
        </p>
        <p>
          5. Instructors may allow students to use CAD, FTC parts, or classroom
          craft materials depending on the challenge.
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
          <li>You may only pick up 3 parts at a time</li>
          <li>You must explain each step out loud as you build</li>
          <li>You can only use one hand when fastening parts</li>
          <li>You may ask for only one hint</li>
          <li>You have a 7 minute time limit</li>
          <li>Your build must include a funny team name label</li>
        </ol>
      </div>
    ),
    advanced: (
      <div style={divStyle}>
        <p>Advanced:</p>
        <ol>
          <li>You may only change one structural piece after your first assembly</li>
          <li>You cannot use prebuilt examples after the first 20 seconds</li>
          <li>You must use the fewest parts possible</li>
          <li>You only get one test before final judging</li>
          <li>You must explain why your design is stable or efficient</li>
          <li>You must add one improvement feature beyond the base requirement</li>
        </ol>
      </div>
    ),
  };
}

export function generateBuildAlongRules() {
  return generateFTCBuildAlongRules();
}
