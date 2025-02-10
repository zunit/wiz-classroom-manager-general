import React from "react";
import { ActivityTypes, TimeChunkModel } from "@/utils/TimeChunkModel";

export const AppContext = React.createContext();

export function AppProvider(props) {
  const [chunks, setChunks] = React.useState([
    new TimeChunkModel(600, ActivityTypes.RANDOM),
    new TimeChunkModel(600, ActivityTypes.INDIVIDUAL),
    new TimeChunkModel(600, ActivityTypes.RANDOM),
    new TimeChunkModel(600, ActivityTypes.INDIVIDUAL),
  ]);
  const [currentChunkIndex, setCurrentChunkIndex] = React.useState(0);
  const [isClassStarted, setIsClassStarted] = React.useState(false);
  const [isClassEnded, setIsClassEnded] = React.useState(false);
  const [isActivityStarted, setIsActivityStarted] = React.useState(false);
  const [isActivityPaused, setIsActivityPaused] = React.useState(true);
  const [isActivityEnded, setIsActivityEnded] = React.useState(false);
  const [timeLeft, setTimeLeft] = React.useState(-1);

  const appData = {
    chunks,
    setChunks,
    currentChunkIndex,
    setCurrentChunkIndex,
    isClassStarted,
    setIsClassStarted,
    isClassEnded,
    setIsClassEnded,
    isActivityStarted,
    setIsActivityStarted,
    isActivityPaused,
    setIsActivityPaused,
    isActivityEnded,
    setIsActivityEnded,
    timeLeft,
    setTimeLeft,
  };

  return (
    <AppContext.Provider value={appData}>{props.children}</AppContext.Provider>
  );
}
