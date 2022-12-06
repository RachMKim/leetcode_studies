/*
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.



Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]
*/

var moveZeroes = function (nums) {
  let pt = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[i], nums[pt]] = [nums[pt], nums[i]];
      pt++;
    }
  }
  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
console.log(moveZeroes([1, 0, 1]));
console.log(moveZeroes([1, 0]));

// if the questionw as asking for zeros to be moved in front of array

// var moveZeroes = function(nums) {
//   let pt = 0

//   for (let i = 1; i < nums.length; i++){
//       if (nums[pt] === 0){
//           pt++
//       }
//       if (nums[i] === 0){
//           [nums[i], nums[pt]] = [nums[pt], nums[i]];
//           pt++
//       }
//   }

//   return nums
// };