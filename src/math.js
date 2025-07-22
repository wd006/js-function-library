/**
 * Adds two variables.
 *
 * @param {number} a - The first number to be added
 * @param {number} b - The second number to be added
 * @returns {number} - Sum of a and b
 *
 * @example
 * const number1 = 5;
 * const number2 = 7;
 * add(number1, number2);  // returns 12
 */
export function add(a, b) {
    return a + b;
}

/**
 * Subtracts two variables.
 *
 * @param {number} a - The first number to be subtracted
 * @param {number} b - The second number to be subtracted
 * @returns {number} - Difference of a and b
 *
 * @example
 * const number1 = 7;
 * const number2 = 5;
 * subtract(number1, number2);  // returns 2
 */
export function subtract(a, b) {
    return a - b;
}

/**
 * Multiplies two variables.
 *
 * @param {number} a - The first number to be multiplied
 * @param {number} b - The second number to be multiplied
 * @returns {number} - Product of a and b
 *
 * @example
 * const number1 = 7;
 * const number2 = 5;
 * multiply(number1, number2);  // returns 35
 */
export function multiply(a, b) {
    return a * b;
}

/**
 * Divides two variables.
 *
 * @param {number} a - The first number to be divided
 * @param {number} b - The second number to be divided (cannot be 0)
 * @returns {number} - Division of a by b
 *
 * @example
 * const number1 = 5;
 * const number2 = 2;
 * divide(number1, number2);  // returns 2.5
*/
export function divide(a, b) {
    if (b === 0) return null;
    return a / b;
}

/**
 * Checks if the number is an integer.
 *
 * @param {number} a - Number whose integer value is checked
 * @returns {boolean} - true or false
 *
 * @example
 * const number1 = 5.2;
 * const number2 = 2;
 * isInteger(number1);  // returns false
 * isInteger(number2);  // returns true
*/
export function isInteger(x) {
    return (x % 1 === 0);
}

/**
 * Checks if a number is even.
 * 
 * Non-integer numbers are first truncated to their integer part.
 *
 * @param {number} a - The number to check if it’s even.
 * @returns {boolean} - true or false
 *
 * @example
 * const number1 = 5.2;
 * const number2 = 2;
 * isEven(number1);  // returns false
 * isEven(number2);  // returns true
*/
export function isEven(x) {
    return (Math.trunc(x) % 2 === 0);

}

/**
 * Checks if a number is odd.
 * 
 * Non-integer numbers are first truncated to their integer part.
 *
 * @param {number} a - The number to check if it’s odd.
 * @returns {boolean} - true or false
 *
 * @example
 * const number1 = 5.2;
 * const number2 = 2;
 * isOdd(number1);  // returns true
 * isOdd(number2);  // returns false
*/
export function isOdd(x) {
    return (Math.trunc(x) % 2 !== 0);

}
