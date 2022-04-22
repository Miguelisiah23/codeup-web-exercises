"use strict";
// prompt loop for a number ONLY less than 50, greater than 1 and is odd

let askNum;

function oddOnly() {
    while (true) {
        askNum = prompt("Give me a ODD number between 1 and 50");
        if (askNum <= 50 && askNum >= 1 && askNum % 2 !== 0) {
            break;
        }
    }
}

oddOnly();

// added the product of function oddOnly into the function of oddNum
// will print every odd number ans say skip to the passed in odd number

function oddNum() {
    let num = +askNum;
    for (let x = 1; x <= 50; x++) {
        if (x % 2 === 0) {
            continue;
        } else if (num === x) {
            console.log("YIKES " + num + " is bad luck im going to skip!");
            continue;
        }
        console.log(x);
    }
}

oddNum();