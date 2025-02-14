import { useDroppable } from "@dnd-kit/core";
import "@/styles/activity-card-dnd.css"

function ActivityCardDroppable(props) {
  const { index, ...invalidProps } = props;
  for (let invalidProp in invalidProps) {
    console.warn(
      `TimetableSettings component does not accept the "${invalidProp}" prop`
    );
  }

  const id = `activity-card-droppable-${index}`;
  const { isOver, setNodeRef } = useDroppable({
    id,
  });

  return (
    <div id={id} className="activity-card-droppable" ref={setNodeRef}>
      <div
        className={`activity-card-droppable-indicator ${
          isOver ? "dragged-over" : ""
        }`}
      ></div>
    </div>
  );
}

export default ActivityCardDroppable;
