/*
Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

A leaf is a node with no children.



Example 1:


Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
Output: true
Explanation: The root-to-leaf path with the target sum is shown.
Example 2:


Input: root = [1,2,3], targetSum = 5
Output: false
Explanation: There two root-to-leaf paths in the tree:
(1 --> 2): The sum is 3.
(1 --> 3): The sum is 4.
There is no root-to-leaf path with sum = 5.
Example 3:

Input: root = [], targetSum = 0
Output: false
Explanation: Since the tree is empty, there are no root-to-leaf paths.
*/

var hasPathSum = function (root, targetSum) {
  // check if it is a tree
  if (!root) return false;

  // now DFS traverses the tree in recursive fashion, thus we need a base case first
  // basecase: if the current node is a leaf and its value equals to the sum, we found a path
  if (root.val === targetSum && !root.left && !root.right) {
    return true;
  }

  // otherwise recursively traverse through the left and right subtree by subtracting the current node with the sum
  // return true if any of the left or right subtree equals true
  return (
    hasPathSum(root.left, targetSum - root.val) ||
    hasPathSum(root.right, targetSum - root.val)
  );
};
let tree = {
  val: 1,
  left: { val: 2, left: null, right: null },
  right: { val: 3, left: null, right: null },
};
console.log(hasPathSum(tree, 5));
/*
   1
  /  \
2     3

*/
