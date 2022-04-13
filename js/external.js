"use strict";

console.log("Hello from external JavaScript")

alert("Welcome to my website!");

// prompt for favorite color and alert said color is my favorite too.

let favoriteColor = prompt("what is your favorite color?");

alert("Great! " + favoriteColor + " is my favorite color too!");

// Exercise 3 in external js

let littleMermaid = prompt("How many days will you rent little mermaid?");
littleMermaid = parseFloat(littleMermaid);

let brotherBear = prompt("How many days will you rent Brother bear?");
brotherBear = parseFloat(brotherBear);

let hercules = prompt("How many days will you rent hercules?");
hercules = parseFloat(hercules);

let fee = prompt("How much is the rental fee?");
fee = parseFloat(fee);

let total = ((littleMermaid + brotherBear + hercules) * fee);
alert("Your total is " + total + " dollars.");

// same as above except I used parseFloat on the same line as the prompt function.

let google = parseFloat(prompt("How much does google pay you hourly?"));

let googleHours = parseFloat(prompt("How many hours did you  work?"));

let amazon = parseFloat(prompt("How much does Amazon pay you hourly? "));

let amazonHours = parseFloat(prompt("How many hours did you work?"));


let facebook = parseFloat(prompt("How much does Facebook pay you hourly?"));

let facebookHours = parseFloat(prompt("How many hours did you work?"));

let paycheck = ((google * googleHours) + (amazon * amazonHours) + (facebook * facebookHours));
alert("Your paycheck is " + paycheck + " dollars.");


let enroll = confirm("Is the class full ?");
alert(enroll);

let schedule = confirm("Does the schedule conflict with yours?");
alert(schedule);

let student = enroll || schedule;
if (student === false) {
    alert("You can enroll!");
} else {
    alert("You cannot enroll");

}

let twoOrMore = confirm("Do you have more than two items?");
alert(twoOrMore);

let expire = confirm("Is the offer still valid?");
alert(expire);

let premium = confirm("Are you a premium member?");
alert(premium);

let offer = twoOrMore && expire || premium;
if (offer === true) {
    alert("You qualify!");
} else {
    alert("You do not qualify");
}






