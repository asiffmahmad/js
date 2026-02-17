console.log("For Each Loop:");

const array = ["a", "b", "c", "d", "e"];
array.forEach((element, index) => {
  //console.log(`Element at index ${index}:`, element);
});

const numbers = [1, 2, 3, 4, 5];
numbers.forEach((number, index) => {
  //console.log(`Number at index ${index}:`, number);
});

const users = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 }
];
users.forEach((user, index) => {
  //console.log(`User at index ${index}:`, user.name, user.age);
});

const books = [
  { title: "Book A", author: "Author A" },
  { title: "Book B", author: "Author B" },
  { title: "Book C", author: "Author C" }
];


const bookTitles = books.filter(book => book.author === "Author B").map(book => book.title);
//console.log("Books by Author B:", bookTitles);

const num = [1, 2, 3, 4, 5];
const squaredNumbers = num.map(number => number * number);
console.log("Squared Numbers:", squaredNumbers);

const evenNumbers = num.filter(number => number % 2 === 0);
//console.log("Even Numbers:", evenNumbers);

const sum = num.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
//console.log("Sum of Numbers:", sum);