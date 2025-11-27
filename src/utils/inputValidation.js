/**
 * Returns whether a given string represents a positive integer.
 * @param {string} str The string.
 * @returns {boolean} Whether the string represents a positive integer.
 */
export function isPositiveInteger(str) {
  const parsed = parseInt(str, 10);
  return (
    Number.isInteger(parsed) && parsed.toString() === str.trim() && parsed > 0
  );
}
