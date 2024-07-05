/*
Define a function called intersect that takes in two array parameters and
returns a new array containing the elements common to both arrays.
*/

// Your code here 
function intersect(array1, array2) {
    let newArray = [];

    for (i = 0; i < array1.length; i++) { //need to compare elements from array1 to each element in array2
        for (j = 0; j < array2.length; j++) { //running through each index of array2 to compare to array1
            if (array1[i] === array2[j]) {
                newArray.push(array1[i]);
            }

        }
    }

    return newArray;
}

console.log(intersect(["a", "b", "c", "d"], ["b", "d", "e"])); //=> [ 'b', 'd' ]
// console.log(intersect(["a", "b", "c"], ["x", "y", "z"])); //=> []

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = intersect;
