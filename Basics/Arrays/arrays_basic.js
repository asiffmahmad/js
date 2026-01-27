const fruits = ["apple", "banana", "cherry"];
console.log("Fruits array:", fruits);

const num = new Array(1,2,3);
console.log("Number array:", num);

// Accessing elements
console.log("First fruit:", fruits[0]);
console.log("Second fruit:", fruits[1]);

// Modifying elements
fruits[1] = "blueberry";
console.log("Modified Fruits array:", fruits);

// Array length
console.log("Number of fruits:", fruits.length);

// Adding elements
fruits.push("date");
console.log("After adding a fruit:", fruits);

// Removing elements
const removedFruit = fruits.pop();
console.log("Removed fruit:", removedFruit);
console.log("After removing a fruit:", fruits);

