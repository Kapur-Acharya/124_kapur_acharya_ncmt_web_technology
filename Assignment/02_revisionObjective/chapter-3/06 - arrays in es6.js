// Arrays in ES6+

/**
 * Arrays store multiple values in one variable.
 */


// map()
/**
 * map() changes every item and returns a new array.
 */

const numbers = [1, 2, 3];

const doubled = numbers.map((num) => num * 2);

console.log(doubled); // [2, 4, 6]


// filter()
/**
 * filter() keeps only the items that match a condition.
 */

const ages = [12, 18, 20, 15];

const adults = ages.filter((age) => age >= 18);

console.log(adults); // [18, 20]


// reduce()
/**
 * reduce() combines all items into one value.
 */

const marks = [10, 20, 30];

const total = marks.reduce((sum, mark) => sum + mark, 0);

console.log(total); // 60


// Spread Operator (...)
/**
 * Spread copies or joins arrays.
 */

const first = [1, 2];
const second = [3, 4];

const allNumbers = [...first, ...second];

console.log(allNumbers); // [1, 2, 3, 4]


// Rest Operator (...)
/**
 * Rest collects many values into one array.
 */

function addAll(...nums) {
    return nums.reduce((sum, num) => sum + num, 0);
}

console.log(addAll(1, 2, 3)); // 6
