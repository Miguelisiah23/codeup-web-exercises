"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

function analyzeColor(colorName) {
    if (colorName === "gray") {
        return "Gray is my favorite color!";
    } else if (colorName === "red") {
        return "Red is the color of my 'needs help' cup.";
    } else {
        return "I dont know anything about " + colorName + ".";
    }
}

console.log(analyzeColor("gray"));


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
let randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */
console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */

function analyzeColorSwitch(colorName) {
    switch (colorName) {
        case "gray":
            return "Gray is my favorite color!";
        case "red":
            return "Red is the color of my 'needs help' cup.";
        default:
            return "I dont know anything about " + colorName + ".";

    }
}

console.log(analyzeColorSwitch(randomColor));

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */


let colorName = prompt("Pick a color! any color.")
alert(analyzeColor(colorName.toLowerCase().trim()));

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function calculateTotal(luckyNum, totalAmount) {
    if (luckyNum === 0) {
        luckyNum = 0;
    } else if (luckyNum === 1) {
        luckyNum = .10;
    } else if (luckyNum === 2) {
        luckyNum = .25;
    } else if (luckyNum === 3) {
        luckyNum = .35;
    } else if (luckyNum === 4) {
        luckyNum = .50;
    } else if (luckyNum === 5) {
        luckyNum = 1;
    }
    return totalAmount - (luckyNum * totalAmount);
}

console.log(calculateTotal(0, 100));
console.log(calculateTotal(4, 100));
console.log(calculateTotal(5, 100));


/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
let luckyNumber = Math.floor(Math.random() * 6);
let totalAmount = parseFloat(prompt("what is your bill total?"));
alert("Your lucky number is " + luckyNumber);
alert("Your bill total was " + totalAmount);
alert("Your price after discount is " + calculateTotal(luckyNumber, totalAmount.toFixed(2)));


/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
let askNum = confirm("Would you like to input a number? click 'ok' for yes.");

if (askNum) {
    let inputNum = +prompt("Input a number.");

    if (isNaN(inputNum)) {
        alert("this is the wrong datatype");
    } else if (inputNum > 0) {
        isEven(inputNum);
        plus100(inputNum);
        isPositive(inputNum);

    } else if (inputNum === 0) {
        isZero(inputNum);
    } else {
        alert("You didnt want to play along...");
    }
}

function isZero(num) {
    if (num === 0) {
        alert(num + " is  neither positive, negative, odd or even.");
    }
}

function isEven(num) {
    // if (num % 2 === 0) {
    //     alert("The number " + num + " is even.");
    // } else {
    //     alert("The number " + num + " is odd.");
    // }

    // Ternary style  if/else statements
    (num % 2 === 0) ? alert("The number " + num + " is even.") : alert("The number " + num + " is odd.");
}

function plus100(num) {
    if (num) {
        alert(num + 100 + " is your number plus 100.");
    }
}

function isPositive(num) {
    // if (num > 0) {
    //     alert("The number " + num + " is positive.");
    // } else if (num < 0) {
    //     alert("The number " + num + " is negative.");
    // }

    // Ternary style  if/else statements
    (num > 0) ? alert("The number " + num + " is positive.") : alert("The number " + num + " is negative.");
}

















