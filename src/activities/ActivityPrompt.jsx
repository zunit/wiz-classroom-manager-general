import React from "react";
import ActivityCustomPrompt from "@/activities/ActivityCustomPrompt";
import ActivityRandomPrompt from "@/activities/ActivityRandomPrompt";
import ActivityTypes from "@/utils/ActivityTypes";
import { Button, Dialog, DialogContent, DialogTitle } from "@mui/material";
import { generateStrategyAndProblemSolvingRules } from "@/prompts/strategy-and-problem-solving-rules";
import { generateCodeAlongRules } from "@/prompts/code-along-rules";
import { generateBuildAlongRules } from "@/prompts/build-along-rules";
import { generateChallengeRoundRules } from "@/prompts/challenge-round-rules";

/**
 * Contains the activity content.
 * Can be either a custom prompt, or a random prompt.
 */
function ActivityPrompt(props) {
  const [isRulesOpen, setIsRulesOpen] = React.useState(false);
  const {
    activityType,
    promptMode,
    randomPrompt,
    setRandomPrompt,
    customPrompt,
    handleChangePrompt,
  } = props;

  function getRulesContent() {
    switch (activityType) {
      case ActivityTypes.STRATEGY_AND_PROBLEM_SOLVING:
        return generateStrategyAndProblemSolvingRules();
      case ActivityTypes.CODE_ALONG:
        return generateCodeAlongRules();
      case ActivityTypes.BUILD_ALONG:
        return generateBuildAlongRules();
      case ActivityTypes.CHALLENGE_ROUND:
        return generateChallengeRoundRules();
      default:
        return null;
    }
  }

  const rulesContent = getRulesContent();

  return promptMode === "random" ? (
    <>
      {rulesContent ? (
        <>
          <Button
            variant="outlined"
            onClick={() => setIsRulesOpen(true)}
            sx={{ marginTop: "1rem", marginBottom: "1rem" }}
          >
            Rules
          </Button>
          <Dialog
            open={isRulesOpen}
            onClose={() => setIsRulesOpen(false)}
            fullWidth
            maxWidth="md"
          >
            <DialogTitle>Activity Rules</DialogTitle>
            <DialogContent>{rulesContent}</DialogContent>
          </Dialog>
        </>
      ) : null}
      <ActivityRandomPrompt {...{ activityType, randomPrompt, setRandomPrompt }} />
    </>
  ) : (
    <>
      {rulesContent ? (
        <>
          <Button
            variant="outlined"
            onClick={() => setIsRulesOpen(true)}
            sx={{ marginTop: "1rem", marginBottom: "1rem" }}
          >
            Rules
          </Button>
          <Dialog
            open={isRulesOpen}
            onClose={() => setIsRulesOpen(false)}
            fullWidth
            maxWidth="md"
          >
            <DialogTitle>Activity Rules</DialogTitle>
            <DialogContent>{rulesContent}</DialogContent>
          </Dialog>
        </>
      ) : null}
      <ActivityCustomPrompt
        customPrompt={customPrompt}
        onChange={handleChangePrompt}
      />
    </>
  );
}

export default ActivityPrompt;
