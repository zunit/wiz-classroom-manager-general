import { useDraggable } from "@dnd-kit/core";
import ActivityCard from "@/layout/timetable-new/ActivityCard";
import "@/styles/activity-card-dnd.css"

// Draggable container with dnd-kit functionality
function ActivityCardDraggable(props) {
  const { id, index, chunk, onChangeChunkTime, onDelete, ...invalidProps } =
    props;
  for (let invalidProp in invalidProps) {
    console.warn(
      `ActivityCardDraggable component does not accept the "${invalidProp}" prop`
    );
  }

  const { isDragging, attributes, listeners, setNodeRef } = useDraggable({
    id,
  });

  return (
    <div
      className={`activity-card-draggable-wrapper ${
        isDragging ? "dragged" : ""
      }`}
      id={id}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
    >
      <ActivityCard
        index={index}
        chunk={chunk}
        onChangeChunkTime={onChangeChunkTime}
        onDelete={onDelete}
      />
    </div>
  );
}

export default ActivityCardDraggable;
