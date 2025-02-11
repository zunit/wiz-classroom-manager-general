import { useDraggable } from "@dnd-kit/core";
import formatTime from "@/utils/formatTime";
import "@/styles/time-chunk-card.css";
import { ActivityTypes } from "@/utils/TimeChunkModel";
// import Button from "@/components/ui/Button.jsx";
import Button from '@mui/material/Button';

export function TimeChunkCard(props) {
  const chunkData = props.chunkData;

  function getChunkTitle() {
    let chunkTitle;
    switch (chunkData.activityType) {
      case ActivityTypes.INDIVIDUAL:
        chunkTitle = "Individual Activity";
      case ActivityTypes.DESIGN:
        chunkTitle = "Design";
        break;
      case ActivityTypes.CODE_READING:
        chunkTitle = "What Does This Code Do?";
        break;
      case ActivityTypes.CODE_WRITING:
        chunkTitle = "Make This Happen!";
        break;
      case ActivityTypes.FREESTYLE:
        chunkTitle = "Freestyle!";
        break;
      case ActivityTypes.RANDOM:
        chunkTitle = "Random Group Activity";
        break;
      default:
        console.warn(
          `Invalid activity type when deciding time chunk title (was given ${chunkData.activityType}`
        );
        chunkTitle = "Error";
    }
    return chunkTitle;
  }

  function getChunkDifficulty() {
    
  }

  return (
    <div className="time-chunk-card-container">
      <h1 className="time-chunk-card-header">{getChunkTitle()}</h1>
      <p>{chunkData.difficulty}</p>
      <p>Time: {formatTime(chunkData.time)}</p>
      <Button variant="outlined" className="time-chunk-edit">
        <span className="material-symbols-rounded">edit</span> Edit
      </Button>
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
