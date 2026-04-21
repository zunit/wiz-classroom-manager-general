import React from "react";
import { AppContext } from "@/context/AppContext";
import ActivityTypes from "@/utils/ActivityTypes";
import { generateStrategyAndProblemSolvingPrompt } from "@/prompts/strategy-and-problem-solving-prompts";
import { generateCodeAlongPrompt } from "@/prompts/code-along-prompts";
import { generateBuildAlongPrompt } from "@/prompts/build-along-prompts";
import { generateChallengeRoundPrompt } from "@/prompts/challenge-round-prompts";
import { Button } from "@mui/material";
import "@/styles/activity-page.css";

/**
 * Parent component for random generated activity prompts.
 */
function ActivityRandomPrompt(props) {
  const { chunks, currentChunkIndex } = React.useContext(AppContext);
  const { activityType, randomPrompt, setRandomPrompt } = props;

  const activity = chunks[currentChunkIndex];

  const handleGeneratePrompt = React.useCallback(() => {
    const prompt = generatePrompt();
    setRandomPrompt(prompt);
  });

  const generatePrompt = React.useCallback(() => {
    if (activityType === ActivityTypes.STRATEGY_AND_PROBLEM_SOLVING) {
      return generateStrategyAndProblemSolvingPrompt();
    }

    if (activityType === ActivityTypes.CODE_ALONG) {
      return generateCodeAlongPrompt(activity.difficulty);
    }

    if (activityType === ActivityTypes.BUILD_ALONG) {
      return generateBuildAlongPrompt(activity.difficulty);
    }

    if (activityType === ActivityTypes.CHALLENGE_ROUND) {
      return generateChallengeRoundPrompt();
    }
  });

  return (
    <div
      className={`activity-random-prompt ${activityType.toLowerCase().replaceAll("_", "-")}`}
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
