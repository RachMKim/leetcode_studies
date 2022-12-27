/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

// RECURSIVE
// var postorderTraversal = function(root) {
//     let res = []
//     if (!root) return res;
//     res.push(...postorderTraversal(root.left))
//     res.push(...postorderTraversal(root.right))
//     res.push(root.val)

//     return res
// };

// RECURSIVE - ES6
// var postorderTraversal = function(root) {
//    return root ? [...postorderTraversal(root.left), ...postorderTraversal(root.right), root.val] : []
// };

// ITERATIVE
var postorderTraversal = function (root) {
  if (!root) return [];

  var result = [],
    stack = [root];

  while (stack.length) {
    var node = stack.pop();
    // insert the node val to the front
    result.unshift(node.val);

    if (node.left) stack.push(node.left); // left first
    if (node.right) stack.push(node.right); // then right
  }

  return result;
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

console.log(postorderTraversal(tree));
