/*
Write a function twoSum(arr, target) that accepts an array and a target number
as args. The function should a return a boolean indicating if two distinct
numbers of the array add up to the target value. You can assume that input array
contains only unique numbers.
*/

// Your code here 

function twoSum(arr, target) { //if ANY two numbers result in target, result out in true
                               //this is like the unique arrays problem, only checking a sum as well

    for (i = 0; i < arr.length; i++){
        for (j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) { //if unique pair is equal to target argument, return true, no more testing needed
                return true;
            }
        }

    }
    return false; //if we go through entire array and never hit target, return false
}

// console.log(twoSum([1, 7, 3, 0, 2], 5)); // true
// console.log(twoSum([1, 7, 3, 0, 2], 6)); // false
// console.log(twoSum([4, 6, 2, 3], 8));    // true
// console.log(twoSum([4, 6, 2, 3], 11));   // false

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = twoSum;
