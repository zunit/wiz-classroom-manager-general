import ActivityCardEditable from "@/layout/timetable-settings/ActivityCardEditable";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import "@/styles/activity-card-dnd.css";

/**
 * The draggable activity card used in the starting page.
 * Dummy component; doesn't control the logic, only responsible for rendering the given data.
 */
function ActivityCardSortable(props) {
  const {
    id,
    index,
    chunk,
    onChangeChunkTime,
    onChangeChunkActivity,
    onDelete,
  } = props;

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
