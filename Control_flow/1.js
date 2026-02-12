// if 

if (condition) {
  // code to execute if condition is true
}   else {
  // code to execute if condition is false
}

// if else if else

if (condition1) {
  // code to execute if condition1 is true
} else if (condition2) {
  // code to execute if condition2 is true
} else {
  // code to execute if both condition1 and condition2 are false
}

// switch case

switch (expression) {
  case value1:
    // code to execute if expression === value1
    break;
  case value2:
    // code to execute if expression === value2
    break;
  default:
    // code to execute if expression doesn't match any case
}   

// ternary operator

let result = condition ? valueIfTrue : valueIfFalse;

// try catch finally

try {
  // code that may throw an error
} catch (error) {
  // code to handle the error
} finally {
  // code that will always execute
}       


// for loop

for (let i = 0; i < 10; i++) {
  // code to execute in each iteration
}

// while loop

while (condition) {
  // code to execute while condition is true
}

// do while loop

do {
  // code to execute at least once and then while condition is true
} while (condition);

// for...in loop

for (let key in object) {
  // code to execute for each key in the object
}

// for...of loop

for (let value of iterable) {
  // code to execute for each value in the iterable
}

// break statement

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; // exit the loop when i is 5
  }
  // code to execute in each iteration
}

// continue statement

for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue; // skip even numbers
  }
  // code to execute for odd numbers
}

// labeled statement

outerLoop: for (let i = 0; i < 5; i++) {
  innerLoop: for (let j = 0; j < 5; j++) {
    if (i === 2 && j === 2) {
      break outerLoop; // exit the outer loop
    }
    // code to execute in each iteration
  }
}

// return statement

function exampleFunction() {
  if (condition) {
    return valueIfTrue; // exit the function and return valueIfTrue
  }
  return valueIfFalse; // exit the function and return valueIfFalse
}

// throw statement

function exampleFunction() {
  if (errorCondition) {
    throw new Error("An error occurred"); // throw an error
  }
  // code to execute if no error
}

// async...await

async function exampleFunction() {
  try {
    let result = await asyncOperation(); // wait for the async operation to complete
    // code to execute after the async operation
  } catch (error) {
    // code to handle any errors
  }
}
// import statement

import { moduleFunction } from 'module-name';

// export statement

export function exportedFunction() {
  // code for the exported function

}

// yield statement

function* exampleGenerator() {
  yield value1; // pause and yield value1
  yield value2; // pause and yield value2
  return finalValue; // return finalValue when done
}       

// with statement (not recommended for use)

with (object) {
  // code that can access properties of the object directly
}

// debugger statement

function exampleFunction() {
  debugger; // pause execution for debugging
  // code to execute
}

falsy values:

false,
0,
"" (empty string),
null,
undefined,
NaN

truley values:

true,
non-zero numbers (e.g., 1, -1, 3.14),
non-empty strings (e.g., "hello", "0"),
objects (including empty objects {}),
arrays (including empty arrays []),
functions (e.g., function() {}, () => {})   

nullesh is a special value in JavaScript that represents the intentional absence of any object value. It is often used to indicate that a variable should not point to any object or that a function does not return a value.

undefined is a primitive value in JavaScript that indicates that a variable has been declared but has not been assigned a value. It is also the default return value of functions that do not explicitly return anything.

NaN stands for "Not-a-Number" and is a special value in JavaScript that represents an invalid number. It is typically the result of an operation that cannot produce a valid number, such as dividing zero by zero or trying to parse a non-numeric string as a number. NaN is unique in that it is not equal to itself, meaning that NaN === NaN will return false. To check if a value is NaN, you can use the built-in function isNaN(value).

example 
let x ;

x = null ?? "default value"; // x will be assigned "default value" because null is considered a falsy value

x = undefined ?? "default value"; // x will be assigned "default value" because undefined is considered a falsy value

x = NaN ?? "default value"; // x will be assigned "default value" because NaN is considered a falsy value

x = 0 ?? "default value"; // x will be assigned 0 because 0 is considered a falsy value but not null or undefined

x = "" ?? "default value"; // x will be assigned "" because an empty string is considered a falsy value but not null or undefined

x = false ?? "default value"; // x will be assigned false because false is considered a falsy value but not null or undefined

x = "hello" ?? "default value"; // x will be assigned "hello" because it is a truthy value

x = 42 ?? "default value"; // x will be assigned 42 because it is a truthy value

x = {} ?? "default value"; // x will be assigned {} because an empty object is a truthy value

x = [] ?? "default value"; // x will be assigned [] because an empty array is a truthy value

x = function() {} ?? "default value"; // x will be assigned the function because functions are truthy values