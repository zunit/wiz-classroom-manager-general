import { getRandomElement } from "@/utils/arrayUtils";
import { capitalize } from "@/utils/stringUtils";

const divStyle = {
  width: "calc(500px)",
  justifySelf: "center",
  marginTop: "1rem",
  marginBottom: "1rem",
};

export function jeopardyRules() {
  return (
    <div style={divStyle}>
      <>
        <p>1. Click the 'Generate!' button to randomly select a question. Read the question out loud to the students.</p>
        <p>2. Whichever student raises their hand first gets to answer the question. There is a button to raise your hand in Google Meet.</p>
        <p>3. Click on the choice that the student selected. If the student guesses correctly, they get a point. If they don't, the answer is revealed.</p>
        <p>4. Repeat until you've generated 4 questions!</p>
      </>
    </div>
  );
}