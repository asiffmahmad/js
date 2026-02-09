
const userDetails = {
    name: "John Doe",
    age: 30,
    city: "New York",
    Welcome: function() {
        console.log(`Welcome, ${this.name}!`);
    }
};

userDetails.Welcome(); // Output: Welcome, John Doe! 


const add = (x, y) => {
    return x + y;
};

console.log(add(5, 3)); // Output: 8

const multiply = (x, y) => x * y;

console.log(multiply(4, 6)); // Output: 24

const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(num => num * num);

console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

// const person = {
//     name: "Alice",
//     greet: function() {
//         setTimeout(() => {
//             console.log(`Hello, ${this.name}!`);
//         }, 1000);
//     }
// };

// person.greet(); // Output after 1 second: Hello, Alice!