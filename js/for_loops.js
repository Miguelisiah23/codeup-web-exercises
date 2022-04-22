"use strict";

// example 1 for-loops exercise

function showMultiplicationTable(num) {
    for (let x = 1; x <= 10; x++) {
        let timesTable = num * x;
        console.log(num + " x " + x + " = " + timesTable)
    }
}

showMultiplicationTable(7);

// example 2 for-loops
for (let int = 1; int < 11; int++) {
    let randomNum = Math.floor(Math.random() * 181) + 20;
    if (randomNum % 2 === 0) {
        console.log(randomNum + " is Even.")
        continue;
    }
    console.log(randomNum + " Is odd.")
}

// example 3 two ways to do this depeing if using numbers or string

// numbers*
for (let x = 1; x <= 9; x++) {
    console.log((x.toString().repeat(x)))
}
// strings*
// for (let x = 0; x < 10; x++) {
//     let txt = x
//     for (let y = 0; y < x; y++) {
//         txt = txt.toString() + y
//         console.log(x);
//     }
// }


for (let x = 100; x >= 5; x -= 5) {
    console.log(x)
}