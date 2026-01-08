const accountId = 12345;
let accountEmail = "user@example.com";
var accountPassword = "securePassword123";
accountCity = "New York";

console.log("Account ID:", accountId);
console.log("Account Email:", accountEmail);
console.log("Account Password:", accountPassword);
console.log("Account City:", accountCity);

// accountId = 54321; // This will throw an error because accountId is a constant
accountEmail = "newuser@example.com";

console.table([accountId, accountEmail, accountPassword, accountCity]);

/*
prefered not to use var, because of its function scope and function scoping issues.
Use let and const instead.
*/