import "./time-chunk-card.css"

function TimeChunkCard(props) {
  const chunkData = props.chunkData;
  return (
    <div className="time-chunk-card-container">
      <h1 className="time-chunk-card-header">{chunkData.activityType}</h1>
      <p>Time: {chunkData.time} minutes</p>
      <p>{chunkData.difficulty}</p>
    </div>
  );
}

export default TimeChunkCard;
