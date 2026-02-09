//Immediately Invoked Function Expression (IIFE) is a JavaScript function that runs as soon as it is defined. It is a design pattern which produces a lexical scope using JavaScript's function scoping. This helps to avoid polluting the global namespace and allows for better modularization of code.

// The syntax for an IIFE is as follows:

(function checkDbConnect(){

    console.log(`Checking database connection...`);
})();

// (function defination ) (execution ) 
// checkDbConnect()