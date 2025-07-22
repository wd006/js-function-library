/**
 * Adds an element to the end of an array.
 *
 * @param {Array} array - The array where the element will be added.
 * @param {*} element - The element to add to the array.
 * @returns {Array} - The updated array.
 *
 * @example
 * const items = [1, 2];
 * addToArray(items, 3);  // returns [1, 2, 3]
 */
export function addToArray(array, element) {
    array.push(element);
    return array;
}

/**
 * Removes an element from the array.
 *
 * @param {Array} array - The array from which the element will be removed.
 * @param {*} element - The element to remove to the array.
 * @returns {Array} - The updated array.
 *
 * @example
 * const items = ["a", "b", "c"];
 * removeFromArray(items, "b");  // returns ["a", "c"]
 */
export function removeFromArray(array, element) {
    const index = array.indexOf(element);
    if (index !== -1) array.splice(index, 1);
    return array;
}

/**
 * Removes an element from the array.
 *
 * @param {Array} array - The array from which the element will be removed.
 * @param {*} element - The element to remove from the array.
 * @returns {Array} - The updated array.
 *
 * @example
 * const items = ["a", "b", "c"];
 * arrayContains(items, "b");  // returns true
 */
export function arrayContains(array, element) {
    return array.includes(element);
}

/**
 * Returns a sorted copy of the provided array.
 *
 * Numbers are sorted in ascending order.
 * Non-numeric elements are sorted as strings using locale-based comparison.
 * The original array is not modified.
 *
 * @param {Array} array - The array to sort. Can contain numbers, strings, or mixed types.
 * @returns {Array} A new array with the sorted elements.
 *
 * @example
 * sortArray([3, 1, 2]);           // returns [1, 2, 3]
 * sortArray(["b", "a", "c"]);     // returns ["a", "b", "c"]
 * sortArray([10, "5", 2, "20"]);  // returns [2, 10, "20", "5"]
 */
export function sortArray(array) {
    return array.slice().sort((a, b) => {
        if (typeof a === "number" && typeof b === "number") {
            return a - b;
        }
        return String(a).localeCompare(String(b));
    });
}


