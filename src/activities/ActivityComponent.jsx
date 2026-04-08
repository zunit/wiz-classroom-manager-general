import React from "react";
import { AppContext } from "@/context/AppContext";
import ActivityTypes from "@/utils/ActivityTypes";
import ActivityHeader from "@/activities/ActivityHeader";
import IndividualActivity from "@/activities/individual/IndividualActivity";
import RandomActivity from "@/activities/random/RandomActivity";
import StrategyAndProblemSolvingActivity from "@/activities/strategy-and-problem-solving/StrategyAndProblemSolvingActivity";
import CodeAlongActivity from "@/activities/code-along/CodeAlongActivity";
import BuildAlongActivity from "@/activities/build-along/BuildAlongActivity";
import ChallengeRoundActivity from "@/activities/challenge-round/ChallengeRoundActivity";

/**
 * Entry point for all activities.
 */
function ActivityComponent() {
  const { chunks, currentChunkIndex } = React.useContext(AppContext);

  const [currentActivity, setCurrentActivity] = React.useState(
    chunks[currentChunkIndex].activityType
  );

  React.useEffect(() => {
    if (currentChunkIndex === 0) {
      return;
    }
    setCurrentActivity(chunks[currentChunkIndex].activityType);
  }, [currentChunkIndex]);

  /**
   * Helper function to determine the correct activity component to render.
   * @returns The correct activity component.
   */
  function getCurrentActivity() {
    let activityComponent;
    switch (currentActivity) {
      case ActivityTypes.INDIVIDUAL:
        activityComponent = <IndividualActivity />;
        break;
      case ActivityTypes.STRATEGY_AND_PROBLEM_SOLVING:
        activityComponent = <StrategyAndProblemSolvingActivity />;
        break;
      case ActivityTypes.CODE_ALONG:
        activityComponent = <CodeAlongActivity />;
        break;
      case ActivityTypes.BUILD_ALONG:
        activityComponent = <BuildAlongActivity />;
        break;
      case ActivityTypes.CHALLENGE_ROUND:
        activityComponent = <ChallengeRoundActivity />;
        break;
      case ActivityTypes.RANDOM:
        activityComponent = (
          <RandomActivity setCurrentActivity={setCurrentActivity} />
        );
        break;
      default:
        console.warn(`Invalid activity type: ${currentActivity}`);
        break;
    }
    return activityComponent;
  }

  return (
    <div id="activity-container">
      <ActivityHeader activityType={currentActivity} />
      {getCurrentActivity()}
    </div>
  );
}

export default ActivityComponent;
