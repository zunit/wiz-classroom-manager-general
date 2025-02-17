import React from "react";
import ActivityTypes from "@/utils/ActivityTypes";
import { Button } from "@mui/material";
import "@/styles/activity-wheel.css";
import ActivityIcon from "@/layout/timetable-settings/ActivityIcon";

function ActivityWheel(props) {
  const { onSpinFinish } = props;
  const [isSpinning, setIsSpinning] = React.useState(false);
  const [rotation, setRotation] = React.useState(0);
  const spinTime = 9000;

  const activities = ActivityTypes.getGroupActivityTypes().filter(
    (activityType) => activityType !== ActivityTypes.RANDOM
  );

  const radius = 225;
  const cx = radius;
  const cy = radius;

  const numOfSlices = activities.length;
  const sliceAngle = 360 / numOfSlices;
  const sliceColours = getSliceColours();

  /**
   * Get the colours of each slice in an array.
   *
   * @returns The array of slice colours.
   */
  function getSliceColours() {
    let sliceColours = Array.from(
      { length: numOfSlices },
      (_, index) => ["#80808040", "#80808080", "#808080c0"][index % 3]
    );

    // Prevent the case of having two slices with the same colour next to each other
    if (sliceColours.length % 3 === 1) {
      sliceColours[sliceColours.length - 1] = "#80808080";
    }

    return sliceColours;
  }

  /**
   * Returns the path of the wheel slice.
   * ChatGPT is great.
   *
   * @param {Number} index The index number of the slice.
   * @returns The path of the wheel slice, which will be given to the `d` property of the `<path>` elements.
   */
  function getSlicePath(index) {
    const startAngle = index * sliceAngle;
    const endAngle = startAngle + sliceAngle;

    // Convert angles to radians
    const startRadians = (startAngle * Math.PI) / 180;
    const endRadians = (endAngle * Math.PI) / 180;

    // Calculate start and end points
    const x1 = cx + radius * Math.cos(startRadians);
    const y1 = cy + radius * Math.sin(startRadians);
    const x2 = cx + radius * Math.cos(endRadians);
    const y2 = cy + radius * Math.sin(endRadians);

    // Large arc flag (if the angle is >= 180 degrees)
    const largeArcFlag = sliceAngle > 180 ? 1 : 0;

    return `
      M ${cx},${cy}
      L ${x1},${y1}
      A ${radius},${radius} 0 ${largeArcFlag} 1 ${x2},${y2}
      Z
    `;
  }

  /**
   * Creates the wheel slices as an svg.
   *
   * @returns The svg component containing the wheel slices.
   */
  function WheelSlices() {
    return (
      <svg width={2 * radius} height={2 * radius}>
        {Array.from({ length: numOfSlices }).map((_, index) => (
          <path
            key={index}
            d={getSlicePath(index)}
            fill={sliceColours[index]}
          />
        ))}
      </svg>
    );
  }

  function getIconStyles(index) {
    const angle = index * sliceAngle + sliceAngle / 2;
    const radians = (angle * Math.PI) / 180;

    const iconX = cx + radius * 0.6 * Math.cos(radians);
    const iconY = cy + radius * 0.6 * Math.sin(radians);

    return {
      position: "absolute",
      transform: `translate(-50%, -50%) rotate(${angle + 90}deg)`,
      left: `${iconX}px`,
      top: `${iconY}px`,
    };
  }

  function WheelSliceIcons() {
    return activities.map((activityType, index) => (
      <div key={index} style={getIconStyles(index)}>
        <ActivityIcon activityType={activityType} />
      </div>
    ));
  }

  function handleClickSpin() {
    const randomSpinAmount = Math.floor(360 * 10 + Math.random() * 360);
    setRotation((rotation) => rotation + randomSpinAmount);
    setIsSpinning(true);
  }

  function getActivityFromRotationAmount() {
    const normalizedRotation = ((rotation % 360) + 360) % 360;
    const activityIndex =
      Math.floor((360 - normalizedRotation) / sliceAngle) % numOfSlices;
    return activities[activityIndex];
  }

  // Triggered automatically when the spin button is clicked
  // (with help from the handleClickSpin function)
  React.useEffect(() => {
    if (isSpinning) {
      let timeout = setTimeout(() => {
        setIsSpinning(false);
        const spinResult = getActivityFromRotationAmount();
        onSpinFinish(spinResult);
      }, spinTime);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [isSpinning]);

  return (
    <>
      <div className="activity-wheel-container">
        <div
          className="activity-wheel"
          style={{
            transform: `rotate(${rotation}deg)`,
            transition: `transform ${spinTime}ms cubic-bezier(0.25, 0, 0, 1)`,
          }}
        >
          <WheelSlices />
          <WheelSliceIcons />
        </div>
        <div className="activity-wheel-pointer">
          <svg
            viewBox="-11 -26 85 52"
            preserveAspectRatio="xMidYMid meet"
            xmlns="http://www.w3/org/2000/svg"
          >
            <path d="M 63 23 l -63 -18 C -13 1 -13 -1 0 -5 l 63 -18 C 75 -27 75 -25 71 -17 l -6 12 C 63 -1 63 1 65 5 l 6 12 C 75 25 75 27 63 23" />
          </svg>
        </div>
      </div>
      <Button
        variant="contained"
        disabled={isSpinning}
        onClick={handleClickSpin}
      >
        Spin!
      </Button>
    </>
  );
}

export default ActivityWheel;
