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