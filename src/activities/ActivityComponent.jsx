import React from "react";
import { AppContext } from "@/context/TimetableContext";
import { ActivityTypes } from "@/utils/TimeChunkModel";
import ClassStartActivity from "./ClassStartActivity";
import ClassEndActivity from "./ClassEndActivity";
import IndividualActivity from "./IndividualActivity";
import RandomActivity from "./RandomActivity";
import DesignActivity from "./DesignActivity";
import CodeReadingActivity from "./CodeReadingActivity";
import CodeWritingActivity from "./CodeWritingActivity";
import FreestyleActivity from "./FreestyleActivity";

function ActivityComponent() {
  const { chunks, currentChunkIndex, isClassStarted } =
    React.useContext(AppContext);

  function getCurrentActivity() {
    if (!isClassStarted) {
      return <ClassStartActivity />;
    }

    if (currentChunkIndex > chunks.length - 1) {
      return <ClassEndActivity />;
    }  

    let activityComponent;
    switch (chunks[currentChunkIndex].activityType) {
      case ActivityTypes.INDIVIDUAL:
        activityComponent = <IndividualActivity />
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
    }
  }

  return <>{getCurrentActivity()}</>;
}

export default ActivityComponent;
