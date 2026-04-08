import React from "react";
import StrategyAndProblemSolvingPrompts from "@/prompts/strategy-and-problem-solving-prompts";
import Button from "@mui/material/Button";

export const PromptType = {
  STRATEGY_AND_PROBLEM_SOLVING: "STRATEGY_AND_PROBLEM_SOLVING",
  CHALLENGE_ROUND_LOCATION: "CHALLENGE_ROUND_LOCATION",
  CHALLENGE_ROUND_CHARACTER: "CHALLENGE_ROUND_CHARACTER",
  CHALLENGE_ROUND_OBJECT: "CHALLENGE_ROUND_OBJECT",
};

function DefaultPrompt(props) {
  const [prompt, setPrompt] = React.useState(null);

  function generatePrompt() {
    let promptSource;
    switch (props.promptType) {
      case PromptType.STRATEGY_AND_PROBLEM_SOLVING:
        promptSource = StrategyAndProblemSolvingPrompts;
        break;
      default:
        console.warn(
          `Given prompt source is invalid (was given ${props.promptType}`
        );
        promptSource = StrategyAndProblemSolvingPrompts;
        break;
    }

    const promptIndex = Math.floor(Math.random() * promptSource.length);
    setPrompt(promptSource[promptIndex]);
  }

  function NoPrompt() {
    return (
      <>
        <p>Click the button below to generate a prompt:</p>
        <Button variant="contained" onClick={generatePrompt}>
          Generate Prompt
        </Button>
      </>
    );
  }

  function GeneratedPrompt() {
    return (
      <>
        <p style={{marginBottom: "0.5em"}}>Your prompt is:</p>
        <h1 style={{marginTop: "0", marginBottom: "0"}}>{prompt}</h1>
        <Button variant="contained" style={{marginTop: "1.5em"}} onClick={generatePrompt}>
          Generate Another Prompt
        </Button>
      </>
    );
  }

  return (
    <div style={{ marginTop: "2em", marginBottom: "2em" }}>
      {prompt === null ? <NoPrompt /> : <GeneratedPrompt />}
    </div>
  );
}

export default DefaultPrompt;
