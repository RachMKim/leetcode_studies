/* Binary Tree Preorder Traversal



tree:
    1
  2   3
4  5 6  7

1st iteration:
stack: [1]

2nd iteration:
current node = stack pop last element = 1
current node:
   1
 2   3
stack push right of current node first then followed by left
stack: [3, 2]

3rd iteration:
current node = stack pop last element = 2
current node:
   2
 4   5
stack push right current node first then followed by left
stack: [3, 5, 4]

4th iteration:
current node = stack pop last element = 4
current node:
    4
null null
stack push right current node first then followed by left
stack: [3, 5]

5th iteration:
current node = stack pop last element = 5
current node:
    5
null null
stack push right current node first then followed by left
stack: [3]

6th iteration:
current node = stack pop last element = 3
current node:
  3
6   7
stack push right current node first then followed by left
stack: [7, 6]

7th iteration:
current node = stack pop last element = 6
current node:
     6
null   null
stack push right current node first then followed by left
stack: [7]

8th iteration:
current node = stack pop last element = 6
current node:
     7
null   null
stack push right current node first then followed by left
stack: []
stack.length === 0, false thereby terminating the for looping


*/

// RECURSION

var preorderTraversal = function (root) {
  if (!root) {
    return [];
  }

  return [
    root.val,
    ...preorderTraversal(root.left),
    ...preorderTraversal(root.right),
  ];
};

// ITERATIVE

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  if (!root) {
    return [];
  }

  let stack = [root];
  let arr = [];

  while (stack.length) {
    let curr = stack.pop();
    arr.push(curr.val);

    if (curr.right) {
      stack.push(curr.right);
    }

    if (curr.left) {
      stack.push(curr.left);
    }
  }

  return arr;
};
// tree:
//     1
//   2   3
// 4  5 6  7

let tree = {
  val: 1,
  left: {
    val: 2,
    left: { val: 4, left: null, right: null },
    right: { val: 5, left: null, right: null },
  },
  right: {
    val: 3,
    left: { val: 6, left: null, right: null },
    right: { val: 7, left: null, right: null },
  },
};

//[1,2,4,5,3,6,7]

console.log(preorderTraversal(tree));
