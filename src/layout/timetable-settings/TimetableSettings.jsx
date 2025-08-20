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

/**
 * The section in the starting page containing everything to do with the timetable.
 */
function TimetableSettings(props) {
  const { chunksSetup, setChunksSetup } = props;

  const numOfChunks = React.useRef(chunksSetup.length);

  // Used to determine the correct card to render for the drag overlay
  const [activeId, setActiveId] = React.useState(null);

  // Sensors used for dnd-kit
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

  /**
   * Changes the duration of the given time chunk in the timetable setup.
   * @param {number} index The index of the time chunk to change.
   * @param {number} newTime The new duration of the time chunk in seconds.
   */
  function handleChangeChunkTime(index, newTime) {
    // The new time chunk object must be a regular object
    // instead of an object created using the TimeChunkModel constructor
    // because doing so would cause the entire thing to rerender for some reason,
    // which causes many issues.
    setChunksSetup((chunksSetup) =>
      replaceInArray(chunksSetup, index, {
        ...chunksSetup[index],
        time: newTime,
      })
    );
  }

  /**
   * Changes the activity type of the given time chunk in the timetable setup.
   * @param {number} index The index of the time chunk to change.
   * @param {number} newTime The new activity type.
   */
  function handleChangeChunkActivity(index, newActivityType) {
    // The new time chunk object must be a regular object
    // instead of an object created using the TimeChunkModel constructor
    // because doing so would cause the entire thing to rerender for some reason,
    // which causes many issues.
    setChunksSetup((chunksSetup) =>
      replaceInArray(chunksSetup, index, {
        ...chunksSetup[index],
        activityType: newActivityType,
      })
    );
  }

  /**
   * Adds an activity at the end of the timetable setup.
   *
   * Whether an individual activity or a random group activity is given
   * depends on whether the activity is located at an even or odd index.
   */
  function handleClickAddActivity() {
    let newChunk;
    if (chunksSetup.length % 2 == 0) {
      newChunk = new TimeChunkModel("10", ActivityTypes.RANDOM);
    } else {
      newChunk = new TimeChunkModel("20", ActivityTypes.INDIVIDUAL);
    }
    setChunksSetup([...chunksSetup, newChunk]);
  }

  /**
   * Deletes an activity in the timetable setup.
   * @param {number} index The index of the time chunk to be deleted.
   */
  function handleClickDeleteActivity(index) {
    setChunksSetup((chunksSetup) => removeFromArray(chunksSetup, index));
  }

  /**
   * Changes the order of the time chunks in the timetable setup
   * after a drag operation is finished.
   * @param {DragEndEvent} event The drag end event passed by dnd-kit.
   */
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

  /**
   * Causes the drag overlay to be rendered while a drag operation is ongoing.
   * @param {DragStartEvent} event The drag start event passed by dnd-kit.
   */
  function handleDragStart(event) {
    setActiveId(event.active.id);
  }

  /**
   * Helper function that returns the data of the time chunk with a given ID.
   * @param {string} id The ID (of the DOM element) of the time chunk to search for.
   * @returns The data (TimeChunkModel object) corresponding to the time chunk.
   */
  function getChunkDataFromId(id) {
    return chunksSetup.find((chunk) => chunk.domId === id);
  }

  /**
   * 
   * @param {string} id The ID (of the DOM element) of the time chunk to search for.
   * @returns The index of the corresponding time chunk in the current timetable setup.
   */
  function getChunkIndexFromId(id) {
    return chunksSetup.findIndex((chunk) => chunk.domId === id);
  }

  return (
    <div className="timetable-settings-container">
      <div
        className={`timetable-cards${
          chunksSetup.length === 1
            ? " single-card"
            : chunksSetup.length === 0
            ? " empty"
            : ""
        }`}
      >
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
            style={{
              cursor: "grabbing",
              borderRadius: "10px",
              boxShadow: "0 0.5rem 0.5rem 0 rgba(0, 0, 0, 0.3)",
            }}
          >
            {activeId ? (
              <ActivityCardEditable
                index={getChunkIndexFromId(activeId)}
                chunk={getChunkDataFromId(activeId)}
                disableHover
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
