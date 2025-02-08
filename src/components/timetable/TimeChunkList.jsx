import "@/components/timetable/time-chunk-card.css";
import "@/components/timetable/timetable.css";
import {
  ActivityTypes,
  Difficulties,
  TimeChunk,
} from "@/context/TimetableContext.js";
import {
  DndContext,
  MouseSensor,
  TouchSensor,
  useDraggable,
  useDroppable,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import React from "react";

function TimeChunkCard(props) {
  const id = props.id;
  const chunkData = props.chunkData;

  const { attributes, listeners, setNodeRef } = useDraggable({ id });

  return (
    <div
      className="time-chunk-card-container"
      id={id}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
    >
      <h1 className="time-chunk-card-header">{chunkData.activityType}</h1>
      <p>Time: {chunkData.time} minutes</p>
      <p>{chunkData.difficulty}</p>
    </div>
  );
}

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
  const [chunkList, setChunkList] = React.useState([
    new TimeChunk(1, ActivityTypes.RANDOM),
    new TimeChunk(2, ActivityTypes.INDIVIDUAL),
    new TimeChunk(3, ActivityTypes.CODE_READING),
    new TimeChunk(4, ActivityTypes.CODE_WRITING),
    new TimeChunk(5, ActivityTypes.DESIGN),
  ]);

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

    const activeIndex = chunkList.findIndex((chunk) => {
      return chunk.id === parseInt(active.id.replace("time-chunk-", ""));
    });
    const overIndex = parseInt(over.id.replace("droppable-", ""));

    if (activeIndex > overIndex) {
      const reorderedItems = reorder(chunkList, activeIndex, overIndex);
      setChunkList(reorderedItems);
    } else if (activeIndex < overIndex - 1) {
      const reorderedItems = reorder(chunkList, activeIndex, overIndex - 1);
      setChunkList(reorderedItems);
    }
  }

  return (
    <DndContext
      onDragEnd={handleDragEnd}
      sensors={useSensors(useSensor(MouseSensor), useSensor(TouchSensor))}
    >
      <div id="timetable-chunks-container">
        {chunkList.map((chunk, index) => (
          <React.Fragment key={chunk.id}>
            {index === 0 ? <ChunkDropTarget index={0} /> : null}
            <TimeChunkCard
              key={chunk.id}
              id={`time-chunk-${chunk.id}`}
              chunkData={chunk}
            />
            <ChunkDropTarget index={index + 1} />
          </React.Fragment>
        ))}
      </div>
    </DndContext>
  );
}

export default TimeChunkList;
