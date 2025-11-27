import { getRandomElement } from "@/utils/arrayUtils";
import { capitalize } from "@/utils/stringUtils";

const divStyle = {
  width: "calc(500px)",
  justifySelf: "center",
  marginTop: "1rem",
  marginBottom: "1rem",
};

export function generateCodeRandomizerRules() {
  return (
    <div style={divStyle}>
      <>
        <p>1. Before starting their task, they will randomly roll for a disadvantage. Beginner students will get easier disadvantages while advanced students will get harder disadvantages.</p>
        <p>2. Each student will complete their own coding task. Whoever finishes their task first wins.</p>
        <p>3. Use a random number generator to select one of the following disadvantages.</p>
        <p>Beginner:</p>
        <ol>
          <li>No using the backspace key</li>
          <li>Must narrate what you're typing outloud</li>
          <li>Must type with one hand</li>
          <li>Cannot use your mouse</li>
          <li>Maximum 5 minutes to complete the mission</li>
          <li>Variable names must be gibberish</li>
        </ol>
        <p>Advanced:</p>
        <ol>
          <li>Cannot use your mouse and arrow keys</li>
          <li>Cannot use for-loops</li>
          <li>Type blindfolded for the first minute (close your eyes!)</li>
          <li>Limited to using 8 lines to complete the mission</li>
          <li>Cannot test/run code until you think it is done (only get one try!)</li>
          <li>Function/Variable names must be gibberish</li>
        </ol>
      </>
      {/* <img src={imgPath} style={imgStyle} /> */}
    </div>
  );
}