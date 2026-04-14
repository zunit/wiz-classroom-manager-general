import React from "react";

const divStyle = {
  width: "calc(500px)",
  justifySelf: "center",
  marginTop: "1rem",
  marginBottom: "1rem",
};

export function generateFTCBuildAlongRules() {
  return (
    <div style={divStyle}>
      <p>
        1. Before the challenge begins, students randomly roll for a build disadvantage.
        Beginner students receive easier disadvantages, while advanced students receive harder ones.
      </p>

      <p>
        2. Each student or team must complete the FTC Build Along prompt shown on screen.
      </p>

      <p>
        3. The goal is to build the required mechanism, attachment, or prototype as accurately,
        neatly, and quickly as possible.
      </p>

      <p>
        4. A build only counts if the team can successfully demonstrate it or clearly explain how it works.
      </p>

      <p>
        5. Depending on the challenge, instructors may allow FTC parts, CAD, or classroom craft materials.
      </p>

      <p>
        6. Use a random number generator to choose one disadvantage from the list below.
      </p>

      <p>Beginner:</p>
      <ol>
        <li>You may only pick up 3 parts at a time</li>
        <li>You must explain each step out loud while building</li>
        <li>You may only use one hand when fastening parts</li>
        <li>You may ask the instructor for only 1 hint</li>
        <li>You have a maximum of 7 minutes to finish</li>
        <li>Your build must include a funny team name label</li>
      </ol>

      <p>Advanced:</p>
      <ol>
        <li>You may only change 1 structural piece after your first full assembly</li>
        <li>You may not look at prebuilt examples after the first 20 seconds</li>
        <li>You must complete the build using as few parts as possible</li>
        <li>You only get 1 test before final judging</li>
        <li>You must explain why your design is stable, efficient, or effective</li>
        <li>You must add 1 improvement feature beyond the base requirement</li>
      </ol>
    </div>
  );
}

export function generateBuildAlongRules() {
  return generateFTCBuildAlongRules();
}