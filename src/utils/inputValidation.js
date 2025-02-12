export function isValidInteger(str) {
  const parsed = parseInt(str, 10);
  return Number.isInteger(parsed) && parsed.toString() === str;
}
