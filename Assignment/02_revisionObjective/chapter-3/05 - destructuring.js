// Destructuring

/**
 * Destructuring means taking values from arrays or objects
 * and storing them in variables easily.
 */


// Array Destructuring
/**
 * Values are taken by position.
 */

const colors = ["red", "green", "blue"];

const [firstColor, secondColor] = colors;

console.log(firstColor);  // red
console.log(secondColor); // green


// Object Destructuring
/**
 * Values are taken by property name.
 */

const student = {
    name: "Asha",
    age: 18
};

const { name, age } = student;

console.log(name); // Asha
console.log(age);  // 18
