import React from "react";

export const AppContext = React.createContext();

export function AppProvider(props) {
  const [chunks, setChunks] = React.useState([]);
  const [currentChunkIndex, setCurrentChunkIndex] = React.useState(0);
  const [isClassStarted, setIsClassStarted] = React.useState(false);
  const [isClassEnded, setIsClassEnded] = React.useState(false);

  function resetAppContext() {
    setChunks([]);
    setCurrentChunkIndex(0);
    setIsClassStarted(false);
    setIsClassEnded(false);
  }

  const appData = {
    chunks,
    setChunks,
    currentChunkIndex,
    setCurrentChunkIndex,
    isClassStarted,
    setIsClassStarted,
    isClassEnded,
    setIsClassEnded,
    resetAppContext,
  };

  return (
    <AppContext.Provider value={appData}>{props.children}</AppContext.Provider>
  );
}
