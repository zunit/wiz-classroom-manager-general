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
import ActivityCardEditable from "./ActivityCardEditable";
import ActivityCardDraggable from "./ActivityCardDraggable";
import ActivityCardDroppable from "./ActivityCardDroppable";
import {
  removeFromArray,
  reorderArray,
  replaceInArray,
} from "@/utils/arrayStateUtils";
import "@/styles/timetable-settings.css";

function TimetableSettings(props) {
  const { chunksSetup, setChunksSetup, ...invalidProps } = props;
  for (let invalidProp in invalidProps) {
    console.warn(
      `TimetableSettings component does not accept the "${invalidProp}" prop`
    );
  }

  const numOfChunks = React.useRef(chunksSetup.length);
  const [activeId, setActiveId] = React.useState(null);

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
    setChunksSetup((chunksSetup) =>
      replaceInArray(chunksSetup, index, {
        ...chunksSetup[index],
        time: newTime,
      })
    );
  }

  function handleChangeChunkActivity(index, newActivityType) {
    setChunksSetup((chunksSetup) =>
      replaceInArray(chunksSetup, index, {
        ...chunksSetup[index],
        activityType: newActivityType,
      })
    );
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
    setChunksSetup((chunksSetup) => removeFromArray(chunksSetup, index));
  }

  // Drag event handler
  function handleDragEnd(event) {
    const { active, over } = event;
    if (over === null) {
      return;
    }

    const activeIndex = chunksSetup.findIndex((chunk) => {
      return (
        chunk.id === parseInt(active.id.replace("activity-card-draggable-", ""))
      );
    });
    const overIndex = parseInt(over.id.replace("activity-card-droppable-", ""));

    if (activeIndex > overIndex) {
      const reorderedItems = reorderArray(chunksSetup, activeIndex, overIndex);
      setChunksSetup(reorderedItems);
    } else if (activeIndex < overIndex - 1) {
      const reorderedItems = reorderArray(
        chunksSetup,
        activeIndex,
        overIndex - 1
      );
      setChunksSetup(reorderedItems);
    }

    setActiveId(null);
  }

  function handleDragStart(event) {
    setActiveId(event.active.id);
  }

  function getChunkDataFromId(id) {
    return chunksSetup.find((chunk) => {
      return chunk.id === parseInt(id.replace("activity-card-draggable-", ""));
    });
  }

  return (
    <DndContext
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      sensors={useSensors(
        useSensor(MouseSensor, {
          activationConstraint: {
            distance: 0.1,
          },
        }),
        useSensor(TouchSensor, {
          activationConstraint: {
            distance: 0.1,
          },
        })
      )}
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
                onChangeChunkActivity={handleChangeChunkActivity}
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

      <DragOverlay style={{ cursor: "move" }}>
        {activeId ? (
          <ActivityCardEditable chunk={getChunkDataFromId(activeId)} />
        ) : null}
      </DragOverlay>
    </DndContext>
  );
}

export default TimetableSettings;
