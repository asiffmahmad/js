const myObj = {
    name: "Alice",
    age: 30,
    city: "New York"
};

//console.log("Object:", myObj);
 //console.log("Name:", myObj.name);
console.log("Age:", myObj["age"]);
// console.log("City:", myObj.city);

// Modifying properties
myObj.age = 31;
// console.log("Updated Age:", myObj.age);

// Adding new property
myObj.country = "USA";
// console.log("Added Country:", myObj.country);

// Deleting property
delete myObj.age;
 console.log("After deleting age:", myObj);