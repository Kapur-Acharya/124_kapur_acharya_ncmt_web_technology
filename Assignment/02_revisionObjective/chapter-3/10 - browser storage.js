// Browser Storage

/**
 * Browser storage saves small data in the user's browser.
 */


// localStorage
/**
 * localStorage saves data until we remove it.
 */

localStorage.setItem("name", "Asha");

console.log(localStorage.getItem("name")); // Asha


// sessionStorage
/**
 * sessionStorage saves data only while the tab is open.
 */

sessionStorage.setItem("theme", "dark");

console.log(sessionStorage.getItem("theme")); // dark


// Cookies
/**
 * Cookies save small data.
 * Cookies can also be sent to the server.
 */

document.cookie = "language=English";

console.log(document.cookie);


// Simple difference
/**
 * localStorage   = stays until removed
 * sessionStorage = removed when tab closes
 * cookies        = small data, can go to server
 */
