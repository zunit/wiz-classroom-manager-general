/*
 * React states are meant to be immutable. Even states that store arrays.
 * This is annoying because many array methods mutate the array (big no-no in React).
 * This file contains functions that are meant to alleviate some of the pain.
 */

/**
 * @description Returns a shallow copy of an array with one of its elements at a different index.
 * @param {Array} array The array to change.
 * @param {number} fromIndex The index of the element to move.
 * @param {number} toIndex The index to place the moved element to.
 * @returns A shallow copy of the array with the element reordered.
 */
export function reorderArray(array, fromIndex, toIndex) {
  const newArray = [...array];
  const [movedItem] = newArray.splice(fromIndex, 1);
  newArray.splice(toIndex, 0, movedItem);
  return newArray;
}

/**
 * @description Returns a shallow copy of an array with one of its elements replaced.
 * @param {Array} array The array to change.
 * @param {number} index The index of the element to move.
 * @param {any} newElement The index to place the moved element to.
 * @returns A shallow copy of the array with the element reordered.
 */
export function replaceInArray(array, index, newElement) {
  return [...array.slice(0, index), newElement, ...array.slice(index + 1)];
}

/**
 * @description Returns a shallow copy of an array with one of its elements removed.
 * @param {Array} array The array to change.
 * @param {number} index The index of the element to remove.
 */
export function removeFromArray(array, index) {
  return [...array.slice(0, index), ...array.slice(index + 1)];
}
