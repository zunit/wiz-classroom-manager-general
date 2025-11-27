import { getRandomElement } from "@/utils/arrayUtils";
import { capitalize } from "@/utils/stringUtils";

const divStyle = {
  width: "calc(500px)",
  justifySelf: "center",
  marginTop: "1rem",
  marginBottom: "1rem",
};

export function secretMissionRules() {
  return (
    <div style={divStyle}>
      <>
        <p>1. Each student will get a 'secret mission' that they need to include in their main coding task.</p>
        <p>2. Every student will complete the same main coding task.</p>
        <p>3. After everyone finishes, they share their code and take turns guessing what each other's secret mission was. Everyone gets one guess!</p>
        <p>4. Use a random number generator to pick a 'secret mission' below. Use the WizRobotics chat function to tell each student what their secret mission is!</p>
        <p>Secret Missions:</p>
        <ol>
          <li>Include an unreachable elif</li>
          <li>Include an unreachable else</li>
          <li>Include an if statement that never runs</li>
          <li>Include a list</li>
          <li>Include a loop</li>
          <li>Include a function</li>
          <li>Include comments in your code</li>
          <li>Append to a list</li>
          <li>Remove an item from a list</li>
        </ol>

      </>
    </div>
  );
}