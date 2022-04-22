(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

    let names = ['Miguel', 'Dom','isiah','sean']

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */

    console.log(names.length);

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */

    for (let x = 0; x < names.length; x++) {
        console.log(names[x] + " is one of the names in this array.")
    }

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */

    names.forEach(function(name) {
        console.log(name)
    });


    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

let arrNum= [1,2,3,4,5]

function first (arrNum) {
    return arrNum[0] + " is the first element in this array";
}

function second (arrNum) {
    return arrNum[1] + " is the second element in this array";
}

function last (arrNum) {
    return arrNum[arrNum.length - 1] + " is the last element in this array";
}

console.log(first(arrNum));
console.log(second(arrNum));
console.log(last(arrNum));

})();
