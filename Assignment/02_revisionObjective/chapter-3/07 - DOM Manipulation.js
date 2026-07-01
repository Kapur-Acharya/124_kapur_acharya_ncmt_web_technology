// DOM Manipulation

/**
 * DOM manipulation means using JavaScript to change a web page.
 */


// Selecting Elements
/**
 * Select an HTML element before changing it.
 */

const title = document.querySelector("#title");

title.textContent = "Hello DOM";


// Events
/**
 * Events happen when users do something, like clicking a button.
 */

const button = document.querySelector("#button");

button.addEventListener("click", () => {
    title.textContent = "Button clicked";
});


// Event Delegation
/**
 * Event delegation means handling child element events
 * from their parent element.
 */

const list = document.querySelector("#list");

list.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        event.target.style.color = "blue";
    }
});
