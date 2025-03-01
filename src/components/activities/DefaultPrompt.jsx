import React from "react";
import DesignPrompts from "@/prompts/design-prompts";
import Button from "@mui/material/Button";

export const PromptType = {
  DESIGN: "DESIGN",
  FREESTYLE_LOCATION: "FREESTYLE_LOCATION",
  FREESTYLE_CHARACTER: "FREESTYLE_CHARACTER",
  FREESTYLE_OBJECT: "FREESTYLE_OBJECT",
};

function DefaultPrompt(props) {
  const [prompt, setPrompt] = React.useState(null);

  function generatePrompt() {
    let promptSource;
    switch (props.promptType) {
      case PromptType.DESIGN:
        promptSource = DesignPrompts;
        break;
      default:
        console.warn(
          `Given prompt source is invalid (was given ${props.promptType}`
        );
        promptSource = DesignPrompts;
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
