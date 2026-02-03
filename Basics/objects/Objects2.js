const userDetails = {}

userDetails.name = "Alice"
userDetails.age = 30
userDetails.isMember = true
userDetails.getGreeting = function() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`
}

// console.log(userDetails.getGreeting()) 

const { name, age, isMember, getGreeting } = userDetails

console.log(name)         // Output: Alice
console.log(age)          // Output: 30
console.log(isMember)     // Output: true
console.log(getGreeting()) // Output: Hello, my name is Alice and I am 30 years old.

https://api.github.com/users/asiffmahmad