"use script";

function arrStr(arr) {
    let x = "";
    for (let str of arr)
    {
        x += str[0];
    }
    return x;
}

const testArr = ['apple','blue','orange'];
console.log(arrStr(testArr));

function alphOrder(str) {
  str = str.split("").sort().join("");
  return str;
}

console.log(alphOrder("miguel"));


function sumOfElements(arr) {
   let bucket = 0;
   for (let num of arr) {
       bucket += num;
   }
    return bucket;
}

console.log(sumOfElements([1, 2, 3, 4, 5]));

let product1 = {
    name: 'Hammar',
    priceInCents: 400,
    description: 'It is a a hammar.',
    inventory: 25034
}

function returnProductEssentialDetails(product) {
    return {
        name: product.name,
        priceInCents: product.priceInCents
    }
}

console.log(returnProductEssentialDetails(product1));

const hamsters = [
    {
        name: "Hamtaro",
        heightInMM: 86,
        fur: ['orange', 'white'],
        gender: "male",
        dateOfBirth: "August 6"
    } , {
        name: "Bijou",
        heightInMM: 75,
        fur: ['white'],
        gender: "female",
        dateOfBirth: "July 10"
    } , {
        name: "Oxnard",
        heightInMM: 100,
        fur: ['grey', 'white'],
        gender: "male",
        dateOfBirth: "May 3"
    } , {
        name: "Boss",
        heightInMM: 120,
        fur: ['brown', 'white'],
        gender: "male",
        dateOfBirth: "Spetember 21"
    } , {
        name: "Snoozer",
        heightInMM: 85,
        fur: ['brown', 'white', "pink"],
        gender: "male",
        dateOfBirth: "January 14"
    }
];

function returnHighestObject (arr) {
    let tallest = {heightInMM: 0};
    for (let hamster of arr) {
        if (hamster.heightInMM > tallest.heightInMM) {
            tallest = hamster;
        }
    }

        return tallest;

}

console.log(returnHighestObject(hamsters));


function mostColorful (arr) {
    let colorful = {fur: []};
    for (let color of arr) {
        if (color.fur.length > colorful.fur.length) {
            colorful = color;
        }
    }
    return colorful;

}

console.log(mostColorful(hamsters));

function returnObject (str) {
    const obj = {};
    obj.str = str;
    obj.size = str.length;
    obj.isOneWord = str.indexOf(" ") < 0;
    let lc = str.toLowerCase();
    if (lc.includes("r") || lc.includes("s") || lc.includes("t") || lc.includes("l") ||  lc.includes("n") || lc.includes("e")) {
        obj.containsLetterFromRSTLINE = true;
    } else {
         obj.containsLetterFromRSTLINE = false;
    }
        return obj;
}
console.log(returnObject("tococat"));

