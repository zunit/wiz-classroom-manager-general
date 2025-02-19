import React from "react";
import { TimeChunkModel } from "@/utils/TimeChunkModel";
import ActivityTypes from "@/utils/ActivityTypes";
import ActivityCardEditable from "@/layout/timetable-settings/ActivityCardEditable";
import ActivityCardSortable from "@/layout/timetable-settings/ActivityCardSortable";
import { removeFromArray, replaceInArray } from "@/utils/arrayUtils";
import {
  closestCenter,
  defaultDropAnimationSideEffects,
  DndContext,
  DragOverlay,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  rectSortingStrategy,
} from "@dnd-kit/sortable";
import { Button } from "@mui/material";
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

  const sensorOptions = {
    activationConstraint: {
      distance: 1,
    },
  };

  const sensors = useSensors(
    useSensor(MouseSensor, sensorOptions),
    useSensor(TouchSensor, sensorOptions)
  );

  // Automatically scroll down if an activity is added
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
      newChunk = new TimeChunkModel("20", ActivityTypes.INDIVIDUAL);
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

    const activeIndex = chunksSetup.findIndex(
      (chunk) => chunk.domId === active.id
    );
    const overIndex = chunksSetup.findIndex((chunk) => chunk.domId === over.id);

    setChunksSetup((chunksSetup) =>
      arrayMove(chunksSetup, activeIndex, overIndex)
    );

    setActiveId(null);
  }

  function handleDragStart(event) {
    setActiveId(event.active.id);
  }

  function getChunkDataFromId(id) {
    return chunksSetup.find((chunk) => chunk.domId === id);
  }

  function getChunkIndexFromId(id) {
    return chunksSetup.findIndex((chunk) => chunk.domId === id);
  }

  return (
    <div className="timetable-settings-container">
      <h2 className="timetable-settings-header">Timetable Settings:</h2>

      <div className="timetable-cards">
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={chunksSetup.map((chunk) => chunk.domId)}
            strategy={rectSortingStrategy}
          >
            {chunksSetup.map((chunk, index) => (
              <ActivityCardSortable
                key={chunk.id}
                id={chunk.domId}
                index={index}
                chunk={chunk}
                onChangeChunkActivity={handleChangeChunkActivity}
                onChangeChunkTime={handleChangeChunkTime}
                onDelete={() => handleClickDeleteActivity(index)}
              />
            ))}
          </SortableContext>

          <DragOverlay
            dropAnimation={{
              sideEffects: defaultDropAnimationSideEffects({
                styles: {
                  active: {
                    opacity: "0.4",
                  },
                },
              }),
            }}
            style={{ cursor: "grabbing" }}
          >
            {activeId ? (
              <ActivityCardEditable
                index={getChunkIndexFromId(activeId)}
                chunk={getChunkDataFromId(activeId)}
              />
            ) : null}
          </DragOverlay>
        </DndContext>
      </div>

      <Button
        id="add-activity"
        variant="outlined"
        onClick={handleClickAddActivity}
      >
        <span className="material-symbols-rounded">add</span>Add Activity
      </Button>
    </div>
  );
}

export default TimetableSettings;
