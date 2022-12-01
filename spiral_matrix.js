/*Given an m x n matrix, return all elements of the matrix in spiral order.



Example 1:


Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]
Example 2:


Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]


Constraints:

m == matrix.length
n == matrix[i].length
1 <= m, n <= 10
-100 <= matrix[i][j] <= 100

https://leetcode.com/explore/interview/card/bloomberg/68/array-and-strings/395/

*/
// the same logic but in diagram:

// |1 2 3|
// |4 5 6|  =>  |4 5 6| => |4 5 |  => |5  4| => |5  4| => |5  4| => |8 7|
// |7 8 9|      |7 8 9|    |7 8 9|    |7 8 9|   |7 8|     |8 7|     |5 4| => [5 4] => [5]

// // rows extracted:

// |1 2 3|      |6 9|      |8 7|      |4|      |5|
// the same logic but in english:

// Remove the first row and add it to the answer
// Rotate the reminder of the matrix 90* counter clockwise
// Repeat step 1 and 2 until there's no more rows

var spiralOrder = function (matrix) {
  const res = [];
  while (matrix.length) {
    const first = matrix.shift();
    res.push(...first);
    for (const m of matrix) {
      let val = m.pop();
      if (val) res.push(val);
      m.reverse();
    }
    matrix.reverse();
  }
  return res;
};

console.log(
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
