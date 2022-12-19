/*
Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.



Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
Example 2:

Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
*/

// Two pointer way
// var reverseString = function(s) {
//    var i = 0;
//     var j = s.length - 1;
//     while (i < j) {
//         [s[i], s[j]] = [s[j], s[i]];
//         i++;
//         j--;
//     }
// };

// recursion way

// var reverseString = function (s) {
//   let i = 0;
//   let j = s.length - 1;
//   function rec(start, end) {
//     if (end < start) {
//       return;
//     }
//     [s[start], s[end]] = [s[end], s[start]];
//     rec(i++, j--);
//   }
//   rec(i++, j--);
// };

var reverseString = function (s) {
  if (s.length == 0) {
    return;
  }
  let temp = s.shift();
  reverseString(s);
  s.push(temp);
};

console.log(reverseString(["h", "e", "l", "l", "o"]));
