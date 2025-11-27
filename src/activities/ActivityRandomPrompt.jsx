import React, { useState } from "react";

import { renderToStaticMarkup } from "react-dom/server";
import { AppContext } from "@/context/AppContext";
import ActivityTypes from "@/utils/ActivityTypes";
// import { generateDesignPrompt } from "@/prompts/code-randomizer-prompts";
// import { generateCodeReadingPrompt } from "@/prompts/code-relay-prompts";
// import { generateCodeWritingPrompt } from "@/prompts/secret-mission-prompts";
import { generateJeopardy } from "@/prompts/jeopardy-prompts";
import { Button } from "@mui/material";

import { generateCodeRelayRules } from "@/prompts/code-relay-rules";
import { generateCodeRelayPrompt } from "@/prompts/code-relay-prompts";
import { generateCodeRandomizerRules } from "@/prompts/code-randomizer-rules";
import { secretMissionRules } from "@/prompts/secret-mission-rules";
import { jeopardyRules } from "@/prompts/jeopardy-rules";

import { generateCodeRandomizerPrompt } from "@/prompts/code-randomizer-prompts";
import { generateSecretMissionPrompt } from "@/prompts/secret-mission-prompts";
import PythonQuestionCard from "@/prompts/jeopardy-card";

import { Tooltip } from "@mui/material";

/**
 * Parent component for random generated activity prompts.
 */
function ActivityRandomPrompt(props) {
  const { chunks, currentChunkIndex } = React.useContext(AppContext);
  const { activityType, randomPrompt, setRandomPrompt } = props;

  const activity = chunks[currentChunkIndex];
  const [answerLink, setAnswerLink] = React.useState(null);
  const [promptKey, setPromptKey] = useState(0);

  const handleGeneratePrompt = React.useCallback(() => {
    const prompt = generatePrompt();

    console.log(activityType)
    
    if (activityType === ActivityTypes.JEOPARDY) {
      setRandomPrompt(prompt.element);
      setPromptKey(prev => prev + 1);
      setAnswerLink(null);
    } else {
      setRandomPrompt(prompt.element);
      setAnswerLink(prompt.answerLink);
    }
  });

  const generatePrompt = React.useCallback(() => {
    if (activityType === ActivityTypes.CODE_RANDOMIZER) {
      return generateCodeRandomizerPrompt(activity);
    }

    if (activityType === ActivityTypes.CODE_RELAY) {
      return generateCodeRelayPrompt(activity);
    }

    if (activityType === ActivityTypes.SECRET_MISSION) {
      return generateSecretMissionPrompt(activity);
    }

    if (activityType === ActivityTypes.JEOPARDY) {
      return generateJeopardy(activity);
    }
  });

  const generateRules = React.useCallback(() => {
    if (activityType === ActivityTypes.CODE_RANDOMIZER) {
      return generateCodeRandomizerRules();
    }

    if (activityType === ActivityTypes.CODE_RELAY) {
      return generateCodeRelayRules();
    }

    if (activityType === ActivityTypes.SECRET_MISSION) {
      return secretMissionRules();
    }

    if (activityType === ActivityTypes.JEOPARDY) {
      return jeopardyRules();      
    }
  });

  const handleOpenAnswerPage = React.useCallback(() => {
    window.open(answerLink)
  })


  // helper: open HTML in a new tab safely
function openHtmlInNewTab(htmlString) {
  const blob = new Blob([htmlString], { type: "text/html" });
  const url = URL.createObjectURL(blob);
  const win = window.open(url, "_blank", "noopener");
  // if (!win) {
  //   alert("Pop-up blocked. Please allow pop-ups for this site to view the rules.");
  //   URL.revokeObjectURL(url); // cleanup if blocked
  //   return;
  // }
  // revoke after the new tab loads the blob
  win.addEventListener("load", () => URL.revokeObjectURL(url), { once: true });
}

const handleRules = React.useCallback(() => {
  const rulesElement = generateRules();           // must return JSX
  if (!rulesElement) {
    console.warn("generateRules() returned nothing for this activityType.");
    return;
  }

  const body = renderToStaticMarkup(rulesElement); // JSX -> HTML

  const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <title>Rules</title>
  <style>
    :root { --bg:#fff; --fg:#000; --border:#ccc; }
    html,body { margin:0; background:var(--bg); color:var(--fg);
      font:16px/1.6 system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif; }
    .wrap { max-width:700px; margin:32px auto; padding:16px;
      border:1px solid var(--border); border-radius:12px; background:#fff; }
  </style>
</head>
<body>
  <div class="wrap">${body}</div>
</body>
</html>`;

  openHtmlInNewTab(html);
});

  return (
    <div
      style={{
        width: "calc(700px - 2rem)",
        justifySelf: "center",
        border: "1px solid var(--border-color)",
        borderRadius: "8px",
        marginTop: "1rem",
        paddingLeft: "1rem",
        paddingRight: "1rem",
      }}
    >
      {randomPrompt === null ? (
        <p>Click the button below to generate the prompt!</p>
      ) : activityType === ActivityTypes.JEOPARDY ? (
        <PythonQuestionCard prompt={randomPrompt.element} key={promptKey}/>
      ) : (
        randomPrompt
      )}
      <Button
        variant="contained"
        onClick={handleGeneratePrompt}
        sx={{ marginBottom: "1rem" }}
      >
        Generate!
      </Button>

      <p></p>

      <Button
        variant="contained"
        onClick={handleRules}
        sx={{ marginBottom: "1rem" }}
      >
        Rules
      </Button>

      <p></p>

      {activityType !== ActivityTypes.JEOPARDY && (
        <Tooltip
          title={answerLink ? "Open answer key in a new tab" : "Don't show this page to the students!"}
          arrow
          placement="right"
        >
          <Button
            variant="contained"
            onClick={handleOpenAnswerPage}
            sx={{ marginBottom: "1rem" }}
          >
            Answer Key
          </Button>
        </Tooltip>
      )}

    </div>
  );
}

export default ActivityRandomPrompt;
