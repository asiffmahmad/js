let age = 30;
let ageString = String(age);
let ageFloat = parseFloat(ageString);
console.log("Age as String:", ageString);
console.log("Age as Float:", ageFloat);

let priceString = "19.99";
let priceNumber = Number(priceString);
let priceInt = parseInt(priceString);
console.log("Price as Number:", priceNumber);
console.log("Price as Integer:", priceInt);

let isMemberString = "true";
let isMemberBoolean = (isMemberString === "true");
console.log("Is Member as Boolean:", isMemberBoolean);

let nullValue = null;
let nullToString = String(nullValue);
let nullToNumber = Number(nullValue);
console.log("Null to String:", nullToString);
console.log("Null to Number:", nullToNumber);

let undefinedValue;
let undefinedToString = String(undefinedValue);
let undefinedToNumber = Number(undefinedValue);
console.log("Undefined to String:", undefinedToString);
console.log("Undefined to Number:", undefinedToNumber);

// Implicit Conversion
let implicitString = "The age is " + age;
console.log("Implicit String:", implicitString);

let implicitNumber = "10" * 2;
console.log("Implicit Number:", implicitNumber);

let implicitBoolean = !!age;
console.log("Implicit Boolean:", implicitBoolean);


let Number1 = Boolean(1000);


console.log("Number variable value:", Number);

// Note: Be cautious with implicit conversions as they can lead to unexpected results.