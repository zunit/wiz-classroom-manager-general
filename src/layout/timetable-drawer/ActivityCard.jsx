function ActivityCard(props) {
  const { chunk, progress } = props;

  return (
    <div className={`timetable-activity-card ${progress}`}>
      <p>Activity Card of Chunk {chunk.id}</p>
    </div>
  );
}

export default ActivityCard;
