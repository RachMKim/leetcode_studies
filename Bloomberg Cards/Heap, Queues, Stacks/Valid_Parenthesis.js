/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.


Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false

"([}}])" - false
*/

let opposite = { ")": "(", "]": "[", "}": "{" };

var isValid = function (s) {
  if (s.length % 2 !== 0) return false;

  let stack = []; // "(", "["

  for (let i = 0; i < s.length; i++) {
    if (stack.length && opposite[s[i]] === stack[stack.length - 1]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }

  return stack.length ? false : true;
};

console.log(isValid("([}}])")); // false
console.log(isValid("()[]{}")); // true

var isValid = function (s) {
  const stack = [];
  const map = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (let i = 0; i < s.length; i++) {
    let c = s[i];
    if (map[c]) {
      stack.push(map[c]);
    } else if (c !== stack.pop()) {
      return false;
    }
  }

  return !stack.length;
};
