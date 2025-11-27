/**
 * Returns a random element from a given array.
 * @param {Array} array The array to get a random element from.
 * @param {number[]} indicesToExclude An optional array of indices of elements to exclude from being generated.
 * @returns The randomly chosen element.
 */
// export function getRandomElement(array, indicesToExclude = []) {
//   const randomIndex = Math.floor(
//     Math.random() * (array.length - indicesToExclude.length)
//   );
//   const indexBump = indicesToExclude.filter((index) => index < randomIndex);
//   return {element: array[randomIndex + indexBump], randomIndex};
// }

export function getRandomElement(array, indicesToExclude = []) {
  const available = array.map((_, i) => i).filter(i => !indicesToExclude.includes(i));
  if (available.length === 0) return { element: undefined, index: -1 };

  const pick = Math.floor(Math.random() * available.length);
  const index = available[pick];
  // console.log(array[index], index)
  return { element: array[index], index };
}

/**
 * Returns a shallow copy of an array with one of its elements at a different index.
 * @param {Array} array The array to change.
 * @param {number} fromIndex The index of the element to move.
 * @param {number} toIndex The index to place the moved element to.
 * @returns {Array} A shallow copy of the array with the element reordered.
 */
export function reorderArray(array, fromIndex, toIndex) {
  const newArray = [...array];
  const [movedItem] = newArray.splice(fromIndex, 1);
  newArray.splice(toIndex, 0, movedItem);
  return newArray;
}

/**
 * Returns a shallow copy of an array with one of its elements replaced.
 * @param {Array} array The array to change.
 * @param {number} index The index of the element to move.
 * @param {any} newElement The index to place the moved element to.
 * @returns {Array} A shallow copy of the array with the element reordered.
 */
export function replaceInArray(array, index, newElement) {
  return [...array.slice(0, index), newElement, ...array.slice(index + 1)];
}

/**
 * Returns a shallow copy of an array with one of its elements removed.
 * @param {Array} array The array to change.
 * @param {number} index The index of the element to remove.
 * @returns {Array} A shallow copy of the array with the element removed.
 */
export function removeFromArray(array, index) {
  return [...array.slice(0, index), ...array.slice(index + 1)];
}
