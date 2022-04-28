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