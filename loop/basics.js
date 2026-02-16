console.log("Loop Basics");

// For Loop
for (let i = 0; i < 5; i++) {
  console.log("For Loop:", i);
}

// While Loop
let j = 0;
while (j < 5) {
  console.log("While Loop:", j);
  j++;
}

// Do-While Loop
let k = 0;
do {
  console.log("Do-While Loop:", k);
  k++;
} while (k < 5);

// For...of Loop
const array = ["a", "b", "c", "d", "e"];
for (const element of array) {
  console.log("For...of Loop:", element);
}

// For...in Loop
const object = { name: "Alice", age: 30, city: "New York" };
for (const key in object) {
  console.log("For...in Loop:", key, object[key]);
}   



