import { useDraggable } from "@dnd-kit/core";

import "@/styles/time-chunk-card.css";

export function TimeChunkCard(props) {
  const chunkData = props.chunkData;

  return (
    <div className="time-chunk-card-container">
      <h1 className="time-chunk-card-header">{chunkData.activityType}</h1>
      <p>Time: {chunkData.time} minutes</p>
      <p>{chunkData.difficulty}</p>
    </div>
  );
}

// Draggable container with dnd-kit functionality
export function TimeChunkCardDraggable(props) {
  const id = props.id;
  const chunkData = props.chunkData;

  const { isDragging, attributes, listeners, setNodeRef } = useDraggable({
    id,
  });

  return (
    <div
      className={`time-chunk-card-draggable-wrapper ${
        isDragging ? "dragged" : ""
      }`}
      id={id}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
    >
      <TimeChunkCard chunkData={chunkData} />
    </div>
  );
}
