/*
This question is about implementing a basic elimination algorithm for Candy Crush.

Given an m x n integer array board representing the grid of candy where board[i][j] represents the type of candy. A value of board[i][j] == 0 represents that the cell is empty.

The given board represents the state of the game following the player's move. Now, you need to restore the board to a stable state by crushing candies according to the following rules:

If three or more candies of the same type are adjacent vertically or horizontally, crush them all at the same time - these positions become empty.
After crushing all candies simultaneously, if an empty space on the board has candies on top of itself, then these candies will drop until they hit a candy or bottom at the same time. No new candies will drop outside the top boundary.
After the above steps, there may exist more candies that can be crushed. If so, you need to repeat the above steps.
If there does not exist more candies that can be crushed (i.e., the board is stable), then return the current board.
You need to perform the above rules until the board becomes stable, then return the stable board.



Example 1:


Input: board = [[110,5,112,113,114],[210,211,5,213,214],[310,311,3,313,314],[410,411,412,5,414],[5,1,512,3,3],[610,4,1,613,614],[710,1,2,713,714],[810,1,2,1,1],[1,1,2,2,2],[4,1,4,4,1014]]
Output: [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[110,0,0,0,114],[210,0,0,0,214],[310,0,0,113,314],[410,0,0,213,414],[610,211,112,313,614],[710,311,412,613,714],[810,411,512,713,1014]]
Example 2:

Input: board = [[1,3,5,5,2],[3,4,3,3,1],[3,2,4,5,2],[2,4,4,5,5],[1,4,4,1,1]]
Output: [[1,3,0,0,0],[3,4,0,5,2],[3,2,0,3,1],[2,4,0,5,2],[1,4,3,1,1]]
*/

/*
NOTES

This is a relatively long solution because of the based case of the problem.
To solve this problem we just need to understand how to "Candy Crush Works"

Step to solve:

Scan all rows to see if there are any same number
Scan all cols to see if there are any same number
By scanning them, we need to negate their abs value for example [1,1,1,1] => [-1,-1,-1,-1] etc
after we scan all possible candy that need to be remove we will need to actually remove them. Also, there is a problem that is very similar if not exactly the same which is "Move Zeros"
In the last bit of for loop, we are basically doing the same operation as "Move Zeros" basically if board[row][col] > 0, then we have to do this board[index][col] = board[row][col]; which will shift the value that isn't negative down.
Then we get to the point where we need to add the remaining zeros from our starting index.
Finally, we just need to recursively call candyCrush till we can't crush anymore candy and return the board.
*/

var candyCrush = function (board) {
  let needCrush = false;

  // check and tag row
  for (let row = 0; row < board.length; row++) {
    let start = 0;
    for (let col = 0; col < board[0].length; col++) {
      // check to see if we have at least have 3 elements to compare
      if (col - start >= 2) {
        const num3 = Math.abs(board[row][col]);
        const num2 = Math.abs(board[row][col - 1]);
        const num1 = Math.abs(board[row][col - 2]);

        if (num3 == num2 && num2 == num1 && num1 != 0) {
          board[row][col] = -num3;
          board[row][col - 1] = -num2;
          board[row][col - 2] = -num1;
          needCrush = true;
        }

        start++;
      }
    }
  }

  // check and tag col
  for (let col = 0; col < board[0].length; col++) {
    let start = 0;
    for (let row = 0; row < board.length; row++) {
      if (row - start >= 2) {
        const num3 = Math.abs(board[row][col]);
        const num2 = Math.abs(board[row - 1][col]);
        const num1 = Math.abs(board[row - 2][col]);

        if (num3 == num2 && num2 == num1 && num1 != 0) {
          board[row][col] = -num3;
          board[row - 1][col] = -num2;
          board[row - 2][col] = -num1;
          needCrush = true;
        }
        start++;
      }
    }
  }

  // gravity
  for (let col = 0; col < board[0].length; col++) {
    let index = board.length - 1;
    // remove and shift down
    for (let row = board.length - 1; row >= 0; row--) {
      if (board[row][col] > 0) {
        board[index][col] = board[row][col];
        index -= 1;
      }
    }

    // add zero
    for (let row = index; row >= 0; row--) {
      board[row][col] = 0;
    }
  }

  return !needCrush ? board : candyCrush(board);
};

// let board = [
//   [110, 5, 112, 113, 114],
//   [210, 211, 5, 213, 214],
//   [310, 311, 3, 313, 314],
//   [410, 411, 412, 5, 414],
//   [5, 1, 512, 3, 3],
//   [610, 4, 1, 613, 614],
//   [710, 1, 2, 713, 714],
//   [810, 1, 2, 1, 1],
//   [1, 1, 2, 2, 2],
//   [4, 1, 4, 4, 1014],
// ];

// let output = [
//   [0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0],
//   [110, 0, 0, 0, 114],
//   [210, 0, 0, 0, 214],
//   [310, 0, 0, 113, 314],
//   [410, 0, 0, 213, 414],
//   [610, 211, 112, 313, 614],
//   [710, 311, 412, 613, 714],
//   [810, 411, 512, 713, 1014],
// ];
let board = [
  [1, 3, 5, 5, 2],
  [3, 4, 3, 3, 1],
  [3, 2, 4, 5, 2],
  [2, 4, 4, 5, 5],
  [1, 4, 4, 1, 1],
];
let newArr1 = [
  [1, 3, 0, 5, 2],
  [3, 4, 0, 3, 1],
  [3, 2, 0, 5, 2],
  [2, 4, 5, 5, 5],
  [1, 4, 3, 1, 1],
];
let newArr2 = [
  [1, 3, 0, 5, 2],
  [3, 4, 0, 3, 1],
  [3, 2, 0, 5, 2],
  [2, 4, 0, 0, 0],
  [1, 4, 3, 1, 1],
];
let output = [
  [1, 3, 0, 0, 0],
  [3, 4, 0, 5, 2],
  [3, 2, 0, 3, 1],
  [2, 4, 0, 5, 2],
  [1, 4, 3, 1, 1],
];
console.log(candyCrush(board));
