////////////////////////
// draw me a chessboard
////////////////////////


// A grid is a perfect starting point for many games (Chess, battleships, Candy Crush!).

// Making a digital chessboard I think is an interesting way of visualising how loops can work together.

// Your task is to write a function that takes two integers rows and columns and returns a chessboard pattern as a two dimensional array.

// So chessBoard(6,4) should return an array like this:

// [
//   ["O","X","O","X"],
//   ["X","O","X","O"],
//   ["O","X","O","X"],
//   ["X","O","X","O"],
//   ["O","X","O","X"],
//   ["X","O","X","O"]
// ]

// And chessBoard(3,7) should return this:

// [
//     ["O","X","O","X","O","X","O"],
//     ["X","O","X","O","X","O","X"],
//     ["O","X","O","X","O","X","O"]
// ]

// The white spaces should be represented by an: 'O'

// and the black an: 'X'

// The first row should always start with a white space 'O'




// My Solution

function chessBoard(rows, columns) {
  var chessBoard = [];
  for (var i = 0; i < rows; i++) {
   var row = [];
   for (var j = 0; j < columns; j++) {
     if (j % 2 === 0) {
       if(i % 2 === 0) {
         row.push("O");
       } else {
         row.push("X");
       }
     } else {
       if(i % 2 === 0) {
         row.push("X");
       } else {
         row.push("O");
       }
     }
   }
   chessBoard.push(row);
  }
  return chessBoard;
 }

// Best Practices

// function chessBoard(rows, columns) {
//   return Array.from({length: rows}, (_,i) => Array.from({length: columns}, (_,j) => 'OX'[(i+j)%2]));
// }

// Clever

// function chessBoard(rows, columns) {
//   return Array.from({length: rows}, (_,i) => Array.from({length: columns}, (_,j) => 'OX'[(i+j)%2]));
// }

module.exports = chessBoard;