console.log("Loop Basics");

// For Loop
for (let i = 0; i < 5; i++) {
//   console.log("For Loop:", i);
}

// While Loop
let j = 0;
while (j < 5) {
  //   console.log("While Loop:", j);
  j++;
}

// Do-While Loop
let k = 0;
do {
  //   console.log("Do-While Loop:", k);
  k++;
} while (k < 5);

// For...of Loop
const array = ["a", "b", "c", "d", "e"];
for (const element of array) {
  //   console.log("For...of Loop:", element);
}

// For...in Loop
const object = { name: "Alice", age: 30, city: "New York" };
for (const key in object) {
  //   console.log("For...in Loop:", key, object[key]);
}


//maps
const map = new Map();
map.set("name", "Alice");
map.set("age", 30);
map.set("city", "New York");

for (const [key, value] of map) {
 //   console.log("Map Loop:", key, value);
}


//object

const obj = {
    name: "Alice",
    age: 30,
    city: "New York"
};

for (const key in obj) {
    console.log("Object Loop:", key, obj[key]);
}


// difference between for...in and for...of
// The `for...in` loop iterates over the enumerable properties of an object, including inherited properties. It is typically used for iterating over the keys of an object.

// Example:
// const obj = { a: 1, b: 2, c: 3 };
// for (const key in obj) {
//   console.log(key); // Output: a, b, c
// }

// The `for...of` loop iterates over the values of an iterable object, such as an array or a string. It is typically used for iterating over the values of an array.

// Example:
// const array = [1, 2, 3];
// for (const value of array) {
//   console.log(value); // Output: 1, 2, 3
// }   

array.forEach(element => {
  //console.log("forEach Loop:", element);    

});

let forEach = array.forEach(element => {
    console.log("forEach Loop:", element);    
});
console.log("forEach return value:", forEach); // Output: undefined 

