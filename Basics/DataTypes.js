"use strict";


// Enabling strict mode for better error checking

// Data Types in JavaScript

//alert("Check the console for Data Types examples.");

// Primitive Data Types
const userName = "JohnDoe"; // String
const userAge = 30; // Number
const isMember = true; // Boolean
const userAddress = null; // Null
let userPhone; // Undefined
const userSymbol = Symbol("uniqueIdentifier"); // Symbol
const bigNumber = 9007199254740991n; // BigInt

//Symbols are unique and immutable data types used to create unique identifiers for object properties.


console.log(typeof userName);
console.log("User Name:", userName);
console.log("User Age:", userAge);
console.log("Is Member:", isMember);
console.log("User Address:", userAddress);
console.log("User Phone:", userPhone);
console.log("User Symbol:", userSymbol);
console.log("Big Number:", bigNumber);

// Non-Primitive Data Types
const user = { // Object
    name: "JohnDoe",
    age: 30,
    isMember: true
};

const favoriteColors = ["red", "green", "blue"]; // Array

function greetUser(name) { // Function
    return `Hello, ${name}!`;
}


console.log("User Object:", user);
console.log("Favorite Colors:", favoriteColors);
console.log(greetUser(userName));

// Checking Data Types
console.log("Type of userName:", typeof userName);
console.log("Type of userAge:", typeof userAge);
console.log("Type of isMember:", typeof isMember);
console.log("Type of userAddress:", typeof userAddress);
console.log("Type of userPhone:", typeof userPhone);
console.log("Type of userSymbol:", typeof userSymbol);
console.log("Type of bigNumber:", typeof bigNumber);
console.log("Type of user:", typeof user);
console.log("Type of favoriteColors:", typeof favoriteColors);
console.log("Type of greetUser:", typeof greetUser);
console.log("Is user an instance of Object?", user instanceof Object);
console.log("Is favoriteColors an instance of Array?", favoriteColors instanceof Array);
console.log("Is greetUser an instance of Function?", greetUser instanceof Function);
