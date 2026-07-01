// Arrow Functions

/**
 * Arrow functions are a shorter way to write functions.
 */


// Normal function

function greet(name) {
    return "Hello " + name;
}

console.log(greet("Asha"));

// Arrow function

const greetUser = (name) => {
    return "Hello " + name;
};

console.log(greetUser("Ram"));


// Short arrow function
/**
 * If there is only one return line, we can write it shorter.
 */

const add = (a, b) => a + b;

console.log(add(5, 3)); // 8
