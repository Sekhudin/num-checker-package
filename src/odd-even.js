
/**
 * IsOdd will return true if the number is odd.
 * @param {*} num - number
 * @returns boolean
 */
export function isOdd(num) {
  if (num === 0) return false;
  if (num < 0) {
    return num % -2 !== 0;
  }

  return num % 2 !== 0;
}


/**
 * IsEven will return true if the number is even.
 * @param {*} num - number
 * @returns boolean
 */
export function isEven(num) {
  return !isOdd(num)
}