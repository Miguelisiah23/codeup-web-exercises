"use script";

function firstFunction(name) {
    return name;
}

console.log(firstFunction("Miguel"));

// parseEverything as a function

function parseEverything(input) {
    input = parseFloat(input);
    return input;
}

let price = parseEverything(prompt("How much does it cost? "));

// using the ( .toFixed ) method to only set it 2 decimal places

console.log(price.toFixed(2))


// Function to determine if something is a string

function isString(maybeStr) {
    return typeof maybeStr === "string";

}

console.log(isString());

// function to determine if input is a number

function isNumber(maybeNum) {
    return typeof maybeNum === "number";
}

console.log(isNumber());

// added ! to determine if it is NOT a number with same function code

console.log(!isNumber());

// Function Expression

const increment = function increment(x) {
    return x + 1;
}
console.log(increment(4));

// arrow function

const myArrowFunction = (firstName, lastName) => firstName + " " + lastName;
console.log(myArrowFunction("Miguel", "romero"));

//  Function Scope

//you will never see this as long as weekdays* variable is assigned withing function scope unless console logged outside of scope
let weekdays = 6

function scopeTest() {
    let weekdays = 5
    console.log(weekdays)
}

scopeTest();
