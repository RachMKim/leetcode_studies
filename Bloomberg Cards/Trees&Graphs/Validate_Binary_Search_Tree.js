/*
Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.


Example 1:
   2
 /   \
1     3

Input: root = [2,1,3]
Output: true
Example 2:

        5
       / \
      1   4
        /   \
      3       6
Input: root = [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.
*/

/*
This is a very classic BST problem, we just need to scan every single node in the tree and see if the node's value matches the BST rules, that is all the values in node's left subtree are less than the value in node, and all the values in node's right subtree are greater than the value in node, if we found a node that doesn't satisfy the rules, simply return false from the recursion.
*/

var isValidBST = function (root) {
  return helper(root, null, null);
};

function helper(root, min, max) {
  if (!root) {
    return true; // We hit the end of the path
  }

  if ((min !== null && root.val <= min) || (max !== null && root.val >= max)) {
    return false; // current node's val doesn't satisfy the BST rules
  }

  // Continue to scan left and right
  return helper(root.left, min, root.val) && helper(root.right, root.val, max);
}

/*
At each function call, we check if the current node value is contained between an upper and lower bounds.

The upper bound is reduced each time we dive in the left branch, and the lower bound is increased each time we dive in the right branch.

indeed, all the nodes of the left branch must be lower than the current node (including the ones in right branches as long as they are deeper), and vice versa.


*/

// var isValidBST = function(root, upperBound=Infinity, lowerBound=-Infinity) {
//   if (!root) { return true; }
//   if (root.val >= upperBound || root.val <= lowerBound) return false;

//   return isValidBST(root.left, Math.min(upperBound, root.val), lowerBound) &&
//          isValidBST(root.right, upperBound, Math.max(lowerBound, root.val));
// };

// var isValidBST = function(root, lo=-Infinity, hi=Infinity) {
//   if (!root)
//       return true
//   let left = isValidBST(root.left, lo, root.val),
//       right = isValidBST(root.right, root.val, hi)
//   return left && right && root.val > lo && root.val < hi
// };

var isValidBST = function (root, min = null, max = null) {
  if (!root) return true;
  if (min && root.val <= min.val) return false;
  if (max && root.val >= max.val) return false;
  return isValidBST(root.left, min, root) && isValidBST(root.right, root, max);
};
// My solution

// have everything in array form -in ordered DFS
// make sure everything is in incrementing order

// var isValidBST = function(root) {
//   let ordered = inOrder(root)

//   for (let i = 0; i < ordered.length; i++){
//       if (ordered[i] >= ordered[i+1]) return false
//   }

//   return true
// };

// function inOrder(root){
//   if (!root) return []
//   return [...inOrder(root.left), root.val, ...inOrder(root.right)]
// }

let tree = {
  val: 2,
  left: { val: 1, left: null, right: null },
  right: { val: 3, left: null, right: null },
};

console.log(isValidBST(tree));
