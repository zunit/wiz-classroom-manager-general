/**
 * Returns whether a given character is a vowel (non-case sensitive).
 * @param {string} char A string with one character.
 * @returns {boolean} Whether the character is one of A, E, I, O, or U.
 */
export function isVowel(char) {
  return /^[aeiou]/i.test(char);
}

/**
 * Returns a string capitalized with the first letter capitalized.
 * @param {string} str The string.
 * @returns {string} The capitalized string.
 */
export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
