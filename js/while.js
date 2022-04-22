"use strict";
let x = 1;
while (x < 65536) {
    x *= 2;
    console.log(x);
}

let allCones = Math.floor(Math.random() * 51) + 50;

do {
    let order = Math.floor(Math.random() * 5) + 1;
    console.log(" i have " + allCones + " cones in stock." + " You just ordered " + order + " cones.")
    if (order > allCones ) {
        console.log("I can't sell you " + order + " cones i dont have enough for that...")
    } else {
        console.log("You bought " + order + " cones.");
        allCones -= order;
    }
} while (allCones > 0) {
    console.log("Welp, im sold out ! byeeeeee");
}

