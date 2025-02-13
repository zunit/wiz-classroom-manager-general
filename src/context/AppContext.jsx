import React from "react";
import { TimeChunkModel } from "@/utils/TimeChunkModel";
import ActivityTypes from "@/utils/ActivityTypes";

export const AppContext = React.createContext();

export function AppProvider(props) {
  const [chunks, setChunks] = React.useState([]);
  const [currentChunkIndex, setCurrentChunkIndex] = React.useState(0);
  const [isClassStarted, setIsClassStarted] = React.useState(false);
  const [isClassEnded, setIsClassEnded] = React.useState(false);

  const appData = {
    chunks,
    setChunks,
    currentChunkIndex,
    setCurrentChunkIndex,
    isClassStarted,
    setIsClassStarted,
    isClassEnded,
    setIsClassEnded,
  };

  return (
    <AppContext.Provider value={appData}>{props.children}</AppContext.Provider>
  );
}
