export function isPositiveInteger(str) {
  const parsed = parseInt(str, 10);
  return Number.isInteger(parsed) && parsed.toString() === str.trim() && parsed > 0;
}
