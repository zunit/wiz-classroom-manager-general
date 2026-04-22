import React from "react";
import ActivityCustomPrompt from "@/activities/ActivityCustomPrompt";
import ActivityRandomPrompt from "@/activities/ActivityRandomPrompt";
import ActivityTypes from "@/utils/ActivityTypes";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Tab,
  Tabs,
} from "@mui/material";
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
  const [rulesTab, setRulesTab] = React.useState("rules");
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
  const activeRulesContent = rulesContent ? rulesContent[rulesTab] : null;

  function handleOpenRules() {
    setRulesTab("rules");
    setIsRulesOpen(true);
  }

  function renderRulesDialog() {
    if (!rulesContent) {
      return null;
    }

    return (
      <>
        <Button
          variant="outlined"
          onClick={handleOpenRules}
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
          <DialogContent>
            <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 2 }}>
              <Tabs
                value={rulesTab}
                onChange={(_, newValue) => setRulesTab(newValue)}
              >
                <Tab label="Rules" value="rules" />
                <Tab label="Beginner" value="beginner" />
                <Tab label="Advanced" value="advanced" />
              </Tabs>
            </Box>
            {activeRulesContent}
          </DialogContent>
        </Dialog>
      </>
    );
  }

  return promptMode === "random" ? (
    <>
      {renderRulesDialog()}
      <ActivityRandomPrompt {...{ activityType, randomPrompt, setRandomPrompt }} />
    </>
  ) : (
    <>
      {renderRulesDialog()}
      <ActivityCustomPrompt
        customPrompt={customPrompt}
        onChange={handleChangePrompt}
      />
    </>
  );
}

export default ActivityPrompt;
