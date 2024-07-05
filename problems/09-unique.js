/*
Write a function unique that accepts an array as an argument. The function
should return a new array containing elements of the input array, without
duplicates.
*/

// Your code here 

function unique(array) { //this is just unique pairs again except capturing only unique values
    let newArray = []; 

    for (i = 0; i < array.length; i++){
        for (j = i + 1; j < array.length; j++) { 
            if ((j === array.length - 1) && (array[i] === array[j])) {
                newArray.push(array[i]);
                return newArray;
            }
            else if ((array[i] === array[j])) { //if a pair that's the same
                newArray.push(array[i]); //push it cus we do still want it
                 i = j;//however we need to skip the same value it gave us
            } else if (!(array[i] === array[j])) {
                newArray.push(array[j]);
            }

        }

    }
    return newArray;
}

console.log(unique([1, 1, 2, 3, 3]));         // [1, 2, 3]
// console.log(unique([11, 7, 8, 10, 8, 7, 7])); // [11, 7, 8, 10]
// console.log(unique(["a", "b", "c", "b"]));    // ['a', 'b', 'c']

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = unique;
