import React from "react";
import { AppContext } from "@/context/AppContext";
import ActivityTypes from "@/utils/ActivityTypes";
import { Difficulties } from "@/utils/TimeChunkModel";
import { generateDesignPrompt } from "@/prompts/design-prompts";
import {
  generateCodeReadingBeginnerPrompt,
  generateCodeReadingExperiencedPrompt,
} from "@/prompts/code-reading-prompts";
import {
  generateCodeWritingBeginnerPrompt,
  generateCodeWritingExperiencedPrompt,
} from "@/prompts/code-writing-prompts";
import { generateFreestylePrompt } from "@/prompts/freestyle-prompts";
import { Button } from "@mui/material";

function ActivityRandomPrompt(props) {
  const { chunks, currentChunkIndex } = React.useContext(AppContext);
  const { activityType, randomPrompt, setRandomPrompt } = props;

  const activity = chunks[currentChunkIndex];

  const handleGeneratePrompt = React.useCallback(() => {
    const prompt = generatePrompt();
    setRandomPrompt(prompt);
  });

  const generatePrompt = React.useCallback(() => {
    if (activityType === ActivityTypes.DESIGN) {
      return generateDesignPrompt();
    }

    if (activityType === ActivityTypes.CODE_READING) {
      if (activity.difficulty === Difficulties.BEGINNER) {
        return generateCodeReadingBeginnerPrompt();
      }
      return generateCodeReadingExperiencedPrompt();
    }

    if (activityType === ActivityTypes.CODE_WRITING) {
      if (activity.difficulty === Difficulties.BEGINNER) {
        return generateCodeWritingBeginnerPrompt();
      }
      return generateCodeWritingExperiencedPrompt();
    }

    if (activityType === ActivityTypes.FREESTYLE) {
      return generateFreestylePrompt();
    }
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
    </div>
  );
}

export default ActivityRandomPrompt;
