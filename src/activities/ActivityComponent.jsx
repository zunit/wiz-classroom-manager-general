import React from "react";
import { AppContext } from "@/context/AppContext";
import ActivityTypes from "@/utils/ActivityTypes";
import ActivityHeader from "@/activities/ActivityHeader";
import IndividualActivity from "@/activities/individual/IndividualActivity";
import RandomActivity from "@/activities/random/RandomActivity";
import DesignActivity from "@/activities/design/DesignActivity";
import CodeReadingActivity from "@/activities/code-reading/CodeReadingActivity";
import CodeWritingActivity from "@/activities/code-writing/CodeWritingActivity";
import FreestyleActivity from "@/activities/freestyle/FreestyleActivity";

function ActivityComponent() {
  const { chunks, currentChunkIndex } = React.useContext(AppContext);

  function getCurrentActivity() {
    let activityComponent;
    switch (chunks[currentChunkIndex].activityType) {
      case ActivityTypes.INDIVIDUAL:
        activityComponent = <IndividualActivity />;
        break;
      case ActivityTypes.DESIGN:
        activityComponent = <DesignActivity />;
        break;
      case ActivityTypes.CODE_READING:
        activityComponent = <CodeReadingActivity />;
        break;
      case ActivityTypes.CODE_WRITING:
        activityComponent = <CodeWritingActivity />;
        break;
      case ActivityTypes.FREESTYLE:
        activityComponent = <FreestyleActivity />;
        break;
      case ActivityTypes.RANDOM:
        activityComponent = <RandomActivity />;
        break;
      default:
        console.warn(
          `Invalid activity type: ${chunks[currentChunkIndex].activityType}`
        );
        break;
    }
    return activityComponent;
  }

  return (
    <div id="activity-container">
      <ActivityHeader activityType={chunks[currentChunkIndex].activityType} />
      {getCurrentActivity()}
    </div>
  );
}

export default ActivityComponent;
