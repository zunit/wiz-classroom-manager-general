import React from "react";
import { ActivityTypes, TimeChunkModel } from "@/utils/TimeChunkModel";

export const AppContext = React.createContext();

export function AppProvider(props) {
  const [chunks, setChunks] = React.useState([
    new TimeChunkModel(10, ActivityTypes.RANDOM),
    new TimeChunkModel(10, ActivityTypes.INDIVIDUAL),
    new TimeChunkModel(10, ActivityTypes.RANDOM),
    new TimeChunkModel(10, ActivityTypes.INDIVIDUAL),
  ]);
  const [currentChunkIndex, setCurrentChunkIndex] = React.useState(0);
  const [isClassStarted, setIsClassStarted] = React.useState(false);
  const [isActivityStarted, setIsActivityStarted] = React.useState(false);
  const [isActivityPaused, setIsActivityPaused] = React.useState(false);
  const [timeLeft, setTimeLeft] = React.useState(false);

  const appData = {
    chunks,
    setChunks,
    currentChunkIndex,
    setCurrentChunkIndex,
    isClassStarted,
    setIsClassStarted,
    isActivityStarted,
    setIsActivityStarted,
    isActivityPaused,
    setIsActivityPaused,
    timeLeft,
    setTimeLeft,
  };

  return (
    <AppContext.Provider value={appData}>{props.children}</AppContext.Provider>
  );
}
