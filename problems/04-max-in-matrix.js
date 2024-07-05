/*
Write a function maxInMatrix(matrix) that takes in a 2-dimensional array
(matrix) and returns the largest value in the matrix. The matrix contains at
least one value.
*/

function maxInMatrix(matrix) { //basically we want to index through the same way in 2 and 3 and find largest number
let largestNum = 0;

    for (i = 0; i < matrix.length; i++) {
      for (j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] > largestNum) {
          largestNum = matrix[i][j]; //this should only activate if the element being examined is larger, therefore replacing it
        }
      }
    }
    return largestNum;
}

 matrix = [
  [11, 2, -99],
   [20, 19, 10],
   [47, 72, 56],
 ];

console.log(maxInMatrix(matrix)); // 72

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = maxInMatrix;
