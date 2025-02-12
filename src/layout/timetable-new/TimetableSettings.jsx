import React from "react";
import {
  DndContext,
  DragOverlay,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";

import { Button } from "@mui/material";
import { TimeChunkModel } from "@/utils/TimeChunkModel";
import ActivityTypes from "@/utils/ActivityTypes";
import ActivityCard from "./ActivityCard";
import ActivityCardDraggable from "./ActivityCardDraggable";
import ActivityCardDroppable from "./ActivityCardDroppable";
import "@/styles/timetable-settings.css";

function TimetableSettings(props) {
  const { chunksSetup, setChunksSetup, ...invalidProps } = props;
  for (let invalidProp in invalidProps) {
    console.warn(
      `TimetableSettings component does not accept the "${invalidProp}" prop`
    );
  }

  const numOfChunks = React.useRef(chunksSetup.length);

  React.useEffect(() => {
    if (chunksSetup.length > numOfChunks.current) {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    }
    numOfChunks.current = chunksSetup.length;
  }, [chunksSetup]);

  function handleChangeChunkTime(index, newTime) {
    setChunksSetup([
      ...chunksSetup.slice(0, index),
      { ...chunksSetup[index], time: newTime },
      ...chunksSetup.slice(index + 1),
    ]);
  }

  function handleClickAddActivity() {
    let newChunk;
    if (chunksSetup.length % 2 == 0) {
      newChunk = new TimeChunkModel("10", ActivityTypes.RANDOM);
    } else {
      newChunk = new TimeChunkModel("10", ActivityTypes.INDIVIDUAL);
    }
    setChunksSetup([...chunksSetup, newChunk]);
  }

  function handleClickDeleteActivity(index) {
    setChunksSetup([
      ...chunksSetup.slice(0, index),
      ...chunksSetup.slice(index + 1),
    ]);
  }

  const [activeId, setActiveId] = React.useState(null);

  // Function to reorder the list when items are swapped
  function reorder(list, fromIndex, toIndex) {
    const updatedList = [...list];
    const [movedItem] = updatedList.splice(fromIndex, 1);
    updatedList.splice(toIndex, 0, movedItem);
    return updatedList;
  }

  // Drag event handler
  function handleDragEnd(event) {
    const { active, over } = event;
    if (over === null) {
      return;
    }

    const activeIndex = chunksSetup.findIndex((chunk) => {
      return chunk.id === parseInt(active.id.replace("activity-card-draggable-", ""));
    });
    const overIndex = parseInt(over.id.replace("activity-card-droppable-", ""));

    if (activeIndex > overIndex) {
      const reorderedItems = reorder(chunksSetup, activeIndex, overIndex);
      setChunksSetup(reorderedItems);
    } else if (activeIndex < overIndex - 1) {
      const reorderedItems = reorder(chunksSetup, activeIndex, overIndex - 1);
      setChunksSetup(reorderedItems);
    }

    setActiveId(null);
  }

  function handleDragStart(event) {
    setActiveId(event.active.id);
  }

  function getChunkDataFromId(id) {
    console.log(id);
    return chunksSetup.find((chunk) => {
      return chunk.id === parseInt(id.replace("activity-card-draggable-", ""));
    });
  }

  return (
    <DndContext
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      sensors={useSensors(useSensor(MouseSensor), useSensor(TouchSensor))}
    >
      <div className="timetable-settings-container">
        <h2 className="timetable-settings-header">Timetable Settings:</h2>
        <div className="timetable-cards">
          {chunksSetup.map((chunk, index) => (
            <React.Fragment key={chunk.id}>
              {index === 0 ? <ActivityCardDroppable index={0} /> : null}
              <ActivityCardDraggable
                id={`activity-card-draggable-${chunk.id}`}
                index={index}
                chunk={chunk}
                onChangeChunkTime={handleChangeChunkTime}
                onDelete={() => handleClickDeleteActivity(index)}
              />
              <ActivityCardDroppable index={index + 1} />
            </React.Fragment>
          ))}
        </div>
        <Button
          id="add-activity"
          variant="outlined"
          onClick={handleClickAddActivity}
        >
          <span className="material-symbols-rounded">add</span>Add Activity
        </Button>
      </div>

      <DragOverlay>
        {activeId ? (
          <ActivityCard chunk={getChunkDataFromId(activeId)} />
        ) : null}
      </DragOverlay>
    </DndContext>
  );
}

export default TimetableSettings;
