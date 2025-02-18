export function isVowel(char) {
  return /^[aeiou]/i.test(char)
}

export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}