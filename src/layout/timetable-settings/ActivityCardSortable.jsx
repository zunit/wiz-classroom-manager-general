import ActivityCardEditable from "@/layout/timetable-settings/ActivityCardEditable";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import "@/styles/activity-card-dnd.css";

// Draggable container with dnd-kit functionality
function ActivityCardSortable(props) {
  const {
    id,
    index,
    chunk,
    onChangeChunkTime,
    onChangeChunkActivity,
    onDelete,
    ...invalidProps
  } = props;
  for (let invalidProp in invalidProps) {
    console.warn(
      `ActivityCardDraggable component does not accept the "${invalidProp}" prop`
    );
  }

  const {
    isDragging,
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id });

  const style = {
    cursor: "grab",
    opacity: isDragging ? 0.4 : undefined,
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div id={id} ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <ActivityCardEditable
        index={index}
        chunk={chunk}
        onChangeChunkTime={onChangeChunkTime}
        onChangeChunkActivity={onChangeChunkActivity}
        onDelete={onDelete}
      />
    </div>
  );
}

export default ActivityCardSortable;
