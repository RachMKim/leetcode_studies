/*
Given an integer numRows, return the first numRows of Pascal's triangle.

Example 1:

Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
Example 2:

Input: numRows = 1
Output: [[1]]

*/
/*
1. set up final result array that will be returned at the end
2. push the first subarray if the input is greater or equal to 1
3. while the length of result array is less than the input numRows,
have a subarray to hold everything

4. we are going to use the last element of the result array to calculate the next one
5. there always needs to be 1 at each end so push in 1 to subarray
6. as long as the lastSubArr in resultArr length is >= 2, this also accounts for if numRow = 2
7. we are going to iterate through the lastSubArr right before the last element to add the
num[i] + num[i+1] - hence not iterating through the end but until it.
8. push the sum of 2 nums into subArr
9. after iteration finishes push 1 at the end to finish the pattern
10. now that subArr is finished, push that to overal result array
11. return result array
*/

var generate = function (numRows) {
  let result = [];

  if (numRows >= 1) {
    result.push([1]);
  }

  while (result.length < numRows) {
    let subArr = [];
    let lastSubArr = result[result.length - 1];
    subArr.push(1);
    if (lastSubArr.length >= 2) {
      for (let i = 0; i < lastSubArr.length - 1; i++) {
        subArr.push(lastSubArr[i] + lastSubArr[i + 1]);
      }
    }
    subArr.push(1);
    result.push(subArr);
  }
  return result;
};
