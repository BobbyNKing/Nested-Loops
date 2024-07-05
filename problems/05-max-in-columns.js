/*
Write a function maxColumn(matrix) that takes in a 2-dimensional array (matrix)
and returns an array containing the maximum value in each column.
The return array's length should be equal to the number of columns, such that
each of its elements is the max value in a column.
*/

//i solved the wrong problem sorry about it 
/*
function maxColumn(matrix) {
  let matrixMax = [];
  let colMax = 0;

    for (i = 0; i < matrix.length; i++) {
      for (j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] > colMax) {
          colMax = matrix[i][j]; 
        }
        
      }
      matrixMax.push(colMax); //once J loop finishes up, push what colMax ends up being into the returning matrix
      colMax = 0; //need to reset colMax 
    }

    return matrixMax; //return what the loops come up with
}*/

function maxColumn(matrix) { 
let matrixMax = []; 
let whichMax = [];
let colMax = 0; 
let col1 = 0; 
let col2 = 0; 
let col3 = 0; 

      
        for (j = 0; j < matrix.length; j++) {
          whichMax.push(matrix[0][j]); //we always know we want to grab from these indexes if we're doing columns
          whichMax.push(matrix[1][j]);
          whichMax.push(matrix[2][j]); //now we have an array with the column values, whichMax
            for (o = 0; o < whichMax.length; o++) { //we getting mega nested now
              if (whichMax[o] > colMax) {
                colMax = whichMax[o]; //define colMax temporarily to compare to other two values grabbed
              }
            }
            matrixMax.push(colMax); //we've gotten through the O loop, colMax should have max value of column
            colMax = 0; //reset colMax
                }
                
      
      return matrixMax; 

}

matrix = [
[5, 9, 21],
[9, 19, 6],
[12, 14, 15],
];

console.log(maxColumn(matrix)); // [12, 19, 21]

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = maxColumn;
