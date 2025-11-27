/**
 * Returns a string in the format `mm:ss`, given the number of seconds.
 * @param {number} seconds The number of seconds.
 * @returns {string} The formatted time.
 */
function formatTime(seconds) {
  const minutesStr = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secondsStr = String(seconds % 60).padStart(2, "0");
  return `${minutesStr}:${secondsStr}`;
}

export default formatTime;
