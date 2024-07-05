/*
Write a function pairsMaker(arr) that takes in a an array as an argument. The
function should return a 2D array where the subarrays represent unique pairs of
element from the input array.
*/

// Your code here 
function pairsMaker(arr) {
        let array2D = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) { //if j is i + 1 it is always looking forward in the array
            array2D.push([arr[i], arr[j]]); //should automatically set up a unique pair
            //console.log(i, j);
        }
    }
    return array2D;
}

console.log(pairsMaker(["a", "b", "c", "d"]));
// //=> [ [ 'a', 'b' ],
// //     [ 'a', 'c' ],
// //     [ 'a', 'd' ],
// //     [ 'b', 'c' ],
// //     [ 'b', 'd' ],
// //     [ 'c', 'd' ] ]

console.log(pairsMaker(["Rosemary", "Alex", "Connor"]));
// //=> [ [ 'Rosemary', 'Alex' ],
// //   [ 'Rosemary', 'Connor' ],
// //   [ 'Alex', 'Connor' ] ]

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = pairsMaker;
