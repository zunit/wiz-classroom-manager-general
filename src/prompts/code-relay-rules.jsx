import { getRandomElement } from "@/utils/arrayUtils";
import { capitalize } from "@/utils/stringUtils";

const divStyle = {
  width: "calc(500px)",
  justifySelf: "center",
  marginTop: "1rem",
  marginBottom: "1rem",
};

export function generateCodeRelayRules() {
  return (
    <div style={divStyle}>
      <>
        <p>
          1. Students work together to complete a coding challenge. 
        </p>
        <p>
          2. The challenge will have different parts. For example, making the variables, coding the loop, printing the result, etc.
        </p>
        <p>
          3. Each student will complete each part of the challenge before passing it along to the next student (like a baton race!), starting from beginner students all the way to intermediate students.
        </p>
        <p>
          4. Each person will get 2-3 minutes to complete their portion of the challenge.
        </p>
      </>
    </div>
  );
}