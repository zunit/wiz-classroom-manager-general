import React from "react";
import {
  DndContext,
  DragOverlay,
  MouseSensor,
  TouchSensor,
  useDroppable,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { AppContext } from "@/context/TimetableContext";
import {
  TimeChunkCard,
  TimeChunkCardDraggable,
} from "@/layout/timetable/TimeChunkCard.jsx";

import "@/styles/time-chunk-card.css";
import "@/styles/timetable.css";

function ChunkDropTarget(props) {
  const { isOver, setNodeRef } = useDroppable({
    id: `droppable-${props.index}`,
  });

  return (
    <div
      id={`droppable-${props.index}`}
      className="time-chunk-drop-target"
      ref={setNodeRef}
    >
      <div
        className={`time-chunk-drop-target-indicator ${
          isOver ? "dragged-over" : ""
        }`}
      ></div>
    </div>
  );
}

function TimeChunkList() {
  const { chunks, setChunks } = React.useContext(AppContext);
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

    const activeIndex = chunks.findIndex((chunk) => {
      return chunk.id === parseInt(active.id.replace("time-chunk-", ""));
    });
    const overIndex = parseInt(over.id.replace("droppable-", ""));

    if (activeIndex > overIndex) {
      const reorderedItems = reorder(chunks, activeIndex, overIndex);
      setChunks(reorderedItems);
    } else if (activeIndex < overIndex - 1) {
      const reorderedItems = reorder(chunks, activeIndex, overIndex - 1);
      setChunks(reorderedItems);
    }

    setActiveId(null);
  }

  function handleDragStart(event) {
    setActiveId(event.active.id);
  }

  function getChunkDataFromId(id) {
    console.log(id);
    return chunks.find((chunkData) => {
      return chunkData.id === parseInt(id.replace("time-chunk-", ""));
    });
  }

  return (
    <DndContext
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      sensors={useSensors(useSensor(MouseSensor), useSensor(TouchSensor))}
    >
      <div id="timetable-chunks-container">
        {chunks.map((chunk, index) => (
          <React.Fragment key={chunk.id}>
            {index === 0 ? <ChunkDropTarget index={0} /> : null}
            <TimeChunkCardDraggable
              key={chunk.id}
              id={`time-chunk-${chunk.id}`}
              chunkData={chunk}
            />
            <ChunkDropTarget index={index + 1} />
          </React.Fragment>
        ))}
      </div>
      <DragOverlay>
        {activeId ? (
          <TimeChunkCard chunkData={getChunkDataFromId(activeId)} />
        ) : null}
      </DragOverlay>
    </DndContext>
  );
}

export default TimeChunkList;
