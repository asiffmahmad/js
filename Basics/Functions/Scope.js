let a = 10;
function testScope() {
     let a = 101;
    let b = 20;
     console.log(a); // 10
    // console.log(b); // 20
}
testScope();
console.log(a); // ReferenceError: b is not defined

const globalVar = "I am a global variable";

function outerFunction() {
    const outerVar = "I am an outer variable";
    
    function innerFunction() {
        const innerVar = "I am an inner variable";
        // console.log(globalVar); // I am a global variable
        // console.log(outerVar);  // I am an outer variable
        // console.log(innerVar);  // I am an inner variable
    }
    
    innerFunction();
    // console.log(innerVar); // ReferenceError: innerVar is not defined
}

outerFunction();

var x = 5;
function varScope() {
    // console.log(x); // 5
    var x = 10;
    // console.log(x); // 10
}
varScope();