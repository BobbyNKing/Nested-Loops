/*
Write a function pairProduct that accepts an array of numbers and a product as
arguments. The function should return a boolean indicating whether or not a pair
of distinct elements in the array result in the product when multiplied
together.
You may assume that the input array contains unique elements.
*/

// Your code here 
function pairProduct(array, product) { //if ANY two numbers result in target, result out in true
    //this is like the unique arrays problem, only checking a sum as well

    for (i = 0; i < array.length; i++){
        for (j = i + 1; j < array.length; j++) {
            if (array[i] * array[j] === product) { //if unique pair is equal to target argument, return true, no more testing needed
                return true;
                }
        }

    }

return false; //if we go through entire array and never hit target, return false
}


// console.log(pairProduct([4, 2, 5, 8], 16));    // true
// console.log(pairProduct([8, 1, 9, 3], 8));     // true
// console.log(pairProduct([3, 4], 12));          // true
// console.log(pairProduct([3, 4, 6, 2, 5], 12)); // true
// console.log(pairProduct([4, 2, 5, 7], 16));    // false
// console.log(pairProduct([8, 4, 9, 3], 8));     // false
// console.log(pairProduct([3], 12));             // false

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = pairProduct;
